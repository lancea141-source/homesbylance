import { NextRequest, NextResponse } from "next/server";

// Point this at your GAS Web App URL (deploy your Apps Script as a Web App,
// "Anyone" access, doPost(e) writes the row to your leads Sheet) or a
// Supabase REST endpoint once that's live. Keep it in an env var, not hardcoded.
const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, source } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const payload = {
      name,
      email,
      phone: phone ?? "",
      message: message ?? "",
      source: source ?? "homesbylance.com",
      submittedAt: new Date().toISOString(),
    };

    if (LEAD_WEBHOOK_URL) {
      await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      // No webhook configured yet — log so it's visible in Vercel function logs
      // until LEAD_WEBHOOK_URL is set.
      console.log("New lead (no webhook configured):", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
