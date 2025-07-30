import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My Next.js 사이트',
  icons: {
    // 기존에 app 안에 들어있던 favicon.icon를 public으로 옮기니 적용되었다!
    icon: '/Apple_logo_black.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        {/* webpage menu bar <Navigation> */}
        <nav className='navbar'>
          <Link href='/'>HOME</Link>
          <Link href='/about'>ABOUT</Link>
          <Link href='/contact'>CONTACT</Link>
          {/* <Link href='/list'>LIST</Link> */}
          <Link href='/admin/dashboard'>DASHBOARD</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

/**
 * 공통적으로 들어가야하는 부분들
 * => layout.js : 공통 레이아웃
 * ex) 헤더, 메뉴(네비게이션), 푸터, 슬라이드바 등등
 *
 * ---------
 *
 * next.js 13버전 부터는 App Router 기반의 layout.js(ts)는 page.js의 외부구조를 감싸는 파일
 * {children} = 활성화된 페이지 컴포넌트
 
---------------------

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

📦 실행되는 주요 컴포넌트:
   - `about.js` (React 컴포넌트)
   - `_app.js` (앱 공통 설정)
   - `_document.js` (SSR 시 HTML 구조 조작)
   - `getServerSideProps()` (선택적 데이터 호출)
 */
