"use client";

import { type FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Completá nombre, email y mensaje.");
      return;
    }

    const subject = encodeURIComponent(`Contacto desde portfolio - ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:chelolmesec@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Se abrió tu cliente de correo con el mensaje preparado.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>Nombre<input name="name" type="text" autoComplete="name" placeholder="Tu nombre" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="tu@email.com" /></label>
      </div>
      <label>Mensaje<textarea name="message" rows={4} placeholder="¿En qué podemos trabajar?" /></label>
      <button className="button button-primary" type="submit">Enviar mensaje <span aria-hidden="true">&rarr;</span></button>
      {status ? <p className="contact-form-status" role="status">{status}</p> : null}
    </form>
  );
}
