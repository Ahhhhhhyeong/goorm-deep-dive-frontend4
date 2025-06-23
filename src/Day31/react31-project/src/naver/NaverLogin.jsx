import React, { useEffect } from 'react'

export default function NaverLogin() {
  const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;

  useEffect(() => {
    // 네이버 로그인에 대한 정보를 가지고 있는 라이브러리를 다운
    // 리액트에서 사용할 수 있도록 객체 생성
    console.log(window.naver);

    //로그인 버튼 생성, 로그인 기능 초기화 코드
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId : clientId,
      callbackUrl : 'http://localhost:5173/callback',
      isPopup : false,
      loginButton : { color:'green' , type:3 ,height:40}
    });
    
    // 여기까지하면 로그인 버튼이 생성되어 보인다!
    naverLogin.init();

    /* 로그인 후 로그인정보를 가지고 와야함!
    * 정보를 가지고 올 때 토큰 확인 => 전체 url을 가지고 온다.
    * 세션(서버에 정보 저장), 쿠키(내 컴퓨터에 정보저장)
    */
    console.log(window.location.href);
    //access_token을 포함하고있는지
    //비동기 함수
    if(window.location.href.includes('access_token')){
      //네이버 로그인이 성공했는지 확인하고 성공되었다면 사용자 정보를 가져오는 확인함수!
      naverLogin.getLoginStatus((status) => {
        console.log(`status: ${status}`);
        if(status){
          //login 성공 => 사용자 정보 확인 가능
          // console.log(naverLogin.user);
          const user = naverLogin.user;
          console.log('로그인 성공!');
          console.log(`이름: ${user.name}`);
          console.log(`생일: ${user.birthday}`);
        } else {
          //login 실패 => 정보 확인 불가능
          console.error('로그인 실패!');
        }
      });
    }
  },[]);

  return (
    <div>
      NaverLogin
      <div id='naverIdLogin'/>
    </div>
  )
}



/*
네이버든 카카오든 로그인을 하기 위해서는 개발자들에게 라이브러리를 제공
1. index.html
<script
  src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
  type="text/javascript"
  charset="utf-8">
</script>


2. callback url에 access_token 라는 단어가 있는지 확인
콜백 url:
http://localhost:5173/callback#access_token=*****&token_type=bearer&expires_in=3600

*/