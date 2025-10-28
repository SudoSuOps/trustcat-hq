export const onRequest: PagesFunction = async () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      message: "pong2 🧠 Gold Ops edge compute active",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
