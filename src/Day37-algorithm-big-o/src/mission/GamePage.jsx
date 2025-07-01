import React, { useEffect, useReducer, useState } from 'react';
import BoomGame from './BoomGame';

export default function GamePage() {
  const [isStart, startDispatch] = useReducer(startReducer, false);
  const [block, setBlock] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  function startReducer(state, action) {
    return !state;
  }

  useEffect(() => {
    if (!isStart) return;
    setBlock(null);
  }, [isStart]);

  const handleModeSelect = (size) => {
    setBlock(size);
    setIsGameStarted(!isGameStarted); // 게임 시작됨 → 버튼 비활성화
  };

  return (
    <div>
      <h1>지뢰게임</h1>
      <button
        onClick={() => {
          setBlock(0);
          setIsGameStarted(false);
          startDispatch(isStart);
        }}>
        {isStart ? '게임 종료' : '게임 스타트!'}
      </button>
      {isStart && (
        <div style={{ margin: '1rem' }}>
          <button onClick={() => handleModeSelect(3)} style={{ marginLeft: '1rem' }} disabled={isGameStarted}>
            이지모드 3x3
          </button>
          <button onClick={() => handleModeSelect(5)} style={{ marginLeft: '1rem' }} disabled={isGameStarted}>
            노말모드 5x5
          </button>
          <button onClick={() => handleModeSelect(8)} style={{ marginLeft: '1rem' }} disabled={isGameStarted}>
            하드모드 8x8
          </button>
          <div className='game-div'>{block && <BoomGame block={block} />}</div>
        </div>
      )}
    </div>
  );
}
