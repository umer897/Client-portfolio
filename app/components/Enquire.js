"use client";
import { useState } from "react";
import { siteConfig, whatsAppTemplateBodyLimit } from "@/data/siteData";

export default function Enquire({ children }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const whatsAppPrefix = `New website enquiry from ${data.name.trim()} (${data.email.trim()}): `;
  const maxMessageLength = Math.max(0, whatsAppTemplateBodyLimit - whatsAppPrefix.length);
  const on = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      if (`${whatsAppPrefix}${data.message.trim()}`.length > whatsAppTemplateBodyLimit) {
        throw new Error("Please shorten the enquiry so it fits in the WhatsApp notification.");
      }

      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your enquiry could not be sent. Please try again.");
      }

      setSent(true);
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Your enquiry could not be sent. Please try again or email us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="book-sec">
      <div className="wrap">
        <div className="book rv" id="enquire">
          <div>
            <div className="eyebrow">Now booking</div>
            <h2>Let’s edit your footage.</h2>
            <p>Tell me about the wedding and the footage you have, and I’ll come back with availability and a clear quote. Prefer email? Write to {siteConfig.email}.</p>
          </div>
          {sent ? (
            <div className="ok"><b>✓</b><h3>Thank you.</h3><p>I’ll reply within 24 hours with availability and a clear quote.</p></div>
          ) : (
            <form className="rv" style={{ "--d": "120ms" }} onSubmit={submit} aria-busy={sending}>
              <label htmlFor="n">Your name or studio</label>
              <input id="n" name="name" required value={data.name} onChange={on} />
              <label htmlFor="e">Email</label>
              <input id="e" name="email" type="email" required value={data.email} onChange={on} />
              <label htmlFor="m">Tell me about the wedding, the footage and the style you love (up to {maxMessageLength} characters)</label>
              <textarea id="m" name="message" required maxLength={maxMessageLength} value={data.message} onChange={on} />
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="btn fill" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
        <div className="wm" aria-hidden="true">Lumière Vows</div>
      </div>
      {children}
    </section>
  );
}
