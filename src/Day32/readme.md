# [Day32] 2025.06.24

---

## ✨ FocusInput / AutoScroll

### 🔧 `useRef`란?

- 저장 공간 또는 DOM 요소에 접근하기 위해 사용되는 React Hook
- `state`와 달리 리렌더링을 발생시키지 않으며 값을 유지함
- 선언 방법:
  ```js
  const 변수명 = useRef(초기값);
  ```

### 🔍 `useRef` 사용 시점

- **DOM 제어**: 입력창 포커스, 스크롤 위치 제어 등
- **이전 값 저장**: 이전 상태와 현재 상태 비교
- **외부 리소스 제어**: 타이머 ID, WebSocket 등

### 📌 사용 예시

#### 1. 버튼 클릭 시 Input에 포커스 이동

```jsx
import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type='text' />
      <button onClick={handleClick}>input에 포커스</button>
    </>
  );
}
```

#### 2. 메시지 추가 시 자동 스크롤

```jsx
import React, { useState, useRef, useEffect } from 'react';

export default function AutoScroll() {
  const [message, setMessage] = useState(['샘플 메시지1']);
  const endRef = useRef(null);

  const addMessage = () => {
    setMessage((prev) => [...prev, `샘플 메시지 ${prev.length + 1}`]);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [message]);

  return (
    <div style={{ margin: '3rem' }}>
      <h2>message box</h2>
      <div
        style={{
          height: '200px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
        }}>
        {message.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
        <div ref={endRef} />
      </div>
      <button onClick={addMessage}>메시지 추가</button>
    </div>
  );
}
```

### 🧠 참고: Optional Chaining(`?.`)

- 객체가 `null` 또는 `undefined`일 때 오류 없이 안전하게 접근 가능
- 예시: `endRef.current?.scrollIntoView()`

---

## 🔍 네이버 검색 API

### 📋 사용 준비 과정

1. 클라이언트 ID와 Secret Key 준비
2. API URL 및 포트 확인
3. `fetch()`를 이용한 통신 설정

| 항목      | 설명                             |
| --------- | -------------------------------- |
| `url`     | API 주소                         |
| `method`  | GET 또는 POST                    |
| `headers` | 인증용 ID, Secret, User-Agent 등 |

---

### ⚠️ 클라이언트에서 직접 호출 시 문제점

- **CORS 정책으로 인해 브라우저에서 직접 요청 불가**
  - Access-Control-Allow-Origin 허용 X → CORS 에러 발생
- 즉, **프론트엔드에서 직접 네이버 Open API 호출 불가**
- 실제 프로젝트에서는 **백엔드 서버에서 API를 호출하여 중계**하는 방식이 적절

### 🔐 CORS 간단 정리

- CORS: 다른 출처 간 리소스를 공유할 수 있게 해주는 정책
- 브라우저 보안 정책 중 하나로, 서버가 허용하지 않으면 차단됨

### ✅ 해결 방법: 프록시 서버 이용

- **공부용으로만** 사용 가능한 임시 프록시 서버:
  ```
  https://cors-anywhere.herokuapp.com/
  ```
- 사용 전 브라우저에서 "Request temporary access" 버튼 클릭 필요
- 제한 시간: 약 1시간

### 🔁 데이터 흐름

```
React → 프록시 서버 → 네이버 API
```

---

### 📦 프록시 서버 사용 예시 코드

```jsx
import React, { useEffect, useState } from 'react';

const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;

export default function BlogSearch() {
  const keyword = '비비안웨스트우드';
  const requestUrl = `https://openapi.naver.com/v1/search/blog.json?query=${encodeURIComponent(keyword)}`;

  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = `${proxy}${requestUrl}`;

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    proxyFetch();
  }, []);

  function proxyFetch() {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET,
      },
    })
      .then((resp) => resp.json())
      .then((jsonData) => {
        setBlog(jsonData.items);
      })
      .catch((err) => {
        console.error('에러 발생:', err);
      });
  }

  return (
    <div>
      <h1>Blog Search</h1>
      {blog.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
}
```
