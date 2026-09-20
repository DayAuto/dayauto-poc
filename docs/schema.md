# 일정 데이터 스키마

> 상태: 확정
> 확정일: 2026-08-12

mock 일정과 구글 캘린더 일정은 아래 형식으로 화면에 전달한다.

## 필드

| 필드 | 타입 | 설명 | 예시 |
| --- | --- | --- | --- |
| id | string | 일정 고유 식별자 | "seed-1", "google-abc123" |
| title | string | 화면에 표시될 이름 | "출근길 토익 LC 기출" |
| start | string | 시작 일시 (ISO 8601) | "2026-08-12T20:00:00+09:00" |
| end | string | 종료 일시 (ISO 8601) | "2026-08-12T20:45:00+09:00" |
| source | "seed" \| "google" | 데이터 출처 (화면에서 구분 표시용) | "google" |
| slotType | "micro" \| "focus" \| null | 슬롯 유형. 외부 일정은 null | "focus" |

## 확정 내용

- 필드는 `id`, `title`, `start`, `end`, `source`, `slotType` 6개를 사용한다.
- `start`와 `end`는 ISO 8601 문자열을 사용한다.
- `slotType`은 `micro` 또는 `focus`를 사용하며, 외부 일정은 `null`이다.
- `subject/unit`, `chunk`, `goalId` 필드는 데모 범위에서 사용하지 않는다.

## 샘플 데이터

```json
[
  {
    "id": "seed-1",
    "title": "출근길 토익 LC 기출",
    "start": "2026-08-12T07:30:00+09:00",
    "end": "2026-08-12T07:50:00+09:00",
    "source": "seed",
    "slotType": "micro"
  },
  {
    "id": "seed-2",
    "title": "안전관리론 2단원 개념 학습",
    "start": "2026-08-12T20:00:00+09:00",
    "end": "2026-08-12T20:45:00+09:00",
    "source": "seed",
    "slotType": "focus"
  },
  {
    "id": "google-1",
    "title": "팀 회식",
    "start": "2026-08-12T19:00:00+09:00",
    "end": "2026-08-12T21:00:00+09:00",
    "source": "google",
    "slotType": null
  }
]
```
