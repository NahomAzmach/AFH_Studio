import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const websitePlanRequests = pgTable("website_plan_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  afhName: text("afh_name").notNull(),
  city: text("city").notNull(),
  answers: jsonb("answers").notNull(),
  aiPrompt: text("ai_prompt").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWebsitePlanRequestSchema = createInsertSchema(
  websitePlanRequests,
).pick({
  name: true,
  email: true,
  phone: true,
  afhName: true,
  city: true,
  answers: true,
  aiPrompt: true,
});

export type InsertWebsitePlanRequest = z.infer<
  typeof insertWebsitePlanRequestSchema
>;
export type WebsitePlanRequest = typeof websitePlanRequests.$inferSelect;
