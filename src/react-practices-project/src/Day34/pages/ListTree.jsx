import React, { useReducer } from 'react';
import SubjectList from '../components/SubjectList';

function openReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, [action.id]: !state[action.id] };
    default:
      return state;
  }
}
export default function ListTree() {
  const [openState, openDispatch] = useReducer(openReducer, {});

  function toggle(id) {
    openDispatch({ type: 'TOGGLE', id });
  }

  return (
    <div className='m-4'>
      <h1 className='text-2xl font-semibold mb-3'>수업 차례(목차) 트리 실습</h1>
      <p className='text-sm text-zinc-600 mb-3'>교과서의 목차를 트리구조로 표현</p>
      <div>
        <div>과학</div>
        <SubjectList nodes={scienceSubjects} openState={openState} toggle={toggle} />
      </div>
    </div>
  );
}

const scienceSubjects = [
  {
    id: 1,
    title: '1단원 : 지구와 달',
    children: [
      {
        id: 3,
        title: '1-1 지구의 모습',
        children: [],
      },
      {
        id: 4,
        title: '1-2 달의 변화',
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: '2단원 : 물의 상태 변화',
    children: [
      {
        id: 5,
        title: '2-1 증발과 응결',
        children: [],
      },
    ],
  },
];
