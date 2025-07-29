import React from 'react';
import './CardStyle.scss';
import clsx from 'clsx';

export default function Card({ title, completed }) {
  return (
    <div
      className={clsx('todo-card', {
        completed: completed,
        uncompleted: !completed,
      })}>
      <p className='badge'>{completed ? '완료' : '미완료'}</p>
      <h3>{title}</h3>
    </div>
  );
}
