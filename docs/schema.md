## 스키마 정리 문서

| 필드 | 타입 | 설명 | 예시 |
| --- | --- | --- | --- |
| id | string | 일정 고유 식별자 | "seed-1", "google-abc123" |
| title | string | 화면에 표시될 이름 | "토익 LC Part 2 기출 20문항" |
| start | string | 시작 일시 (ISO 8601) | "2026-08-12T20:00:00+09:00" |
| end | string | 종료 일시 (ISO 8601) | "2026-08-12T20:45:00+09:00" |
| source | "seed" \| "google" | 데이터 출처 (화면에서 구분 표시용) | "google" |
| slotType | "micro" \| "focus" \| null | 슬롯 유형. 외부 일정은 null | "focus" |