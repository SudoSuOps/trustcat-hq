export const onRequest: PagesFunction = async () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      message: "pong 🐾 TrustCat HQ live at Cloudflare edge",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
