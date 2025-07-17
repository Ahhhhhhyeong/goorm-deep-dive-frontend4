import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';

export default function DebonceAn() {
  const debounceChange = useCallback(
    debounce((value) => {
      console.log('Api 호출:', value);
    }, 300),
    []
  );
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    debounceChange(e.target.value); // 디바운스 적용
  };

  return (
    <div>
      <h3>Debounce를 이용해서 성능 향상</h3>
      <h6>위에 라이브러리를 위용해서 디바운스를 설정하는 방법</h6>
      <input onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}
/*
Debounce : 입력이 멈춘 뒤 일정 시간(3초)지나면 한번만 호출

useCallback  (바뀐게 없으면 다시 만들지마!)
 - 리액트에서 제공하는 훅
 - 함수를 메모이제이션해서 리렌더링 시 불필요한 함수 재생성을 막아주는 리액트 훅
 - useCallback(fn,deps)
   fn : 재 사용하고 싶은 함수
   deps : 의존성 배열 (이 값이 변하면 새 함수를 호출한다.)
   쉽게 설명하면 함수를 기억해뒸다가 필요할 때만 새로운 함수저장소!
    
*/
