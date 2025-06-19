import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SnsLogin from './SnsLogin';
import TabLink from './TabLink';

export default function Login() {
  return (
    <div className='flex justify-center items-center shadow-lg  bg-white login-section'>
      <div className='w-1/2 h-1vh flex-1 '>
        <div className='contain-center'>
          {/* 텍스트 */}
          <h2 className='login-title font-bold'>
            서비스에 오신 것을 환영합니다
          </h2>
          <p className='font-noto text-gray-600 mt-3'>
            매일 새롭게 업데이트 되는 다양한
          </p>
          <p className='font-noto text-gray-600 mb-3'>
            UIUX 디자인을 저작권 걱정 없이 무료로 사용해 보세요
          </p>
          {/* 탭 부분 */}
          <div className='w-full rounded-xl flex justify-between items-center bg-neutral-200 login-tab p-1'>
            <TabLink to='/loginform'>로그인</TabLink>
            <TabLink to='/signup'>회원가입</TabLink>
            <TabLink to='/findpassword'>비밀번호 찾기</TabLink>
          </div>
          {/* 로그인, 회원가입, 비밀번호 찾기 보여주는 곳 */}
          <Outlet />
          {/* sns 로그인 */}
          <SnsLogin />
        </div>
      </div>
      <div className='w-1/2 h-1vh flex-1 rounded-r-lg bg-login-image'></div>
    </div>
  );
}
