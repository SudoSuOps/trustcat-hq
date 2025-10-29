// workers/api/stealth/init.ts
export const onRequest: PagesFunction = async (_ctx) => {
  try {
    const status = {
      status: "ok",
      node: "TrustCat HQ Edge",
      ai_ops: true,
      ping: new Date().toISOString(),
    };

    return new Response(JSON.stringify(status, null, 2), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Edge fault", details: (err as Error).message }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};
