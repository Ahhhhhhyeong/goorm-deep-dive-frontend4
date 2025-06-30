import React, { useReducer, useState } from 'react';
import GameList from '../components/GameList';

export default function GameTree() {
  const [isClick, dispatch] = useState(clickReducer, {});
  const [history, setHistory] = useState([]);

  return (
    <div className='m-4'>
      <h1 className='text-2xl font-semibold mb-3'>게임 선택지 트리 실습</h1>
      <p className='text-sm text-zinc-600 mb-3'>아래의 선택지에 따라 엔딩이 달라집니다</p>
      <h3 className='text-lg font-semibold text-green-500 mb-3'>{questTree.question}</h3>
      {/* <GameList nodes={questTree.options} clickState={isClick} toggle={toggle} /> */}
    </div>
  );
}

const questTree = {
  id: 1,
  question: '당신은 어두운 숲 앞에 서 있습니다. 어디로 갈까요?',
  options: [
    {
      text: '왼쪽 길로 간다',
      next: {
        id: 2,
        question: '늪지대를 만났습니다. 건너시겠습니까?',
        options: [
          {
            text: '건넌다',
            next: {
              id: 4,
              question: '괴물에게 공격당했습니다! 싸우시겠습니까?',
              options: [
                {
                  text: '싸운다',
                  next: {
                    id: 8,
                    result: '전투에서 패배했습니다. 실패입니다.',
                  },
                },
                {
                  text: '도망친다',
                  next: {
                    id: 9,
                    result: '무사히 도망쳤습니다! 성공입니다.',
                  },
                },
              ],
            },
          },
          {
            text: '우회한다',
            next: {
              id: 5,
              question: '늪을 우회 중 길을 잃었습니다. 신호탄을 쏘시겠습니까?',
              options: [
                {
                  text: '신호탄을 쏜다',
                  next: {
                    id: 10,
                    result: '구조대가 도착했습니다! 성공입니다.',
                  },
                },
                {
                  text: '계속 걷는다',
                  next: {
                    id: 11,
                    result: '탈진하여 쓰러졌습니다. 실패입니다.',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      text: '오른쪽 길로 간다',
      next: {
        id: 3,
        question: '성의 문을 발견했습니다. 들어가시겠습니까?',
        options: [
          {
            text: '들어간다',
            next: {
              id: 6,
              question: '성 안에 함정이 있습니다. 조사를 계속하시겠습니까?',
              options: [
                {
                  text: '계속 조사한다',
                  next: {
                    id: 12,
                    result: '보물을 발견했습니다! 성공입니다.',
                  },
                },
                {
                  text: '나간다',
                  next: {
                    id: 13,
                    result: '기회를 놓쳤습니다. 실패입니다.',
                  },
                },
              ],
            },
          },
          {
            text: '돌아선다',
            next: {
              id: 7,
              question: '숲에서 길을 잃었습니다. 무작정 걷겠습니까?',
              options: [
                {
                  text: '걷는다',
                  next: {
                    id: 14,
                    result: '늑대에게 습격당했습니다. 실패입니다.',
                  },
                },
                {
                  text: '불을 피우고 기다린다',
                  next: {
                    id: 15,
                    result: '다른 모험가를 만나 구조되었습니다. 성공입니다.',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
