import { Resend } from "resend";
import type { InsertWebsitePlanRequest } from "./schema";

export async function sendPlanRequestEmail(
  request: InsertWebsitePlanRequest,
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY not set — skipping email notification for plan request",
    );
    return;
  }

  const resend = new Resend(apiKey);
  const to = process.env.NOTIFY_EMAIL_TO || "nazmach66@gmail.com";
  const answers = request.answers as Record<string, unknown>;

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
    replyTo: request.email,
    subject: `New website plan request: ${request.afhName}`,
    html: `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;">
        <h2>New "Plan My Site" submission</h2>
        <p><strong>${request.name}</strong> (${request.email}, ${request.phone}) from <strong>${request.afhName}</strong> in ${request.city} just completed the website planner.</p>
        <h3>Answers</h3>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">${answersHtml}</table>
        <h3>Generated AI Prompt</h3>
        <pre style="white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:8px;font-size:13px;">${request.aiPrompt}</pre>
      </div>
    `,
  });
}
