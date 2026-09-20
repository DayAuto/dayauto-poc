import type { CalendarEvent } from "@/lib/types";

const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "seed-1",
    title: "토익 LC Part 2 기출 20문항",
    start: "2026-08-12T20:00:00+09:00",
    end: "2026-08-12T20:45:00+09:00",
    source: "seed",
    slotType: "micro",
  },
  {
    id: "seed-2",
    title: "Next.js App Router 학습",
    start: "2026-08-13T19:00:00+09:00",
    end: "2026-08-13T20:30:00+09:00",
    source: "seed",
    slotType: "focus",
  },
  {
    id: "seed-3",
    title: "영어 단어 복습",
    start: "2026-08-14T07:30:00+09:00",
    end: "2026-08-14T08:00:00+09:00",
    source: "seed",
    slotType: "micro",
  },
  {
    id: "seed-4",
    title: "프로젝트 회고 및 정리",
    start: "2026-08-15T14:00:00+09:00",
    end: "2026-08-15T15:00:00+09:00",
    source: "seed",
    slotType: "focus",
  },
  {
    id: "google-team-dinner",
    title: "팀 회식",
    start: "2026-08-14T19:00:00+09:00",
    end: "2026-08-14T21:00:00+09:00",
    source: "google",
    slotType: null,
  },
];

export function getMockEvents(): CalendarEvent[] {
  return MOCK_EVENTS.map((event) => ({ ...event }));
}

// [D-4] OAuth 관련 코드는 이후 src/app/api/auth/ 아래에 만들면 됩니다.
