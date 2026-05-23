import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

http.route({
  path: "/lead",
  method: "OPTIONS",
  handler: httpAction(async () => new Response(null, { headers: corsHeaders() })),
});

http.route({
  path: "/event",
  method: "OPTIONS",
  handler: httpAction(async () => new Response(null, { headers: corsHeaders() })),
});

http.route({
  path: "/lead",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.json().catch(() => null);

    if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
      return Response.json(
        { ok: false, error: "invalid_email" },
        { status: 400, headers: corsHeaders() },
      );
    }

    await ctx.runMutation(api.leads.createLead, {
      email: body.email,
      businessType: typeof body.businessType === "string" ? body.businessType : undefined,
      source: typeof body.source === "string" ? body.source : undefined,
      page: typeof body.page === "string" ? body.page : undefined,
      userAgent: request.headers.get("user-agent") ?? undefined,
    });

    return Response.json({ ok: true }, { headers: corsHeaders() });
  }),
});

http.route({
  path: "/event",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.json().catch(() => null);

    if (!body || typeof body.name !== "string") {
      return Response.json(
        { ok: false, error: "invalid_event" },
        { status: 400, headers: corsHeaders() },
      );
    }

    await ctx.runMutation(api.leads.createEvent, {
      name: body.name,
      contentName: typeof body.contentName === "string" ? body.contentName : undefined,
      page: typeof body.page === "string" ? body.page : undefined,
      userAgent: request.headers.get("user-agent") ?? undefined,
    });

    return Response.json({ ok: true }, { headers: corsHeaders() });
  }),
});

export default http;
