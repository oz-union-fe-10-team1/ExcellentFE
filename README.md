# 잇츠미 - 프론트엔드

안녕하세요! 잇츠미 개발 프론트엔드 팀 입니다.

## 👥 팀원

| 역할   | 이름   | 담당 |
| ------ | ------ | ---- |
| 팀장   | 정우수 | /    |
| 개발자 | 이슬비 | /    |
| 개발자 | 원지향 | /    |
| 개발자 | 박소연 | /    |
| 개발자 | 이상호 | /    |

## 🛠 기술 스택

### Frontend

- **React 19.1.0** – UI 라이브러리
- **TypeScript 5.8.3** – 타입 안정성
- **Vite 7.0.4** – 빌드 도구
- **React Router 7.6.2** – 라우팅
- **Tailwind CSS 4.1.11** – 스타일링

### State Management & Data Fetching

- **Zustand 5.0.6** – 상태 관리
- **TanStack Query 5.83.0** – 서버 상태 관리
- **Axios 1.10.0** – HTTP 클라이언트

### Development Tools

- **ESLint 9.30.1** – 코드 린팅
- **Prettier 3.6.2** – 코드 포맷팅
- **Prettier Plugin TailwindCSS 0.6.14** – Tailwind 클래스 정렬 지원
- **Tailwind Merge 2.3.0** – 클래스 중복 제거 유틸리티

## 🌿 브랜치 전략

### Git Flow 기반 브랜치 구조

```
main (production)
├── develop (integration)
├── feature/기능명
├── hotfix/긴급수정
└── release/배포준비
```

### 브랜치별 역할

| 브랜치      | 목적      | 설명                    |
| ----------- | --------- | ----------------------- |
| `main`      | 프로덕션  | 실제 서비스 배포용      |
| `develop`   | 개발 통합 | 기능 개발 완료 후 병합  |
| `feature/*` | 기능 개발 | 개별 기능 개발          |
| `hotfix/*`  | 긴급 수정 | 프로덕션 버그 긴급 수정 |
| `release/*` | 배포 준비 | 배포 전 최종 테스트     |

### Type 종류

| Type         | 설명                                                     | 예시 커밋 메시지                      |
| ------------ | -------------------------------------------------------- | ------------------------------------- |
| `feat`       | 새로운 기능 추가                                         | `feat: 로그인 기능 추가`              |
| `fix`        | 버그 수정 또는 문제 해결                                 | `fix: 로그인 실패 시 에러 수정`       |
| `docs`       | 문서 작성 및 수정 (README, 주석 등)                      | `docs: README 사용법 추가`            |
| `style`      | 코드 포맷팅, 세미콜론 누락 등 기능 변경 없는 스타일 수정 | `style: 들여쓰기 및 공백 정리`        |
| `refactor`   | 기능 변경 없이 코드 구조 개선                            | `refactor: 회원가입 로직 분리`        |
| `test`       | 테스트 코드 추가 또는 수정                               | `test: 로그인 유닛 테스트 추가`       |
| `chore`      | 기능에 직접 영향 없는 설정, 패키지, 빌드 관련 작업       | `chore: eslint 설정 추가`             |
| `remove`     | 사용하지 않는 코드나 파일 제거                           | `remove: 불필요한 이미지 파일 삭제`   |
| `hotfix`     | 운영 중 긴급 버그 수정                                   | `hotfix: 결제 오류 긴급 수정`         |
| `deprecated` | 더 이상 사용하지 않거나 제거 예정인 코드 처리            | `deprecated: legacy API 제거`         |
| `design`     | UI/UX, 퍼블리싱 등 화면 관련 디자인 작업                 | `design: 버튼 색상 및 폰트 정렬 조정` |

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트
├── hooks/              # 커스텀 훅
├── pages/              # 페이지 컴포넌트
├── stores/             # Zustand 스토어
├── types/              # TypeScript 타입 정의
├── lib/                # 유틸리티 함수
└── context/            # React Context
```
