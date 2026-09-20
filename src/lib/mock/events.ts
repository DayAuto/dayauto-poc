import type { CalendarEvent } from "@/lib/types";

const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "seed-1",
    title: "출근길 토익 LC 기출",
    start: "2026-08-12T07:30:00+09:00",
    end: "2026-08-12T07:50:00+09:00",
    source: "seed",
    slotType: "micro",
  },
  {
    id: "seed-2",
    title: "안전관리론 2단원 개념 학습",
    start: "2026-08-12T20:00:00+09:00",
    end: "2026-08-12T20:45:00+09:00",
    source: "seed",
    slotType: "focus",
  },
  {
    id: "google-1",
    title: "팀 회식",
    start: "2026-08-12T19:00:00+09:00",
    end: "2026-08-12T21:00:00+09:00",
    source: "google",
    slotType: null,
  },
];

export function getMockEvents(): CalendarEvent[] {
  return MOCK_EVENTS.map((event) => ({ ...event }));
}

// [D-4] OAuth 관련 코드는 이후 src/app/api/auth/ 아래에 만들면 됩니다.
