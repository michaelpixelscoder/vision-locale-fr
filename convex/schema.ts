import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    email: v.string(),
    businessType: v.optional(v.string()),
    source: v.optional(v.string()),
    page: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  events: defineTable({
    name: v.string(),
    contentName: v.optional(v.string()),
    page: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_name", ["name"]),
});
