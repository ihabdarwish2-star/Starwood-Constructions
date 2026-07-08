import { Resend } from "resend";

export async function POST(req: Request) {
  try {
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

    // Email 1: notify Starwood of the new quote request (unchanged from before)
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

    // Email 2: confirmation sent to the customer.
    // This runs only after the main notification succeeds. If it fails,
    // we log it but still return success — the customer's request was
    // received either way, so a failed confirmation shouldn't show them
    // an error.
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
      // Intentionally not returning an error here — the main request
      // succeeded, so the customer shouldn't see a failure.
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
