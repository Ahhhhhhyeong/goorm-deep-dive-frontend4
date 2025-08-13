import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  // 로그인 여부에 따라서 true로 변경
  const [authorized, setAuthorized] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      // 로그인 페이지로 이동한 후 뒤로가기를 눌렀을 때 관리자 페이지로 못 들어오게 하기 위해
      router.replace('/admin/login');
    } else {
      setAuthorized(true);
    }
  }, []);

  // 로그인 여부 확인 전에는 화면에 아무것도 렌더링 하지 않음.
  // 권한 확인 후에 대시보드 ui만 보여줌
  // 서버인증 JWT, session 권장

  // 세션(Session)?
  //  - 웹에서 사용자 로그인 상태를 유지하기 위한 대표적인 방식중에 하나다!
  //  - 서버 쪽에 로그인 정보를 저장하고 브라우저에서 세션을 식별할 수있는
  //   세션 ID만 쿠키로 전달하는 방식
  if (!authorized) return null;

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>관리자 대시보드</h1>
      <ul className='space-y-2'>
        <li>
          <Link href='/admin/products' className='text-blue-600 underline'>
            상품 관리
          </Link>
        </li>
        <li>
          <Link href='/admin/addproduct' className='text-blue-600 underline'>
            상품 추가
          </Link>
        </li>
        <li>
          <Link href='/admin/orders' className='text-blue-600 underline'>
            주문/배송 조회
          </Link>
        </li>

        <button
          className='rounded bg-blue-200 p-2 mt-4'
          onClick={() => {
            localStorage.removeItem('adminLoggedIn');
            router.replace('/admin/login');
          }}>
          로그아웃
        </button>
      </ul>
    </div>
  );
}

/*
실무에서 가장 흔하게 사용하는 로그인 유지방법 
1. NextAuth.js (OAuth)
   pages router -> getServerSideProps 로 보호하는게 가장 깔끔
   axios안에 create(baseUrl, withCredentials : true)
   
   App router -> middleware에서 쿠키/ 세션 확인하여  /admin/* 리다이렉트
2. 서버 세션 
3. JWT (쿠키 저장, refresh 토큰 포함)

위에 내용들중에서 비밀번호를 넘 길때 암호화를 진행
npm i bcrypt

쿠키(Cookie)?
 - 브라우저가 서버로부터 받아서 로컬에 저장하는 작은 데이터 조각이다
 -  웹사이트에서 이 쿠키를 이용해서 사용자의 상태(로그인여부, 장바구니 내용 등) 기억한다.

 HttpOnly 
  - 자바스크립트에서 접근 불가 (XSS) 방어
*/
