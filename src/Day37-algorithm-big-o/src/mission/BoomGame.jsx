import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
  board: [],
  gameOver: false,
  win: false,
};

//게임 오버 되었을 때
function gameOver(cell) {
  alert('GAME OVER!!');
  return { ...cell, isOpen: true, gameOver: true };
}

//게임 상태 관리
function gameReducer(state, action) {
  switch (action.type) {
    case 'INIT_BOARD':
      return { ...state, board: action.payload };
    case 'TOGGLE_FLAG': {
      const { row, col } = action.payload;
      const newBoard = state.board.map((r, rIdx) =>
        r.map((cell, cIdx) => (rIdx === row && cIdx === col ? { ...cell, flagged: !cell.flagged } : cell))
      );
      return { ...state, board: newBoard };
    }
    case 'OPEN_CELL': {
      const { row, col } = action.payload;
      const newBoard = state.board.map((r, rIdx) =>
        r.map((cell, cIdx) =>
          rIdx === row && cIdx === col ? (cell.hasBoom ? gameOver(cell) : { ...cell, isOpen: true }) : cell
        )
      );
      return { ...state, board: newBoard };
    }
    default:
      return state;
  }
}

export default function BoomGame({ block = 3 }) {
  //폭탄개수
  const minCount = Math.floor(Math.random() * (block / 2 - 1) + 1);
  //game 전체 상태 관리
  const [gameState, gameDispatch] = useReducer(gameReducer, initialState);
  const { board } = gameState;

  //지뢰가 들어있는 배열 생성(2차원배열)
  useEffect(() => {
    const totalCells = block * block;
    const tempBoard = Array.from({ length: totalCells }, () => ({
      hasBoom: false,
      flagged: false,
      isOpen: false,
    }));
    //폭탄이 들어있는 배열 생성
    let boom = 0;
    while (boom < minCount) {
      const index = Math.floor(Math.random() * totalCells);
      if (!tempBoard[index].hasBoom) {
        tempBoard[index].hasBoom = true;
        boom++;
      }
    }
    //1차원 배열 -> 2차원 배열로
    const board2D = [];
    for (let i = 0; i < block; i++) {
      board2D.push(tempBoard.slice(i * block, (i + 1) * block));
    }

    gameDispatch({ type: 'INIT_BOARD', payload: board2D });
  }, [block]);

  const handleLeftClick = (row, col) => {
    gameDispatch({ type: 'OPEN_CELL', payload: { row, col } });
  };

  const handleRightClick = (e, row, col) => {
    gameDispatch({ type: 'TOGGLE_FLAG', payload: { row, col } });
  };

  return (
    <div>
      {board && (
        <table>
          <thead></thead>
          <tbody>
            {board.map((rows, rIdx) => (
              <tr key={rIdx}>
                {rows.map((cols, cIdx) => (
                  <td
                    key={cIdx}
                    onContextMenu={(e) => handleRightClick(e, rIdx, cIdx)}
                    onClick={() => handleLeftClick(rIdx, cIdx)}
                    className={cols.isOpen ? 'td-show' : 'td-close'}>
                    {cols.isOpen ? (cols.hasBoom ? '💣' : '') : cols.flagged ? '🚩' : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
