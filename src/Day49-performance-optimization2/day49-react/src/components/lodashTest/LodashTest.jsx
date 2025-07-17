import { debounce } from 'lodash';
import React from 'react';

export default function LodashTest1() {
  const showText = debounce((text) => {
    alert('🚨 입력한 내용: ' + text);
  }, 1000);

  return (
    <div>
      <h3>Lodash 라이브러리</h3>
      {/* 글자 입력 후 1초 기다렸다가 실행 */}
      <input onChange={(e) => showText(e.target.value)} placeholder='글자 입력 후 잠시 기다려보세요' />
    </div>
  );
}
/*
Lodash 라이브러리 
외부라이브러리 - npm install lodash 다운로드 

 자바스크립트에서 자주 사용되는 기능을 모아놓은 범용 유틸리티 함수라이브러리
  - 배열, 객체, 문자열, 날짜 , 수학 등 다양한 연산을 간단하게 처리할 수있다
  - 특히 성능 최적화용 debounce, throttle 함수가 실제 개발자들이 선능을 위해서
    많이 사용하고 있다. 그때 Lodash랑 useCallback 같이 사용하는 것

debounce() 는 입력이 끝난 이후에 이벤트가 실행된다
근데 이걸 왜 씀?

*/
