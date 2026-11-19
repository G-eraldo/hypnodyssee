import { subjects } from "#shared/content.js";
import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  if (Number(getHeader(event, "content-length")) > 20000)
    throw createError({ statusCode: 413 });
  const body = await readBody(event);
  if (body?.website) return { ok: true };
  const fields = ["name", "email", "subject", "message"];
  if (!fields.every((key) => typeof body?.[key] === "string"))
    throw createError({ statusCode: 400 });
  const [name, email, subject, message] = fields.map((key) => body[key].trim());
  if (
    !name ||
    name.length > 100 ||
    email.length > 254 ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/u.test(email) ||
    !subjects.includes(subject) ||
    !message ||
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
    subject: "Demande Hypn’Odyssée · " + subject,
    text: [subject, name, email, message].join("\n\n"),
  });
  if (error) throw createError({ statusCode: 502 });
  return { ok: true };
});
