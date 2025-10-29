export default {
  async fetch(request: Request) {
    const url = new URL(request.url);

    // Handle the stealth API route
    if (url.pathname === "/api/stealth/init") {
      return Response.json({
        status: "ok",
        node: "TrustCat Stealth Edge",
        ai_ops: true,
        cloudflare_zone: "production",
        timestamp: new Date().toISOString(),
        message: "Stealth Ops initialized. All systems nominal.",
      });
    }

    // Default root landing for stealth.trustcat.ai
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stealth Ops — TrustCat.ai</title>
        <style>
          body { background:black; color:#FFD700; font-family:monospace; text-align:center; padding:5em; }
          h1 { color:#00ff99; }
          .msg { color:#FFD700; margin-top:2em; font-size:1.2em; }
        </style>
      </head>
      <body>
        <h1>🐾 Stealth Ops Active</h1>
        <p class="msg">TrustCat Edge Node online and verified at ${new Date().toISOString()}</p>
        <p>API Endpoint → <a href="/api/stealth/init" style="color:#00ff99;">/api/stealth/init</a></p>
      </body>
      </html>`;
    
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
