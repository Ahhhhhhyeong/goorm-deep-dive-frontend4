// 파일명: AutoScrollChat.jsx

import React, { useEffect, useRef, useState } from 'react';

export default function AutoScrollChat() {
  // 채팅창에 채팅을 입력하면 자동으로 스크롤이 이동하도록 코드 작성(여러분이 수정하기)
  // 버튼을 클릭했을 때 스크롤이 자동으로 이동하는 코드를 작성!

  // 1. ref 변수 만들기 태그의 위치를 지정하기
  const endRef = useRef(null);

  // 2. 채팅 메시지는 저장 채팅메시지를 관리위해서는 useState
  const [msg, setMsg] = useState(['안녕하세요', '환영합니다']);

  // 6. 메시지가 추가될 때 마다( 업데이트)
  // 자동으로 채팅창 아래로 스크롤이 내려갈 수있도록 설정
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    /** 부드럽게 스크롤을 위한 옵션이 있다.
     *  -> behavior
     * 옵션을 주지 않고도 사용은 가능함
     * ::기본값::
     * behavior : auto
     * block : start
     * -> 휙! 하고 즉시 이동을 하게 됨
     */
  }, [msg]);

  // 4. 이벤트 추가하기
  //    새 메시지를 추가하는 함수
  const addMsg = () => {
    // console.log("메시지 추가");
    // prev 변수에는 기존에 배열 값이 들어온다.
    // 그래서 새로운 배열을 만들 때 기존 배열을 복사하고 새로운 메세지를
    // 가장 뒤에 추가한다.
    setMsg((prev) => [...prev, `새 메시지 ${prev.length + 1}`]);
  };
  return (
    <div>
      <h1>AutoScrollChat</h1>
      <div
        style={{
          height: '200px',
          overflowY: 'auto' /* 세로 스크롤만들기 */,
          border: '1px solid #ccc',
          padding: '10px',
        }}>
        {/* 5. 메시지를 출력하는 map */}
        {msg.map((m, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            {m} {/* 채팅메시지 배열에서 하나씩 꺼내서 m 변수에 저장됨 */}
          </div>
        ))}
        {/* 3. 스크롤의 위치를 지정 맨 아래를 참조하는 태그를 만들어서
            ref변수랑 연결하기 */}
        <div ref={endRef}></div>
      </div>

      <button onClick={addMsg}>메시지 추가</button>
    </div>
  );
}
