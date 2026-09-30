// [J-4] Vercel Cron이 정시에 호출하는 엔드포인트. (경로: /api/cron)
// 데모 목적: 스케줄 실행이 실제로 동작하는지 확인 (스택 확인 조건 ②)

export function GET(request: Request) {
  const authorization = request.headers.get("authorization");

  if (authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const at = new Date().toISOString();
  console.log("[cron] 실행됨:", at);
  return Response.json({ ok: true, at });
}