import { insertWebsitePlanRequestSchema } from "../shared/schema";
import { sendPlanRequestEmail } from "../shared/email";
import { fromError } from "zod-validation-error";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const parsed = insertWebsitePlanRequestSchema.parse(req.body);
    await sendPlanRequestEmail(parsed);
    res.status(201).json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? fromError(error).toString() : "Invalid request";
    res.status(400).json({ message });
  }
}
