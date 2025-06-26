import React, { useEffect, useReducer, useRef } from 'react';
/**
 * 목표
      시작/정지/리셋 가능한 간단한 스톱워치 만들기 (단위: 초)
      
      요구 조건
      useReducer로 상태 관리: seconds, isRunning
      
      버튼: 시작,정지, 리셋
      useEffect와 setInterval() 사용
      
      보너스
      시간이 60초가 되면 분 단위로 자동 변환 표시 (MM:SS)
 * @returns 
 */
const initState = {
  seconds: 0,
  isRunning: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true, isReset: false };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return { ...state, isRunning: false, seconds: 0 };
    case 'TICK':
      return { ...state, seconds: state.seconds + 1 };
  }
}

export default function Timer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const intervalId = useRef(null);

  useEffect(() => {
    console.log('state: ', state);
    if (state.isRunning) {
      //시작
      console.log('시작');
      intervalId.current = setInterval(() => {
        // state.seconds++;
        dispatch({ type: 'TICK' });
      }, 1000);
    } else {
      //멈추기
      clearInterval(intervalId.current);
    }
    return () => clearInterval(intervalId.current);
  }, [state.isRunning]);

  const timerSet = (n) => {
    const minutes = Math.floor((n % 3600) / 60);
    const hours = Math.floor(n / 3600);
    const seconds = n % 60;
    return `${String(hours).padStart(2, '0')}:
    ${String(minutes).padStart(2, '0')}:
    ${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='s-full bg-white flex flex-col rounded-lg'>
      <h1>타이머 : {timerSet(state.seconds)}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: 'START' })}
          className='w-15 bg-blue-500 h-10 m-4 font-center rounded-lg hover:bg-blue-700 text-white'>
          시작
        </button>
        <button
          onClick={() => dispatch({ type: 'STOP' })}
          className='w-15 bg-blue-500 h-10 m-4 font-center rounded-lg hover:bg-blue-700 text-white'>
          정지
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className='w-15 bg-blue-500 h-10 m-4 font-center rounded-lg hover:bg-blue-700 text-white'>
          리셋
        </button>
      </div>
    </div>
  );
}
