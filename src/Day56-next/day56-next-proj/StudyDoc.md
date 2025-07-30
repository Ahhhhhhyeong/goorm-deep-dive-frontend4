# [Day56] 25.07.30 배운내용 정리

---

# Next.js 알아보기!

## Next.js란?

Next.js는 React 기반의 웹 애플리케이션 프레임워크로, **page.js가 메인 페이지로 기본 설정**되어 있습니다.
`src/app` 디렉토리 기반으로 파일들이 정리됩니다.

## 프로젝트 생성

```bash
npx create-next-app@[버전] [프로젝트폴더명] \
  --js \
  --eslint \
  --tailwind \
  --src-dir \
  --app \
  --import-alias="@/*"
```

## 프로젝트 폴더 구성

| 폴더/파일           | 설명                                    |
| ------------------- | --------------------------------------- |
| **app**             | 코드 작성을 할 폴더                     |
| **page.js**         | 메인페이지                              |
| **layout.js**       | 메인페이지를 감싸는 용도의 페이지       |
| **public**          | 이미지나 파일 보관용                    |
| **api**             | 서버기능 만드는 곳 (하위 버전에서 존재) |
| **next.config.mjs** | Next.js 설정파일                        |
| **package.json**    | 라이브러리 버전 기록                    |
| **node_modules**    | 설치한 라이브러리 보관                  |

## 렌더링 방식

### Client-Side-Rendering (CSR)

- 브라우저에서 HTML을 **실시간으로 만드는 방법**

### Server-Side-Rendering (SSR)

- 서버에서 HTML을 **미리 만들어서 보냄**

## Next.js의 장점

✅ **폴더기반** 자동 라우팅  
✅ **DB연결이 쉽다**  
✅ **직관적임**  
✅ **이미지와 폰트 최적화**

## React vs Next.js

Next.js는 React와 유사하지만 **메인페이지 구성 방식이 다릅니다**.

## 라우팅 (페이지 나누기)

Next.js는 **자동 라우팅** 기능을 제공합니다:

- `app` 안에 **디렉토리를 만들면** 이게 **URL 주소**가 됩니다
- 해당 URL을 입력해서 보여주는 페이지는 **React 컴포넌트**가 됩니다
- 컴포넌트의 이름은 **`page.jsx`가 기본**입니다

### 예시

```
app/
├── page.js          → / (메인 페이지)
├── about/
│   └── page.js      → /about
└── products/
    └── page.js      → /products
```

---

# Next.js Layout과 라우팅 시스템

## Layout.js - 공통 레이아웃

### 개념

**layout.js**는 공통적으로 들어가야하는 부분들을 정의합니다.

- 헤더, 메뉴(네비게이션), 푸터, 사이드바 등등

### Next.js 13+ App Router 기반

- **layout.js(ts)**는 **page.js의 외부구조를 감싸는 파일**
- **`{children}`** = 활성화된 페이지 컴포넌트

```jsx
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        {/* 공통 네비게이션 메뉴 */}
        <nav className='navbar'>
          <Link href='/'>HOME</Link>
          <Link href='/about'>ABOUT</Link>
          <Link href='/list'>LIST</Link>
        </nav>
        {children} {/* 각 페이지 컴포넌트가 렌더링되는 곳 */}
      </body>
    </html>
  );
}
```

## Next.js 페이지 요청 처리 흐름

### 🧍‍♂️ 사용자가 `/about` 페이지에 접근할 때

```
🧍‍♂️ [사용자 브라우저 요청: /about 페이지 접근]
   ↓
1️⃣ [Next.js 서버 실행]
   - /about 경로에 해당하는 `app/about/page.js` 또는 `pages/about.js` 찾음

   ↓
2️⃣ [서버 컴포넌트 실행]
   - `getServerSideProps()` 실행 (만약 존재한다면)
     → 외부 API 또는 DB 요청
   - 이 때 실행되는 파일: `pages/about.js` (서버에서 먼저 실행됨)

   ↓
3️⃣ [서버에서 HTML 생성]
   - React 컴포넌트가 서버에서 HTML 문자열로 렌더링됨
   - `export default function AboutPage()` 내부 JSX 코드 실행

   ↓
4️⃣ [브라우저로 HTML 전송]
   - 서버가 만든 HTML을 브라우저로 응답함 (JS 없이 기본 구조만 있음)

   ↓
5️⃣ [브라우저에서 초기 HTML 보여줌]
   - 사용자는 이미 렌더링된 화면을 빠르게 볼 수 있음

   ↓
6️⃣ [React 수화(Hydration) 시작]
   - 브라우저가 JS 번들 다운로드 (React + about.js 코드)
   - JS가 실행되면서 버튼 클릭, 폼 등 인터랙션이 가능해짐
   - 이 시점부터 React 컴포넌트가 "살아 있음"
```

