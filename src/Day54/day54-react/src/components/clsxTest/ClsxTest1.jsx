import React from 'react';
import Button from './Button';
import ButtonClsx from './ButtonClsx';

export default function clsxTest1() {
  return (
    <div>
      <h3>지저분한 클래스네임</h3>
      <Button />

      <h4>깔끔한 클래스네임</h4>
      <ButtonClsx primary={true} />
      <ButtonClsx primary={true} rounded={true} />
      <ButtonClsx primary={true} disabled={true} />
      <ButtonClsx primary={true} disabled={true} rounded={true} />
      <ButtonClsx primary={false} disabled={flase} rounded={true} />
    </div>
  );
}

/*
clsx란?
 - 조건에 따라 클래스를 동적으로 설정할 수있게 도와주는 라이브러리
 - 리액트에서 조건부 스타일링이 필요한 경우 문자열 조합이나 삼항 연산자 대신 
   더 깔끔하고 가독성 좋게 클래스 이름을 제어할 수있다.

  <div className={isActive ? 'box active' : 'box'}></div>
 - 배열, 객체, 조건 표현식을 한 줄로 처리할 수있어서 매우 편함
 - 외부라이브러리다!
   npm install clsx


*/
/*
clsx란?
- 조건에 따라 클래스를 동적으로 설정할 수 있게 도와주는 라이브러리
- 리액트에서 조건부 스타일링이 필요한 경우 문자열 조합이나 삼항 연산자 대신에 더 깔끔하고 가독성 좋게 클래스 이름을 제어할 수 있음

=> 외부라이브러리
npm install clsx
*/
