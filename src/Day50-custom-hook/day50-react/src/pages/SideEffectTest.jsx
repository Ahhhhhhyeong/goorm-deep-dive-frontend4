import React from 'react';
import UseToggle from '../components/UseToggle';
import useInput from '../components/useInput';
import useDebounce from '../components/useDebounce';
import useWindowSize from '../components/useWindowSize';

export default function SideEffectTest() {
  const [on, toggle] = UseToggle();
  const name = useInput('');
  const debounced = useDebounce();
  const { width, height } = useWindowSize();
  return (
    <div>
      <h3>useToggle 커스텀 훅</h3>
      <p>토글 상태: {on ? '켜짐' : '꺼짐'}</p>
      <button onClick={toggle}>토글</button>

      <h3>useInput 커스텀 훅</h3>
      <input {...name} placeholder='이름을 입력하세요' />
      <p>입력값 : {name.value}</p>
      <button onClick={name.reset}>Reset</button>

      <h3>useDebounce 커스텀 훅</h3>
      <input {...name} placeholder='검색어' />
      <p>실시간 입력: {name.value}</p>
      <p>디바운싱 (1초 후) : {debounced}</p>

      <h3>useWindowSize Custom Hook</h3>
      <p>
        현재 창 크기: {width}px * {height}px
      </p>
      {width < 768 ? <p>📱 모드</p> : <p>🖥️ 모드</p>}
    </div>
  );
}
