import React from 'react';

export default function Cartlayout({ children }) {
  return (
    <>
      <p>현대카드 무이자 이벤트 진행중</p>
      <main>{children}</main>
    </>
  );
}
