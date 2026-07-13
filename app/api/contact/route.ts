import { Resend } from "resend";

// --- Simple in-memory rate limiter ---
// Limits each IP to 5 requests per hour. This is intentionally basic
// (resets if the server restarts/redeploys) but stops the most common
// abuse case: someone spamming the form repeatedly by hand or with a
// basic script. For stronger protection at scale, a persistent store
// like Vercel KV or Upstash Redis would be the next step.
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) ?? [];

  // Keep only requests from within the current window
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= RATE_LIMIT) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  try {
    // Vercel passes the real client IP in this header
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later or call us directly." },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, phone, email, service, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Starwood Constructions <quotes@starwoodconstructions.com.au>",
      to: "starwood.construction1@gmail.com",
      subject: `New Quote Request - ${service}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr />

        <p><strong>Project Details:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    try {
      await resend.emails.send({
        from: "Starwood Constructions <quotes@starwoodconstructions.com.au>",
        to: email,
        subject: "We've received your quote request - Starwood Constructions",
        html: `
          <h2>Thanks for reaching out, ${name}!</h2>

          <p>We've received your request for <strong>${service}</strong> and
          one of our team will be in touch shortly to discuss your project.</p>

          <p><strong>What you submitted:</strong></p>
          <p>${message}</p>

          <hr />

          <p>If you need to reach us sooner, feel free to call us directly
          on <strong>0450 890 096</strong>.</p>

          <p>— Starwood Constructions<br />
          Formwork • Steel Fixing • Concrete<br />
          Sydney, NSW</p>
        `,
      });
    } catch (confirmationError) {
      console.error("Customer confirmation email failed:", confirmationError);
    }

    return Response.json({ success: true, data });

  } catch (error) {
    console.error("API crash:", error);
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
