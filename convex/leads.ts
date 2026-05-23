import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createLead = mutation({
  args: {
    email: v.string(),
    businessType: v.optional(v.string()),
    source: v.optional(v.string()),
    page: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const createEvent = mutation({
  args: {
    name: v.string(),
    contentName: v.optional(v.string()),
    page: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("events", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
