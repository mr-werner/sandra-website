import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      projectType,
      location,
      message,
      website,
    } = req.body;

    // Honeypot spam check
    if (website) {
      return res.status(200).json({ success: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    /* TODO: After the domain is verified change the
    from: "Atelier Formare <onboarding@resend.dev>",
    to something like 
    from: "Atelier Formare <inquiries@atelierformare.com>", */

    const { data, error } = await resend.emails.send({
      from: "Atelier Formare <onboarding@resend.dev>",
      to: ["hello@atelierformare.com"],
      replyTo: email,
      subject: `New Atelier Formare inquiry from ${name}`,
      text: `
New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Project Type: ${projectType || "Not provided"}
Location: ${location || "Not provided"}

Message:
${message}
      `,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Email failed to send." });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong." });
  }
}