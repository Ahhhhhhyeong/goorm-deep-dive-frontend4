# [Day62] 25.08.12 배운내용 정리

---

## Next.js 관리자 로그인 시스템 구현

### 1. 관리자 로그인 페이지 구현

#### 주요 기능

- **상태 관리**: `useState`를 사용한 폼 데이터 및 에러 상태 관리
- **폼 처리**: 로그인 폼 제출 및 입력값 변경 처리
- **API 통신**: `axios`를 사용한 로그인 API 호출
- **임시 인증**: `localStorage`를 사용한 로그인 상태 저장
- **페이지 이동**: 성공 시 관리자 대시보드로 이동

### 2. Next.js 페이지 라우팅 (useRouter)

#### Page Router 방식의 useRouter 훅 주요 메소드

```javascript
import { useRouter } from 'next/router';

const router = useRouter();
```

| 메소드             | 설명                        | 예시                             |
| ------------------ | --------------------------- | -------------------------------- |
| `router.push()`    | 페이지 이동 (히스토리 기록) | `router.push("/product")`        |
| `router.replace()` | 페이지 이동 (히스토리 대체) | `router.replace("/login")`       |
| `router.back()`    | 뒤로가기                    | `router.back()`                  |
| `router.query`     | URL 쿼리 파라미터 접근      | `/post?id=1` → `router.query.id` |
| `router.pathname`  | 현재 페이지 경로            | `/admin/login`                   |
| `router.asPath`    | 쿼리 포함 전체 경로         | `/post?id=1&q=강동원`            |

#### Router 방식 차이점

- **Page Router**: `next/router` 사용
- **App Router**: `next/navigation` 사용

### 3. 관리자 대시보드 및 권한 관리

#### 접근 제어 로직

1. **권한 확인**: `useEffect`에서 localStorage 확인
2. **리다이렉트**: 미인증 시 로그인 페이지로 강제 이동
3. **조건부 렌더링**: 권한 확인 전까지 렌더링 방지

#### 로그아웃 구현

- localStorage에서 인증 정보 제거
- `router.replace()`로 로그인 페이지 이동

### 4. 실무에서 사용하는 인증 방법들

#### 추천 인증 방식

1. **NextAuth.js (OAuth)**
   - Page Router: `getServerSideProps`로 페이지 보호
   - App Router: middleware에서 쿠키/세션 확인
2. **서버 세션**

   - 서버에 로그인 정보 저장
   - 브라우저에는 세션 ID만 쿠키로 전달

3. **JWT (JSON Web Token)**
   - 쿠키에 저장
   - Refresh 토큰 포함하여 보안 강화

#### 보안 강화 방법

- **비밀번호 암호화**: `bcrypt` 라이브러리 사용
- **HttpOnly 쿠키**: JavaScript 접근 차단으로 XSS 공격 방어

### 5. 웹 인증 핵심 개념

#### 세션(Session)

- 서버 측에 사용자 로그인 정보 저장
- 브라우저에는 세션 ID만 쿠키로 전달
- 서버에서 세션 ID로 사용자 식별

#### 쿠키(Cookie)

- 브라우저가 서버로부터 받아 로컬에 저장하는 데이터
- 사용자 상태(로그인, 장바구니 등) 기억
- **HttpOnly 옵션**: JavaScript 접근 불가, XSS 방어

### 6. 개발 시 주의사항

- **보안**: localStorage는 임시 방편, 실제로는 서버 인증 권장
- **사용자 경험**: 권한 확인 중 로딩 상태 고려
- **히스토리 관리**: `replace()` 사용으로 뒤로가기 방지
- **에러 처리**: API 호출 실패 시 적절한 에러 메시지 표시
