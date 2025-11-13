import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // IMPORTANT: Store these credentials in environment variables
    // For Gmail, you'll need to create an "App Password"
    // See: https://support.google.com/accounts/answer/185833
    // For Outlook, you might also need an App Password if 2-factor auth is enabled.
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com', // Outlook SMTP server
      port: 587, // Standard port for SMTP with STARTTLS
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: 'ekta.thames@gmail.com', // Your receiving email address
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}