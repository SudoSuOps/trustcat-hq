export const onRequest: CFPagesFunction = async (_ctx) => {
  const res = new Response(
    JSON.stringify({
      status: 'ok',
      message: 'Ping 2: Gold Ops verified 🐾'
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
