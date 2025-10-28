export const onRequest: CFPagesFunction = async (_ctx) => {
  const res = new Response(
    JSON.stringify({
      status: 'ok',
      message: 'TrustCat HQ Edge Function live 🔥'
    }),
    {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-store'
      }
    }
  );
  return res;
};
