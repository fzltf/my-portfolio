import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_TO
    ) {
      return NextResponse.json(
        { message: "SMTP environment variables are missing." },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replaceAll("\n", "<br />");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

   const emailToYou = {
  from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_TO,
  replyTo: email,
  subject: `Portfolio Contact - ${safeName}`,
  text: `
New Portfolio Message

Name: ${name}
Email: ${email}

Message:
${message}
  `,
  html: `
    <div style="margin:0; padding:24px; background-color:#ffffff; font-family:Arial, Helvetica, sans-serif; color:#111827;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px; margin:0 auto; border-collapse:collapse;">
        <tr>
          <td style="padding-bottom:20px; border-bottom:1px solid #e5e7eb;">
            <h2 style="margin:0; font-size:20px; line-height:1.4; font-weight:700; color:#111827;">
              New Portfolio Message
            </h2>
            <p style="margin:8px 0 0; font-size:14px; line-height:1.6; color:#6b7280;">
              You received a new message from your portfolio contact form.
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:20px 0; border-bottom:1px solid #e5e7eb;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              <tr>
                <td style="width:90px; padding:6px 0; font-size:13px; color:#6b7280;">
                  Name
                </td>
                <td style="padding:6px 0; font-size:14px; font-weight:600; color:#111827;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="width:90px; padding:6px 0; font-size:13px; color:#6b7280;">
                  Email
                </td>
                <td style="padding:6px 0; font-size:14px; color:#111827;">
                  <a href="mailto:${safeEmail}" style="color:#2563eb; text-decoration:none; font-weight:600;">
                    ${safeEmail}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding-top:20px;">
            <p style="margin:0 0 10px; font-size:13px; color:#6b7280;">
              Message
            </p>

            <div style="padding:16px; background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; font-size:15px; line-height:1.7; color:#111827;">
              ${safeMessage}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding-top:20px;">
            <p style="margin:0; font-size:12px; line-height:1.6; color:#9ca3af;">
              You can reply directly to this email to respond to ${safeName}.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `,
};

const emailToClient = {
  from: `"Fauza Lutfia" <${process.env.SMTP_USER}>`,
  to: email,
  subject: "I received your message",
  text: `
Hi ${name},

Thank you for contacting me through my portfolio website.

I have received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
Fauza Lutfia
  `,
  html: `
    <div style="margin:0; padding:32px 16px; background-color:#f6f7fb; font-family:Arial, Helvetica, sans-serif; color:#111827;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; margin:0 auto; background-color:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
        <tr>
          <td style="padding:22px 28px; border-bottom:1px solid #e5e7eb;">
            <p style="margin:0; font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#2563eb;">
              Fauza Lutfia Portfolio
            </p>

            <h2 style="margin:12px 0 0; font-size:22px; line-height:1.4; color:#111827;">
              Thank you for reaching out
            </h2>
          </td>
        </tr>

        <tr>
          <td style="padding:28px;">
            <p style="margin:0 0 16px; font-size:15px; line-height:1.8; color:#374151;">
              Hi <strong style="color:#111827;">${safeName}</strong>,
            </p>

            <p style="margin:0 0 18px; font-size:15px; line-height:1.8; color:#374151;">
              Thank you for contacting me through my portfolio website. I have received your message and will review it shortly.
            </p>

            <p style="margin:0 0 18px; font-size:15px; line-height:1.8; color:#374151;">
              I&apos;ll get back to you soon if your message requires a response.
            </p>

            <div style="margin-top:24px; padding:18px 20px; background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:12px;">
              <p style="margin:0 0 12px; font-size:13px; font-weight:700; color:#111827;">
                Message summary
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0; width:80px; font-size:13px; color:#6b7280;">
                    Name
                  </td>
                  <td style="padding:8px 0; font-size:14px; color:#111827; font-weight:600;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0; width:80px; font-size:13px; color:#6b7280;">
                    Email
                  </td>
                  <td style="padding:8px 0; font-size:14px;">
                    <a href="mailto:${safeEmail}" style="color:#2563eb; text-decoration:none; font-weight:600;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:12px; padding-top:14px; border-top:1px solid #e5e7eb;">
                <p style="margin:0 0 8px; font-size:13px; color:#6b7280;">
                  Your message
                </p>

                <div style="font-size:14px; line-height:1.8; color:#111827;">
                  ${safeMessage}
                </div>
              </div>
            </div>

            <p style="margin:28px 0 0; font-size:15px; line-height:1.8; color:#374151;">
              Best regards,<br />
              <strong style="color:#111827;">Fauza Lutfia</strong>
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:18px 28px; background-color:#f9fafb; border-top:1px solid #e5e7eb;">
            <p style="margin:0; font-size:12px; line-height:1.6; color:#9ca3af;">
              This is an automatic confirmation email from Fauza Lutfia&apos;s portfolio contact form.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `,
};

await Promise.all([
  transporter.sendMail(emailToYou),
  transporter.sendMail(emailToClient),
]);

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to send message.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}