import React, { useReducer } from 'react';
import CompanyList from '../components/CompanyList';

function openReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, [action.id]: !state[action.id] };
    default:
      return state;
  }
}
export default function CompanyTree() {
  const [openState, openDispatch] = useReducer(openReducer, {});

  function toggle(id) {
    return openDispatch({ type: 'TOGGLE', id });
  }

  return (
    <div className='m-4'>
      <h1 className='text-2xl font-semibold mb-3'>회사 조직도 트리 실습</h1>
      <p className='text-sm text-zinc-600 mb-3'>회사 조직도</p>
      <CompanyList nodes={company} openState={openState} toggle={toggle} />
    </div>
  );
}

const company = [
  {
    id: 1,
    name: '김대표',
    role: 'CEO',
    children: [
      {
        id: 2,
        name: '박팀장',
        role: '디자인팀장',
        children: [
          {
            id: 4,
            name: '유디자이너',
            role: '디자이너',
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: '이팀장',
        role: '개발팀장',
        children: [
          {
            id: 5,
            name: '홍개발자',
            role: '프론트엔드',
            children: [],
          },
          {
            id: 6,
            name: '최개발자',
            role: '백엔드',
            children: [],
          },
        ],
      },
    ],
  },
];
