"use client";

import { type FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

type ContactFormProps = { content: Dictionary["contact"]["form"] };

export function ContactForm({ content }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus(content.missingFields);
      return;
    }

    const subject = encodeURIComponent(content.subjectTemplate.replace("{name}", name));
    const body = encodeURIComponent(content.bodyTemplate.replace("{name}", name).replace("{email}", email).replace("{message}", message));
    window.location.href = `mailto:chelolmesec@gmail.com?subject=${subject}&body=${body}`;
    setStatus(content.successMessage);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>{content.nameLabel}<input name="name" type="text" autoComplete="name" placeholder={content.namePlaceholder} /></label>
        <label>{content.emailLabel}<input name="email" type="email" autoComplete="email" placeholder={content.emailPlaceholder} /></label>
      </div>
      <label>{content.messageLabel}<textarea name="message" rows={4} placeholder={content.messagePlaceholder} /></label>
      <button className="button button-primary" type="submit">{content.submit} <span aria-hidden="true">&rarr;</span></button>
      {status ? <p className="contact-form-status" role="status">{status}</p> : null}
    </form>
  );
}
