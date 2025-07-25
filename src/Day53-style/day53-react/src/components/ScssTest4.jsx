import React from 'react';
import '../assets/scss/ScssTest4.scss';

export default function ScssTest4() {
  return (
    <div>
      <h1>SCSS 에서의 조건문 사용 실습</h1>

      <h3>@if 조건문 예제</h3>
      <div className='box'>
        <p>조건문</p>
      </div>

      <h3>@for 반복문 예제</h3>
      <div className='box'>
        {[1, 2, 3, 4, 5].map((num) => (
          <p key={num} className={`box-${num}`}>
            Tag {num}
          </p>
        ))}
      </div>
    </div>
  );
}

/** scss에서 조건문 사용
 * `@if` 조건에 따라 스타일 다르게
 * `@for` 숫자를 반복해서 스타일 생성
 * `@each` 리스트나 맵을 돌면서 스타일 생성
 * `@while` 조건이 참인 동안 반복
 *
 * 조건부 스타일을 작성할 때 매우 유용하게 사용된다.
 */
