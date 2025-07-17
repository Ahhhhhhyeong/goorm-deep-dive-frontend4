import { debounce } from 'lodash';
import React, { useState } from 'react';

export default function LodashTest2() {
  const [result, setResult] = useState('');

  const search = debounce(
    (text) => {
      // 어떤 행동을 할 것인지 작성
      setResult(`🔍 ${text}로 검색 결과를 찾았어요`);
    },
    500 // delay
  );

  return (
    <div>
      {/* 검색창 자동완성(글자를 멈춰야 검색됨) */}
      <h3>검색창 debounce로 설정하기</h3>
      <input onChange={(e) => search(e.target.value)} placeholder='검색어를 입력 후 잠시 기다려보세요' />
      <p>{result}</p>
    </div>
  );
}

/*
성능? 요즘 컴퓨터나 휴대폰 사양이 너무 좋아져서 성능을 많이 챙겨야하나 라는 의문이 생김...


*/
