import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>메인 페이지이다!</h1>
      <a href='/Apple_logo_black.svg' download>
        브로슈어 다운로드
      </a>
      <p>이미지 로드</p>
      <Image alt='icon 이미지' src='/Apple_logo_black.png' width={100} height={120} />
      <br />
    </div>
  );
}

/*
next.js 알아보기!!
page.js가 메인 페이지로 기본 설정
src/app 디렉토리 기반으로 파일들이 정리된다.

---
next.js 프로젝트 설정
```
npx create-next-app@[버전] [프로젝트폴더명] \ 
  --js \
  --eslint \
  --tailwind \
  --src-dir \
  --app \
  --import-alias="@/*" \
```


---

프로젝트 폴더 구성
- app : 코드 작성을 할 폴더
- page.js : 메인페이지
- layout.js : 메인페이지를 감싸는 용도의 페이지
- public : 이미지나 파일 보관용
- 하위 버전에서는 api 디렉토리가 있음
    - 서버기능 만드는 곳
- next.config.mjs : next.js 설정파일
- package : 라이브러리 버전 기록
- node_modules : 설치한 라이브러리 보관

---

Client-Side-Rendering (CSR)
- 브라우저에서 html을 실시간으로 만드는 방법

Server-Side-Rendering (SSR)
- 서버에서 html을 미리 만들어서 보냄

next.js 장점
- **폴더기반** 자동 라우팅
- DB연결이 쉽다
- 직관적임
- 이미지와 폰트 최적화

next.js랑 react랑 유사하다
  - 메인페이지가 다름

---

next.js에서 페이지를 나눌 때 사용하는 방법
 - 라우팅 페이지를 자동으로 설정해줌
 - app 안에 디렉토리를 만들면 이게 URL 주소가 된다.
 - 해당 url을 입력해서 보여주는 페이지는 리엑트 파일인 컴포넌트가 된다
 - 컴포넌트의 이름은 page.jsx가 기본

 ---
 

*/
