import nodemailer from "nodemailer";
import { siteConfig, whatsAppTemplateBodyLimit } from "@/data/siteData";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendWhatsAppNotification({
  accessToken,
  phoneNumberId,
  recipient,
  templateName,
  templateLanguage,
  name,
  email,
  message,
}) {
  const response = await fetch(
    `https://graph.facebook.com/v27.0/${encodeURIComponent(phoneNumberId)}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipient,
        type: "template",
        template: {
          name: templateName,
          language: { code: templateLanguage },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name },
                { type: "text", text: email },
                { type: "text", text: message },
              ],
            },
          ],
        },
      }),
    }
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`WhatsApp Cloud API returned ${response.status}: ${details.slice(0, 1000)}`);
  }
}

export async function POST(request) {
  let submitted;

  try {
    submitted = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const values = submitted && typeof submitted === "object" ? submitted : {};
  const name = typeof values.name === "string" ? values.name.trim() : "";
  const email = typeof values.email === "string" ? values.email.trim() : "";
  const message = typeof values.message === "string" ? values.message.trim() : "";

  if (
    !name ||
    name.length > 120 ||
    !email ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    !message ||
    message.length > 5000
  ) {
    return Response.json(
      { error: "Please provide your name, a valid email, and a message under 5,000 characters." },
      { status: 400 }
    );
  }

  const whatsAppMessage = `New website enquiry from ${name} (${email}): ${message}`;

  if (whatsAppMessage.length > whatsAppTemplateBodyLimit) {
    return Response.json(
      { error: "Please shorten the enquiry so it fits in the WhatsApp notification (1,024 characters including your details)." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER?.trim() || siteConfig.email;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const whatsAppAccessToken = process.env.WHATSAPP_ACCESS_TOKEN?.trim();
  const whatsAppPhoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  const whatsAppTemplateName =
    process.env.WHATSAPP_TEMPLATE_NAME?.trim() || "new_enquiry_notification";
  const whatsAppTemplateLanguage =
    process.env.WHATSAPP_TEMPLATE_LANGUAGE?.trim() || "en_GB";

  if (!gmailAppPassword || !whatsAppAccessToken || !whatsAppPhoneNumberId) {
    return Response.json(
      { error: "Enquiry delivery is not configured yet. Add the Gmail and WhatsApp Cloud API credentials to the server environment." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  const deliveries = await Promise.allSettled([
    transporter.sendMail({
      from: { name: siteConfig.name, address: gmailUser },
      to: siteConfig.email,
      replyTo: email,
      subject: "New enquiry from Lumière Vows",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
    sendWhatsAppNotification({
      accessToken: whatsAppAccessToken,
      phoneNumberId: whatsAppPhoneNumberId,
      recipient: siteConfig.phone.replace(/\D/g, ""),
      templateName: whatsAppTemplateName,
      templateLanguage: whatsAppTemplateLanguage,
      name,
      email,
      message,
    }),
  ]);
  const failedDeliveries = deliveries.flatMap((delivery, index) =>
    delivery.status === "rejected"
      ? [{ channel: index === 0 ? "email" : "WhatsApp", error: delivery.reason }]
      : []
  );

  if (failedDeliveries.length > 0) {
    console.error("Enquiry delivery failed", failedDeliveries);
    return Response.json(
      { error: "Your enquiry could not be delivered to all destinations. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ sent: true });
}
