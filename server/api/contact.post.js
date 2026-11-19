import {
  isMessageLongEnough,
  isValidContactPhone,
  subjects,
} from "#shared/content.js";
import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  if (Number(getHeader(event, "content-length")) > 20000)
    throw createError({ statusCode: 413 });
  const body = await readBody(event);
  if (body?.website) return { ok: true };
  const fields = ["name", "firstName", "email", "subject", "message"];
  if (!fields.every((key) => typeof body?.[key] === "string"))
    throw createError({ statusCode: 400 });
  const [name, firstName, email, subject, message] = fields.map((key) => body[key].trim());
  const phone = body.phone === undefined ? "" : body.phone;
  if (
    !isValidContactPhone(phone) ||
    body.privacyRead !== true ||
    !name ||
    name.length > 100 ||
    !firstName ||
    firstName.length > 100 ||
    email.length > 254 ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/u.test(email) ||
    !subjects.includes(subject) ||
    !isMessageLongEnough(message) ||
    message.length > 3000
  )
    throw createError({ statusCode: 400 });
  const config = useRuntimeConfig(event);
  if (!config.resendApiKey || !config.contactFrom || !config.contactTo)
    throw createError({ statusCode: 503 });
  const { error } = await new Resend(config.resendApiKey).emails.send({
    from: config.contactFrom,
    to: config.contactTo,
    replyTo: email,
    ...contactEmail({ name: firstName + " " + name, email, subject, message, phone: phone.trim() }),
  });
  if (error) {
    console.error("Resend a refusé le message de contact", {
      code: error.name,
      status: error.statusCode,
    });
    throw createError({ statusCode: 502 });
  }
  return { ok: true };
});

const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function contactEmail({ name, email, phone, subject, message }) {
  const paragraphs = escapeHtml(message).replace(/\r\n?|\n/g, "<br>");
  return {
    subject: "Hypn’Odyssée · " + subject,
    text: [
      "Nouvelle demande depuis le formulaire de contact",
      "Objet : " + subject,
      "De : " + name + " <" + email + ">",
      ...(phone ? ["Téléphone : " + phone] : []),
      "Message :\n" + message,
      "Pour écrire à cette personne, utilisez « Répondre ».",
    ].join("\n\n"),
    html: `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>Nouvelle demande de contact</title></head>
<body style="margin:0;padding:24px 12px;background:#fbf7f1;color:#382b32;font:16px/1.6 Arial,sans-serif">
  <div style="max-width:580px;margin:auto;background:#ffffff;border:1px solid #ddcec8;border-radius:12px">
    <div style="padding:20px 24px;background:#66384d;color:#ffffff;font:22px Georgia,serif">Hypn’Odyssée Bien naître</div>
    <div style="padding:24px;overflow-wrap:anywhere">
      <p style="margin:0;color:#66384d">Nouvelle demande de contact</p>
      <h1 style="font:28px/1.25 Georgia,serif;margin:8px 0 20px">${escapeHtml(subject)}</h1>
      <p><strong>De</strong><br>${escapeHtml(name)}<br>${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Téléphone</strong><br><a href="tel:${phone.replace(/[^+0-9]/g, "")}">${escapeHtml(phone)}</a></p>` : ""}
      <h2 style="font-size:16px;margin:24px 0 8px">Message</h2>
      <div style="background:#faf3ef;padding:16px">${paragraphs}</div>
      <p style="margin:20px 0 0">Pour écrire à cette personne, utilisez « Répondre ».</p>
    </div>
  </div>
</body></html>`,
  };
}
