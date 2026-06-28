import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebsitePlanRequestSchema } from "@shared/schema";
import { sendPlanRequestEmail } from "@shared/email";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/plan-requests", async (req, res) => {
    try {
      const parsed = insertWebsitePlanRequestSchema.parse(req.body);
      const record = await storage.createWebsitePlanRequest(parsed);

      sendPlanRequestEmail(parsed).catch((err) => {
        console.error("Failed to send plan request email:", err);
      });

      res.status(201).json({ id: record.id });
    } catch (error) {
      const message =
        error instanceof Error ? fromError(error).toString() : "Invalid request";
      res.status(400).json({ message });
    }
  });

  app.get("/api/plan-requests", async (_req, res) => {
    const requests = await storage.getWebsitePlanRequests();
    res.json(requests);
  });

  const httpServer = createServer(app);

  return httpServer;
}
