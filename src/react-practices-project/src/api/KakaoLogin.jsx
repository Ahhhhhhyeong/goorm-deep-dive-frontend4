import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//순수 카카오 로그인만 진행하는 페이지
// 로그인 성공 시 -> 성공을 보여주는 화면(callback)화면으로 이동
export default function KakaoLogin() {
  const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_KEY;
  const [isSuccess, setSuccess] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
      console.log('카카오 객체 생성');
    }
    //객체 생성 => 자동으로 로그인 실행
    //만약 값이 있으면 안해도될듯!
    if (user) {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image',
        success: function (authObj) {
          console.log('authObj: ', authObj);

          window.Kakao.API.request({
            url: '/v2/user/me',
          })
            .then((resp) => {
              console.log(resp.kakao_account);
              setUser(resp.kakao_account.profile);
              setSuccess(true);
            })
            .catch((err) => {
              console.error(err);
              setSuccess(false);
            });
        },
        fail: function (error) {
          console.error(error);
          setSuccess(false);
        },
      });
    }
  }, []);

  return (
    <div>
      <h1 className='m-8 text-lg '>{isSuccess ? '성공!' : '실패'}</h1>
      <div className='m-8'>
        <h2>닉네임 : {user.nickname}</h2>
        <p>이미지</p>
        <img src={user.thumbnail_image_url} alt='이미지' />
      </div>
      <Link
        to='/'
        className='m-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