## 주요 실행 컴포넌트

📦 **실행되는 주요 컴포넌트들:**

- **`about.js`** - React 컴포넌트
- **`_app.js`** - 앱 공통 설정
- **`_document.js`** - SSR 시 HTML 구조 조작
- **`getServerSideProps()`** - 선택적 데이터 호출

## Link 컴포넌트

```jsx
import Link from 'next/link';

// ✅ Next.js Link 사용
<Link href='/about'>ABOUT</Link>

// ❌ 일반 a 태그 (페이지 전체 새로고침)
<a href='/about'>ABOUT</a>
```

### Link vs a 태그

| 구분            | Link            | a 태그               |
| --------------- | --------------- | -------------------- |
| **페이지 전환** | SPA 방식 (빠름) | 전체 새로고침 (느림) |
| **상태 유지**   | 유지됨          | 초기화됨             |
| **번들 최적화** | 자동 프리로딩   | 없음                 |

---

# Next.js 이미지 최적화

## 이미지 저장 위치

**public 디렉토리**에 이미지를 저장합니다.

- `public`: 사이트 실행 시 자동으로 사이트의 가장 최상위(root)로 이동
- 하지만 일반 `img` 태그를 사용하면 **성능이 떨어집니다**

## Next.js Image 컴포넌트

### 사용법

```jsx
import Image from 'next/image';

// ❌ 일반 img 태그
<img src='/playing.png' />

// ✅ Next.js Image 컴포넌트
<Image src='/playing.png' alt='놀아줘익명' width={100} height={100} />
```

### 일반 img 태그의 문제점

❌ **로딩이 느림**  
❌ **콘텐츠 밀림 발생**  
❌ **레이아웃 쉬프트 현상**

> **레이아웃 쉬프트 현상**: 이미지가 먼저 로드되고 텍스트가 나와야하는데, 이미지가 늦게 올라오는 경우 생기는 현상

## Next.js Image 컴포넌트의 장점

### 1. Lazy Loading

- **화면에 보이기 전까지 이미지를 로드하지 않음**
- **초기 로딩 속도가 빠름**

### 2. 사이즈 최적화

- **다양한 해상도에 맞춰 이미지 크기를 자동으로 조절**
- 디바이스별 최적화된 이미지 제공

### 3. 레이아웃 쉬프트 방지

- **이미지가 미리 공간을 확보** → 콘텐츠 밀림 방지
- `width`와 `height` 속성으로 공간 예약

## 실제 사용 예시

```jsx
export default function Product() {
  let prd = ['신발', '로봇', '책상'];

  return (
    <div>
      <h1>상품 페이지</h1>
      {prd.map((prd, idx) => (
        <div key={idx}>
          <Image src='/playing.png' alt='놀아줘익명' width={100} height={100} />
          <h4>{prd}</h4>
        </div>
      ))}
    </div>
  );
}
```

## 성능 최적화 요약

| 구분          | 일반 img    | Next.js Image       |
| ------------- | ----------- | ------------------- |
| **로딩 속도** | 느림        | 빠름 (Lazy Loading) |
| **반응형**    | 수동 설정   | 자동 최적화         |
| **레이아웃**  | 쉬프트 발생 | 쉬프트 방지         |
| **사이즈**    | 고정        | 디바이스별 최적화   |

---

> 💡 **핵심**
>
> - Next.js는 폴더 구조를 통해 자동으로 라우팅을 설정하여 개발자가 별도의 라우터 설정 없이도 페이지를 쉽게 관리할 수 있습니다!
> - Layout.js는 모든 페이지에서 공통으로 사용되는 UI를 정의하고, Next.js는 서버에서 HTML을 미리 생성한 후 클라이언트에서 React로 Hydration하는 방식으로 동작합니다!
> - Next.js의 Image 컴포넌트는 웹 성능 최적화를 위한 다양한 기능을 자동으로 제공하여 더 나은 사용자 경험을 만들어줍니다!
