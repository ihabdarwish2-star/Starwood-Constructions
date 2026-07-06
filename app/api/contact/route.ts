import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("API KEY =", process.env.RESEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, phone, email, service, message } = await req.json();

    const { error } = await resend.emails.send({
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
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}