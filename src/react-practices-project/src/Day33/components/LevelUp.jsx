import React, { useReducer } from 'react';
/**실습 문제 4 - 레벨업 RPG 캐릭터 시스템
      목표
      경험치를 쌓아 캐릭터가 레벨업할 수 있는 시스템 만들기
      
      요구 조건
      상태: { level: 1, exp: 0 }
      
      버튼: “경험치 +10”
      경험치가 100 이상이면 level +1, exp 0으로 리셋
      
      보너스
      현재 상태에 따라 “레벨업!” 메시지 띄우기
      5레벨 이상이면 버튼을 비활성화 시키기 (disabled) */

const statusInitState = {
  level: 0,
  exp: 0,
};

function statusReducer(state, action) {
  switch (action.type) {
    case 'EXPUP':
      return { ...state, exp: state.exp + 10 };
    case 'LEVELUP':
      return { ...state, level: state.level + 1, exp: 0 };
  }
}

export default function LevelUp() {
  const [status, statusDispatch] = useReducer(statusReducer, statusInitState);

  const handleClick = () => {
    if (status.exp >= 100) {
      statusDispatch({
        type: 'LEVELUP',
      });
      alert(`레벨업~~!!!! `);
    } else {
      statusDispatch({
        type: 'EXPUP',
      });
    }
  };

  return (
    <div className='s-full bg-white flex flex-col rounded-lg p-4 mx-3 text-center'>
      <h1 className='text-2xl font-bold text-zinc-900'>게임 스타트!</h1>
      <p className='text-sm text-zinc-400'>게임 설명 : 버튼을 누르면 경험치가 10씩 쌓입니다! 100 이상이면 레벨UP!</p>
      <p className='text-xl font-bold text-pink-300'>나의 레벨 : {status.level}</p>
      <p className='text-xl font-bold text-purple-400'>나의 EXP : {status.exp}</p>

      <button
        onClick={handleClick}
        className='p-2 m-2 text-white bg-blue-400 rounded-sm disabled:bg-gray-50'
        disabled={status.level >= 5}>
        경험치 얻기
      </button>
    </div>
  );
}
