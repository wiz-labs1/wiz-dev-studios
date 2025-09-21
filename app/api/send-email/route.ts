// app/api/send-email/route.ts
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.CONTACT_TO_EMAIL || "wiz.dev.studios@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, projectType, budget, timeline, message } =
      await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailContent = `
Wiz Dev Studios -  Contact Form Submission

Client Information:
────────────────────────────
Name       : ${name}
Email      : ${email}
Phone      : ${phone || "N/A"}
Company    : ${company || "N/A"}
Project    : ${projectType || "N/A"}
Budget     : ${budget || "N/A"}
Timeline   : ${timeline || "N/A"}

Message:
────────────────────────────
${message}

────────────────────────────
This email was generated automatically by Wiz Dev Studios contact form.
    `;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // use TLS if port 465
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Wiz Dev Studios Contact" <${SMTP_USER}>`,
      to: EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send message. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
