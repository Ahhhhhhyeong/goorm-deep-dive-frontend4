'use client';
import type { TodoPreview } from '@/types/todo';
import React, { useState } from 'react';

type Props = {
  item: TodoPreview;
};

export default function TodoPreviewCard({ item }: Props) {
  const [checked, setChecked] = useState<boolean>(item.completed);

  return (
    <div>
      <h1>제목:{item.title}</h1>
      <p>완료됨?? {item.completed}</p>
    </div>
  );
}
