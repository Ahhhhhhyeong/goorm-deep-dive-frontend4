import React, { useEffect } from 'react';

export default function KakaoLogin() {
  const kakaoLoginKey = import.meta.env.VITE_KAKAO_KEY;

  //카카오객체를 한 번 실행해서 앱키를 확인하는 명령문 필요
  useEffect(() => {
    //window.Kakao 브라우저에서 로드 된 카카오 전역 객체
    // 카카오에서 제공하는 객체에 내 앱키를 저장해서 객체 초기화
    // 앱 시작 시, 1번만 초기화 진행하면 됨.
    // 여러번 초기화 되는 버그를 방지하기 위해서 사용하는 함수 = isInitialized (초기화 일어남: true / 안 일어남: false)
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoLoginKey);
      console.log('카카오 객체가 만들어짐!');
    }
  }, [kakaoLoginKey]);
  const handlerLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:5173/callback',
    });
  };
  return (
    <div>
      <h1>카카오 로그인</h1>
      <button onClick={handlerLogin}>카카오 로그인</button>
    </div>
  );
}
