import { z } from "zod";
import { Resend } from "resend";

const requestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  afhName: z.string().min(1),
  address: z.string().min(1),
  answers: z.record(z.any()),
  aiPrompt: z.string(),
});

async function sendPlanRequestEmail(parsed: z.infer<typeof requestSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY not set — skipping email notification for plan request",
    );
    return;
  }

  const resend = new Resend(apiKey);
  const to = process.env.NOTIFY_EMAIL_TO || "nazmach66@gmail.com";
  const answers = parsed.answers as Record<string, unknown>;

  const answersHtml = Object.entries(answers)
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
      const display = Array.isArray(value) ? value.join(", ") : String(value ?? "—");
      return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 12px;">${display}</td></tr>`;
    })
    .join("");

  await resend.emails.send({
    from: "AFH Web Studio <onboarding@resend.dev>",
    to,
    replyTo: parsed.email,
    subject: `New website plan request: ${parsed.afhName}`,
    html: `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;">
        <h2>New "Plan My Site" submission</h2>
        <p><strong>${parsed.name}</strong> (${parsed.email}, ${parsed.phone}) from <strong>${parsed.afhName}</strong> at ${parsed.address} just completed the website planner.</p>
        <h3>Answers</h3>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">${answersHtml}</table>
        <h3>Generated AI Prompt</h3>
        <pre style="white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:8px;font-size:13px;">${parsed.aiPrompt}</pre>
      </div>
    `,
  });
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let parsed: z.infer<typeof requestSchema>;
  try {
    parsed = requestSchema.parse(req.body);
  } catch {
    res.status(400).json({ message: "Invalid submission. Please check your answers and try again." });
    return;
  }

  try {
    await sendPlanRequestEmail(parsed);
  } catch (error) {
    console.error("Failed to send plan request email:", error);
  }

  res.status(201).json({ ok: true });
}
