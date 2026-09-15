// [J-4] Vercel Cron이 정시에 호출하는 엔드포인트. (경로: /api/cron)
// 데모 목적: 스케줄 실행이 실제로 동작하는지 확인 (스택 확인 조건 ②)

export function GET() {
  console.log("[cron] 실행됨:", new Date().toISOString());
  return Response.json({ ok: true, at: new Date().toISOString() });
}