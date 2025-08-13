import { getCookie } from 'cookies-next';

export default function Home({ token }) {
  return (
    <div>
      <h1>쿠키(Cookie)</h1>
      <p>저장된 쿠키 토큰: {token || '없음'}</p>
      {/* 버튼을 클릭 -> api/login 호출 -> 쿠키를 저장 -> 새로고침하면 SSR에서 읽어오기 */}
      <button className='bg-blue-500 text-white px-2 py-1 rounded mr-4' onClick={() => fetch('/api/login')}>
        쿠키 저장
      </button>
      <button className='bg-red-500 text-white px-2 py-1 rounded ' onClick={() => fetch('/api/logout')}>
        쿠키 삭제
      </button>
    </div>
  );
}

// 페이지가 브라우저에서 열리기전에 서버에서 먼저 실행해서 쿠키나 DB데이터를
// 가져오는 props로 페이지 컴포넌트 전달한다.
// getServerSideProps()
//  - next에서 제공하는 기본적인 서버사이드 데이터 패칭 함수!
//  - 페이지 요청이 있을 때마다 서버에서 실행!
//  - 반환된 데이터는 props로 전달한다.
//  - 초기 상태를 전달한다
//  - 서버에서 데이터를 미리 받아 HTML을 완성해서 보낸다. 초기 속도 개선좋다.
export async function getServerSideProps({ req, res }) {
  //req 안의 쿠키 중 "adminToken"값을 꺼내온다. 근데 만약 없다면 null 넘기겠다.
  // const token = await getCookie('adminToken', { req, res } || null);
  const token = await getCookie('adminToken', { req, res } || null);
  return { props: { token: token ?? null } };
}

/*
쿠키란?
 - 브라우저와 서버가 데이터를 주고 받을 때 브라우저에 저장되는 작은 텍스트 데이터를 말한다.
 - 보통 로그인 세션 유지, 인증정보 저장, 사용자 설정

 쿠키의 특징?
 - 브라우저에 저장
   (사용자가 페이지를 이동하거나 새로고침해도 유지 가능)
 - 자동 전송
   ( 해당 도메인에 요청을 보낼 때 마다 브라우저가 자동으로 함께 전송)

 - 유효기간(expires / max-age) 설정가능 
 - 클라이언트(js)와 서버(node) 양쪽에서 읽고 쓸 수가 있다.

 실무에서도 사용하는 정말 간단하게 다루고 싶을 때 많이 사용하는 라이브러리 
 npm install cookies-next

 브라우저환경에서는 httpOnly 옵션은 사용이 불가능하다
 -> 민감한 토큰은 서버에서 설정

 SSR(Server Side Rendering) 반드시 요청(req)과 응답(res)으로 데이터 전달해야
 페이지 렌더시 쿠키 접근 가능하다

 인증토큰 저장시 secure : true + Https 환경 권장

 const name = "쿠키이름";
  const value = "저장할 값 ( 문자열 또는 json가능)";
  const option = {
    object : "선택",   // 쿠키 설정 값
    maxAge :  60 * 5,  // 유효기간을 초단위로 설정 
    path : "/" ,         // 기본 / 
    // secure: "https전용",
    // httpOnly: (서버에서만 접근 가능)
  }
  // 저장
  setCookie(name,value,option);
  
  // 읽기 
  //  리턴하는 값은 문자열 또는 undefined
  getCookie("가져올 쿠키의 이름");
  getCookie("가져올 쿠키의 이름",option);


  // 삭제
  deleteCookie("삭제할 쿠키의 이름");


*/
