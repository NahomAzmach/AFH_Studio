import {
  type InsertWebsitePlanRequest,
  type WebsitePlanRequest,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createWebsitePlanRequest(
    request: InsertWebsitePlanRequest,
  ): Promise<WebsitePlanRequest>;
  getWebsitePlanRequests(): Promise<WebsitePlanRequest[]>;
}

export class MemStorage implements IStorage {
  private websitePlanRequests: Map<string, WebsitePlanRequest>;

  constructor() {
    this.websitePlanRequests = new Map();
  }

  async createWebsitePlanRequest(
    request: InsertWebsitePlanRequest,
  ): Promise<WebsitePlanRequest> {
    const id = randomUUID();
    const record: WebsitePlanRequest = {
      ...request,
      id,
      createdAt: new Date(),
    };
    this.websitePlanRequests.set(id, record);
    return record;
  }

  async getWebsitePlanRequests(): Promise<WebsitePlanRequest[]> {
    return Array.from(this.websitePlanRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }
}

export const storage = new MemStorage();
