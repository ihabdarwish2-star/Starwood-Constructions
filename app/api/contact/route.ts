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

    return Response.json({ success: true, data });

  } catch (error) {
    console.error("API crash:", error);
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}