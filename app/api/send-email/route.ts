import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, projectType, budget, timeline, message } = await request.json()

    const emailContent = `
Wiz Dev Studios - New Contact Form Submission

Client Information:
────────────────────────────
Name       : ${name}
Email      : ${email}
Phone      : ${phone}
Company    : ${company || "N/A"}
Project    : ${projectType || "N/A"}
Budget     : ${budget || "N/A"}
Timeline   : ${timeline || "N/A"}

Message:
────────────────────────────
${message}

────────────────────────────
This email was generated automatically by Wiz Dev Studios contact form.
    `

    console.log("Email would be sent to: wiz.dev.studios@gmail.com")
    console.log("Email content:", emailContent)

    // TODO: Integrate with actual email service (Nodemailer, SendGrid, etc.)
    // Example with Nodemailer:
    // const transporter = nodemailer.createTransporter({...})
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: "wiz.dev.studios@gmail.com",
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: emailContent
    // })

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send message. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
