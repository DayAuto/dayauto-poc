# DayAuto PoC

AI 학습 일정 관리 서비스 'DayAuto'의 기술 스파이크용 데모 레포입니다.

## 브랜치 구조
- `main` — 안정 버전 (직접 push·PR 금지)
- `develop` — 작업 병합 지점 (모든 PR은 여기에서 머지)
- `feat/이름-작업내용` — 개인 작업 브랜치


📍상세 규칙: [깃허브 컨벤션](https://app.notion.com/p/d387635a991d83049011817c7e53d292?source=copy_link)

## 기술 스택 (데모)
- Next.js (App Router) + TypeScript / 패키지 매니저는 npm으로 통일
- 후보 2(Django) 전환 기준: 데모 테스트에서 주간 캘린더 뷰·크론 실행·배포가 정상 구현되지 않을 경우 전환 검토

## 사전 준비 (최초 1회)
1. **Node.js LTS(20.x)** 설치 — https://nodejs.org 에서 LTS 버튼
   설치 확인: `node --version` → v20.x.x / `npm --version`
2. Git 설치 확인: `git --version`

## 시작하기
1. 클론: `git clone <repo-url>` → `cd <레포 폴더>`
2. 의존성 설치: `npm install`
   (라이브러리를 새로 설치했다면 package.json + package-lock.json 변경분까지 같이 커밋)
3. 환경변수: `.env.example`을 복사해 `.env.local` 생성 (실제 값은 팀 채팅에서 공유, 커밋 금지)
4. 개발 서버 실행: `npm run dev` → 브라우저에서 http://localhost:3000
5. 작업 시작: `git checkout develop` → `git pull` → `git checkout -b feat/작업파트`

## 자주 막히는 지점
- `npm install` 후에도 에러 → node_modules 삭제 후 `npm install` 재시도
- 남이 올린 코드 pull 이후 실행 안 됨 → 새 의존성이 추가된 것. `npm install` 먼저

## 담당
| 이름 | 데모 담당 영역 |
|---|---|
| 권지수 | PM, 인프라·배포·운영 일괄 |
| 김동규 | UI 파트 1 |
| 최예나 | UI 파트 2 |