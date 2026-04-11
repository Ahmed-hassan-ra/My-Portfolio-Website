"use server"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS via STARTTLS
  auth: {
    user: process.env.SMTP_USER,   // your Gmail address
    pass: process.env.SMTP_PASS,   // Gmail App Password (NOT your Google password)
  },
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: true, message: "All fields are required." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: true, message: "Please enter a valid email address." }
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "ahmedhassan.ramdn@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#a855f7;">New Message from Your Portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:80px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Subject</td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0;"/>
          <p style="color:#333;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          <p style="color:#999;font-size:12px;margin-top:24px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    })

    return {
      success: true,
      error: false,
      message: "Message sent! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("SMTP error:", error)
    return {
      success: false,
      error: true,
      message: "Something went wrong. Email me directly at ahmedhassan.ramdn@gmail.com",
    }
  }
}
