import React, { useEffect } from 'react';

export default function KakaoLogin() {
  const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_KEY;

  //카카오객체 초기화
  useEffect(() => {
    console.log('window.kakao: ', window.Kakao);
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
      console.log('카카오 객체 만들어짐');
    }
  }, []);

  // 카카오 로그인 버튼 클릭
  function handleLogin() {
    // 카카오 객체가 안만들어졌으면 리턴
    if (!window.Kakao) {
      alert('카카오객체가 정상적으로 만들어지지 않았습니다');
      return;
    }

    // 객체 생성되어 있다면 자동으로 로그인을 실행 => popup창 (Day29=>창 이동=>callback이 일어났음)
    window.Kakao.Auth.login({
      //로그인 후 어떤 정보를 받을지
      scope: 'profile_nickname, profile_image',
      //로그인 성공
      success: function (authObj) {
        console.log('로그인 성공!', authObj);
        // 사용자 정보를 요청
        window.Kakao.API.request({
          url: '/v2/user/me', //필수값
        })
          .then(function (response) {
            //성공
            console.log(response);
          })
          .catch(function (error) {
            //실패
            console.error(error);
          });
      },
      //로그인 실패
      fail: function (err) {
        console.error('로그인 실패');
      },
    });
  }
  return (
    <div>
      <h1 className='text-3xl font-bold'>카카오 로그인</h1>
      <button
        onClick={handleLogin}
        className='bg-yellow-400 text-white font-bold w-[10rem] h-[3rem] rounded-lg my-3'>
        카카오 로그인
      </button>
    </div>
  );
}
