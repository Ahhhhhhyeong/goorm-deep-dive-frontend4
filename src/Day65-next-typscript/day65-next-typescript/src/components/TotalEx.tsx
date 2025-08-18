import React from 'react';
import BoardItem from './BoardItem';

export type Board = {
  id: number; // 고유 번호
  title: string; // 제목
  content: string; // 내용
  readcount: number; // 조회수
};

export default function TotalEx() {
  // 게시글을 가지고와서 저장하고 출력하는 내용
  const board1: Board = {
    id: 1,
    title: '1등이다',
    content: '출석인데?',
    readcount: 0,
  };

  const board2: Board = {
    id: 2,
    title: '2등이다',
    content: '2출석인데?',
    readcount: 0,
  };
  const board3: Board = {
    id: 3,
    title: '3등이다',
    content: '3출석인데?',
    readcount: 0,
  };

  const boardList = [board1, board2, board3];

  return (
    <div>
      <h3 className='text-2xl font-bold'>객체와 배열을 합한 타입스크립트</h3>
      {/* {boardList.map((item) => (
        <div key={item.id}>
          <h4>글 제목: {item.title}</h4>
          <p>내용: {item.content}</p>
          <p>조회수:{item.readcount} </p>
        </div>
      ))} */}
      {boardList.map((item) => (
        <BoardItem key={item.id} board={item} />
      ))}
    </div>
  );
}
