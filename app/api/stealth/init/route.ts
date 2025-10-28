import { randomUUID } from "crypto";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: Request) {
  const aesKey = randomUUID();
  const timestamp = new Date().toISOString();
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  // Insert to Supabase
  await supabase.from("trustcat_hq.stealth_sessions").insert([
    {
      aes_key: aesKey,
      timestamp,
      ip,
      user_agent: userAgent,
      verified: false,
    },
  ]);

  const response = {
    status: "ok",
    mode: "stealth",
    aesKey,
    timestamp,
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "content-type": "application/json",
      "x-trustcat-secure": "true",
      "cache-control": "no-store, max-age=0",
    },
  });
}
