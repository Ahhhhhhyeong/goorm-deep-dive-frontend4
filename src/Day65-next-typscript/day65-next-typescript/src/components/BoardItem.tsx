import React from 'react';
import { Board } from './TotalEx';

type Props = { board: Board };

export default function BoardItem({ board }: Props) {
  return (
    <div>
      <h4>글 제목: {board.title}</h4>
      <p>내용: {board.content}</p>
      <p>조회수:{board.readcount} </p>
    </div>
  );
}
