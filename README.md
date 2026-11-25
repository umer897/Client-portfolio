This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Enquiry notifications

The enquiry form sends submissions to the email address and phone number configured in `data/siteData.js`. Email uses Gmail SMTP, and WhatsApp notifications use the Meta WhatsApp Cloud API. Create `.env.local` with:

```env
GMAIL_APP_PASSWORD=your-google-app-password
WHATSAPP_ACCESS_TOKEN=your-meta-access-token
WHATSAPP_PHONE_NUMBER_ID=your-business-sender-phone-number-id
WHATSAPP_TEMPLATE_NAME=new_enquiry_notification
WHATSAPP_TEMPLATE_LANGUAGE=en_GB
```

The Gmail account is taken from `data/siteData.js`. Create an App Password in that Google account (2-Step Verification must be enabled); do not use your normal account password.

In WhatsApp Manager, register a WhatsApp Business sender, create and get approval for a template named `new_enquiry_notification` in `en_GB` with this body and three text parameters:

```text
New website enquiry from {{1}} ({{2}}): {{3}}
```

`WHATSAPP_PHONE_NUMBER_ID` is the ID of the registered Business sender; the recipient is the phone number in `data/siteData.js`. Keep `.env.local` private. For production, set these variables in your hosting provider's environment settings and redeploy. Website submissions use the approved template because they may occur outside WhatsApp's 24-hour customer service window.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
