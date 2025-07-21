import React from 'react';
import { useUserStore } from '../../stores/userStore';

export default function UserDisplay() {
  const name = useUserStore((state) => state.name);
  return (
    <div>
      {/* 폼에 입력내용 보여주는 곳 */}
      <p>입력된 이름: {name}</p>
    </div>
  );
}
