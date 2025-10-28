export const onRequest = async (_ctx: any) => {
  return new Response(
    JSON.stringify({ status: "ok", message: "Stealth init edge function live" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
