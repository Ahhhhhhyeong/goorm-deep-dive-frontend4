import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function UseEffectComponents() {
  //컴포넌트가 처음 나타날 때 실행(mount)
  useEffect(() => {
    console.log('처음 실행함요');
  }, []);

  return (
    <div>
      <h1>react bootstrap button</h1>
      <Button variant='secondary'>확인</Button>
      <Button className='my-color'>내 원하는 색상</Button>
    </div>
  );
}

/* 
react bootstrap 페이지 따로 있음
https://react-bootstrap.netlify.app/

*/
