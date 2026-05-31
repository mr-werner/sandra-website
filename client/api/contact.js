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
            location,
            projectType,
            budget,
            message,
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

        /*         FYI : for testing I must use the account linked to my RESEND account,
                that being mr.werner@proton.me
        
                TODO: for the real deployment make sure to change
                to: mr.werner@proton.me
                to
                to: ["hello@atelierformare.com"] */

        const { data, error } = await resend.emails.send({
            from: "Atelier Formare <onboarding@resend.dev>",
            // to: ["hello@atelierformare.com"],
            to: ["mr.werner@proton.me"],
            replyTo: email,
            subject: `New Atelier Formare inquiry from ${name}`,
            text: `
New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Location: ${location || "Not provided"}
Project Type: ${projectType || "Not provided"}
Budget: ${budget || "Not provided"}


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