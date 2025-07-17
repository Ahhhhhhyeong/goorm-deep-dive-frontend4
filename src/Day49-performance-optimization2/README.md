# [DAY49] 25.07.17 배운 내용 정리

---

1. [🚀 Debounce를 이용한 성능 최적화](#-debounce를-이용한-성능-최적화)
1. [⚠️ Debounce가 없을 때 발생하는 문제점](#️-debounce가-없을-때-발생하는-문제점)
1. [📚 Lodash 라이브러리와 Debounce 실습](#-lodash-라이브러리와-debounce-실습)
1. [⚡ Throttling으로 성능 최적화하기](#-throttling으로-성능-최적화하기)
1. [🎯 useCallback과 React.memo로 성능 최적화하기](#-usecallback과-reactmemo로-성능-최적화하기)

---

# 🚀 Debounce를 이용한 성능 최적화

## 📝 개념 정리

### Debounce란?

> **입력이 멈춘 뒤 일정 시간이 지나면 한 번만 호출하는 기법**
>
> - 연속적인 이벤트를 제어하여 성능을 향상시킴
> - API 호출 최적화에 주로 사용

### useCallback이란?

> **함수를 메모이제이션하여 불필요한 재생성을 방지하는 React Hook**
>
> - 리렌더링 시 함수가 다시 만들어지는 것을 방지
> - 의존성 배열이 변하지 않으면 이전 함수를 재사용

## 🔧 실습 코드

[실습코드 DebonceAn.jsx](./day49-react/src/components/DebonceAn.jsx)

## 💡 핵심 포인트

### useCallback 사용법

```javascript
useCallback(함수, 의존성배열);
```

| 매개변수     | 설명                          |
| ------------ | ----------------------------- |
| `함수`       | 재사용하고 싶은 함수          |
| `의존성배열` | 이 값이 변하면 새 함수를 생성 |

### 동작 원리

1. **사용자 입력** → `setText`로 즉시 화면 업데이트
2. **debounceChange 호출** → 300ms 대기
3. **300ms 후** → API 호출 실행
4. **추가 입력 시** → 이전 호출 취소, 새로 300ms 대기

## 📋 사용 효과

- ✅ **성능 향상**: 불필요한 API 호출 방지
- ✅ **서버 부하 감소**: 연속 요청 제한
- ✅ **사용자 경험**: 실시간 UI 업데이트 유지
- ✅ **메모리 효율**: 함수 재생성 방지

## 🎯 실제 활용 예시

- 🔍 **검색 기능**: 사용자가 타이핑 중일 때
- 📝 **자동 저장**: 문서 편집 중일 때
- 📊 **실시간 필터링**: 데이터 조회 시

---

# ⚠️ Debounce가 없을 때 발생하는 문제점

## 🔧 문제가 있는 코드

```jsx
import React, { useState } from 'react';

export default function DebounceTest() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    console.log('😹 API호출:', e.target.value); // 매번 호출!
  };

  return (
    <div>
      <input onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}
```

## 🚨 발생하는 문제점

### 1. 과도한 API 호출 문제

> **매 글자마다 서버 요청이 발생**

- 📝 **예시**: "안녕하세요" 입력 시

  ```
  'ㅇ' → API 호출
  '아' → API 호출
  '안' → API 호출
  '안ㄴ' → API 호출
  '안녀' → API 호출
  '안녕' → API 호출
  ... (총 6번의 불필요한 호출)
  ```

- ⚡ **결과**
  - 네트워크 과부화
  - 서버 부하 증가
  - 사용자 경험(UX) 저하

### 2. 성능 낭비 문제

> **불필요한 렌더링과 계산 반복**

- 🔄 **발생하는 현상**
  - 매번 상태 업데이트로 인한 리렌더링
  - 연속적인 함수 실행으로 인한 메모리 사용량 증가
  - UI 버벅거림 현상

## 📊 비교 분석

| 구분                | Debounce 미적용  | Debounce 적용    |
| ------------------- | ---------------- | ---------------- |
| **API 호출 횟수**   | 입력 글자 수만큼 | 입력 완료 후 1회 |
| **네트워크 트래픽** | 높음 ⚡          | 낮음 ✅          |
| **서버 부하**       | 높음 ⚡          | 낮음 ✅          |
| **사용자 경험**     | 버벅거림 ⚡      | 부드러움 ✅      |

## 💡 해결책

```jsx
// ❌ 문제가 있는 코드
const handleChange = (e) => {
  setText(e.target.value);
  console.log('😹 API호출:', e.target.value); // 매번 호출
};

// ✅ 개선된 코드 (Debounce 적용)
const debounceChange = useCallback(
  debounce((value) => {
    console.log('🎯 API호출:', value); // 300ms 후 1회만 호출
  }, 300),
  []
);
```

## 🎯 핵심 포인트

- 🚫 **문제**: 실시간 입력 → 실시간 API 호출
- ✅ **해결**: 입력 완료 대기 → 한 번만 API 호출
- 🎪 **결과**: 성능 향상 + 사용자 경험 개선

---

# 📚 Lodash 라이브러리와 Debounce 실습

## 🔧 Lodash란?

> **자바스크립트에서 자주 사용되는 기능을 모아놓은 범용 유틸리티 함수 라이브러리**

### 주요 특징

- 📦 **설치**: `npm install lodash`
- 🛠️ **기능**: 배열, 객체, 문자열, 날짜, 수학 등 다양한 연산 처리
- ⚡ **성능 최적화**: `debounce`, `throttle` 함수 제공
- 🤝 **React와 조합**: `useCallback`과 함께 사용하여 최적화

---

## 📝 실습 예제

### 1️⃣ 기본 Alert 예제

```jsx
import { debounce } from 'lodash';
import React from 'react';

export default function LodashTest1() {
  const showText = debounce((text) => {
    alert('🚨 입력한 내용: ' + text);
  }, 1000); // 1초 지연

  return (
    <div>
      <h3>Lodash 라이브러리</h3>
      <input onChange={(e) => showText(e.target.value)} placeholder='글자 입력 후 잠시 기다려보세요' />
    </div>
  );
}
```

**💡 동작 원리**

- 사용자가 입력을 멈춘 후 **1초 대기**
- 1초 후 입력한 내용을 alert로 표시

---

### 2️⃣ 검색창 자동완성 예제

```jsx
import { debounce } from 'lodash';
import React, { useState } from 'react';

export default function LodashTest2() {
  const [result, setResult] = useState('');

  const search = debounce(
    (text) => {
      setResult(`🔍 ${text}로 검색 결과를 찾았어요`);
    },
    500 // 0.5초 지연
  );

  return (
    <div>
      <h3>검색창 debounce로 설정하기</h3>
      <input onChange={(e) => search(e.target.value)} placeholder='검색어를 입력 후 잠시 기다려보세요' />
      <p>{result}</p>
    </div>
  );
}
```

**🎯 실제 활용**

- 검색창에서 타이핑이 끝난 후 검색 실행
- API 호출 최적화로 서버 부하 감소

---

### 3️⃣ 창 크기 변경(Resize) 예제

```jsx
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';

export default function LodashTest3() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setSize(window.innerWidth);
    }, 500);

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h3>창 크기 변경(resize)</h3>
      <p>창 크기를 바꾸고 0.5초 기다려보세요!</p>
      <p>⚒️ 창 너비 : {size}px</p>
    </div>
  );
}
```

**🔑 핵심 개념**

| 개념                  | 설명                                  |
| --------------------- | ------------------------------------- |
| `window.innerWidth`   | 브라우저 창의 가로 너비를 픽셀로 반환 |
| `addEventListener`    | 브라우저 이벤트 리스너 등록           |
| `removeEventListener` | 이벤트 리스너 제거 (메모리 누수 방지) |

---

## 💡 성능 최적화 포인트

### 🚫 문제점

- 창 크기 변경 시 **실시간 업데이트** → 불필요한 렌더링 과다 발생

### ✅ 해결책

- **Debounce** + **언마운트 정리** 조합
- 창 크기 변경이 끝난 후 0.5초 대기 후 업데이트
- 컴포넌트 제거 시 이벤트 리스너도 함께 제거

### 🎪 실무 활용

```javascript
// 자주 사용하는 패턴
useEffect(() => {
  const debouncedHandler = debounce(실행할함수, 지연시간);

  window.addEventListener('이벤트타입', debouncedHandler);

  return () => window.removeEventListener('이벤트타입', debouncedHandler);
}, []);
```

## 🎯 마무리

**Debounce를 사용하는 이유**

- 🚀 **성능 향상**: 불필요한 함수 호출 방지
- 💻 **사용자 경험**: 부드러운 인터랙션 제공
- 🌐 **네트워크 최적화**: API 호출 빈도 조절
- 🧠 **메모리 관리**: 이벤트 리스너 정리로 메모리 누수 방지

---

# ⚡ Throttling으로 성능 최적화하기

## 🔍 Throttling이란?

> **일정 시간마다 한 번씩만 실행되게 제한하는 기법**

### 핵심 개념

- 📅 **정해진 간격**: 설정한 시간마다 한 번만 실행
- 🔄 **연속 이벤트 제어**: 반복되는 이벤트를 일정 간격으로 제한
- ⚡ **성능 최적화**: 브라우저 렌더링과 CPU 사용량 최적화

---

## 🆚 Debounce vs Throttling 비교

| 구분            | Debounce                | Throttling             |
| --------------- | ----------------------- | ---------------------- |
| **실행 시점**   | 입력이 **멈춘 후** 실행 | **일정 간격**마다 실행 |
| **사용 케이스** | 검색창, 자동저장        | 스크롤, 마우스 이동    |
| **예시**        | 타이핑 완료 후 검색     | 스크롤 중 위치 추적    |

---

## 📝 실습 예제

### 1️⃣ 스크롤 이벤트 최적화

```jsx
import { throttle } from 'lodash';
import React, { useEffect } from 'react';

export default function ThrottlingTest1() {
  // ✅ Throttling 적용한 경우
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('스크롤 이벤트 발생:', window.scrollY);
    }, 800); // 800ms마다 한 번씩 실행

    window.addEventListener('scroll', handleScroll);

    // 이벤트 정리 (메모리 누수 방지)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ❌ Throttling 미적용 시 (주석 처리된 코드)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log('스크롤 이벤트 발생:', window.scrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div>
      <h3>Throttling 스크롤 예제</h3>
      <p>아래로 스크롤 해보세요! 로그가 0.8초에 한 번만 찍힙니다.</p>

      <div
        style={{
          height: '200vh',
          backgroundColor: 'cyan',
        }}></div>
    </div>
  );
}
```

### 2️⃣ 버튼 클릭 제한

```jsx
import { throttle } from 'lodash';
import React from 'react';

export default function ThrottlingTest2() {
  // 버튼을 연속으로 클릭해도 2초마다 한 번씩만 반응
  const handleClick = throttle(() => {
    alert('😈 클릭됨~');
  }, 2000); // 2초 간격

  return (
    <div>
      <h2>버튼 Click Throttle</h2>
      <button onClick={handleClick}>2초에 1번씩 반응하는 버튼</button>
    </div>
  );
}
```

---

## 🚨 Throttling을 사용하지 않을 때의 문제점

### 발생하는 문제들

- 🔥 **과도한 이벤트 발생**: 마우스 한 번 움직임에도 수십~수백 번의 로그
- 💻 **CPU 점유율 증가**: 브라우저 성능 저하
- 🔄 **렌더링 과부하**: React 리렌더링 횟수 증가
- 🔋 **전력 소모**: 특히 모바일에서 배터리 소모 심화

### 성능 비교

```javascript
// ❌ Throttling 미적용
window.addEventListener('scroll', () => {
  console.log('스크롤!'); // 스크롤 시 초당 수십 번 실행
});

// ✅ Throttling 적용
const throttledScroll = throttle(() => {
  console.log('스크롤!'); // 800ms마다 한 번만 실행
}, 800);
window.addEventListener('scroll', throttledScroll);
```

---

## 🎯 실무 활용 사례

### 자주 사용되는 이벤트들

| 이벤트        | 사용 이유                     | 권장 시간   |
| ------------- | ----------------------------- | ----------- |
| **scroll**    | 스크롤 위치 추적, 무한 스크롤 | 100-300ms   |
| **resize**    | 반응형 레이아웃 조정          | 250-500ms   |
| **mousemove** | 마우스 따라다니는 효과        | 16-50ms     |
| **click**     | 중복 클릭 방지                | 1000-2000ms |

### 코드 패턴

```javascript
// 기본 패턴
useEffect(() => {
  const throttledHandler = throttle(실행할함수, 간격시간);

  window.addEventListener('이벤트타입', throttledHandler);

  return () => window.removeEventListener('이벤트타입', throttledHandler);
}, []);
```

---

## 🔧 핵심 포인트

### 언제 사용할까?

- ✅ **연속적인 이벤트**가 발생하는 경우
- ✅ **실시간 응답**이 필요하지만 **성능 최적화**도 중요한 경우
- ✅ **모바일 환경**에서 배터리 효율을 고려해야 하는 경우

### 주의사항

- ⚠️ **적절한 간격 설정**: 너무 짧으면 효과 없고, 너무 길면 UX 저하
- ⚠️ **이벤트 정리**: `removeEventListener`로 메모리 누수 방지
- ⚠️ **사용자 경험**: 기능이 동작하지 않는다고 오해받지 않도록 주의

## 🎪 마무리

**Throttling의 핵심 가치**

- 🚀 **성능 향상**: CPU 사용량과 렌더링 최적화
- 📱 **모바일 최적화**: 전력 소모 절약
- 💡 **사용자 경험**: 부드러운 인터랙션 제공
- 🛡️ **안정성**: 브라우저 과부하 방지

---

# 🎯 useCallback과 React.memo로 성능 최적화하기

## 📋 개념 정리

### useCallback이란?

> **리렌더링 시 함수를 새로 만들지 말고 이전 함수를 기억해서 성능을 최적화하는 React Hook**

```javascript
useCallback(함수, 의존성배열);
```

| 매개변수     | 설명                               |
| ------------ | ---------------------------------- |
| `함수`       | 기억하고 싶은 콜백함수             |
| `의존성배열` | 이 값이 바뀔 때만 함수를 새로 생성 |

---

## 🔧 실습 코드 비교

### ✅ useCallback + React.memo 적용

```jsx
import React, { useState, useCallback } from 'react';

// 자식 컴포넌트 - React.memo로 감싸서 props가 같으면 리렌더링 방지
const Child = React.memo(({ onClick }) => {
  console.log('😈 Child 렌더링!');
  return <button onClick={onClick}>자식 버튼</button>;
});

export default function UseCallbackTest() {
  const [count, setCount] = useState(0);

  // useCallback으로 함수 메모이제이션
  const handleChildClick = useCallback(() => {
    console.log('자식 버튼 클릭');
  }, []); // 의존성 배열이 비어있어 한 번만 생성

  return (
    <div>
      <h3>useCallback 사용할 때</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>부모 버튼(+)</button>
      <hr />
      <Child onClick={handleChildClick} />
    </div>
  );
}
```

### ❌ useCallback 미적용

```jsx
function UseCallbackTest_noUse() {
  const [count, setCount] = useState(0);

  // 매번 새로운 함수 생성!
  const handleChildClick = () => {
    console.log('자식 버튼 클릭');
  };

  return (
    <div>
      <h3>useCallback 사용하지 않을 때</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>부모 버튼(+)</button>
      <hr />
      <Child onClick={handleChildClick} />
    </div>
  );
}
```

---

## 🔍 동작 원리 분석

### React.memo의 역할

```jsx
const Child = React.memo(({ onClick }) => {
  // props가 이전과 같으면 리렌더링 건너뜀
  console.log('😈 Child 렌더링!');
  return <button onClick={onClick}>자식 버튼</button>;
});
```

> **React.memo**: props를 비교해서 같으면 리렌더링을 방지하는 고차 컴포넌트

### 문제 상황

```javascript
// ❌ useCallback 없이 함수를 전달하면
const handleChildClick = () => {
  console.log('자식 버튼 클릭');
};
// 매번 새로운 함수 객체가 생성됨
// React.memo가 있어도 props가 다르다고 판단 → 리렌더링 발생
```

### 해결책

```javascript
// ✅ useCallback 사용
const handleChildClick = useCallback(() => {
  console.log('자식 버튼 클릭');
}, []);
// 같은 함수 객체를 유지 → React.memo가 제대로 작동
```

---

## 🚨 useCallback을 사용하는 이유

### 발생하는 문제들

- 🔄 **함수 재생성**: 리렌더링마다 새로운 함수 객체 생성
- 💥 **불필요한 리렌더링**: 자식 컴포넌트까지 영향
- 🌀 **useEffect 오작동**: 의존성으로 함수를 사용할 때 무한 루프 가능
- 📉 **성능 저하**: 복잡한 컴포넌트 트리에서 성능 이슈

### 성능 비교

| 상황              | useCallback 미사용   | useCallback 사용     |
| ----------------- | -------------------- | -------------------- |
| **부모 리렌더링** | 자식도 함께 리렌더링 | 자식 리렌더링 방지   |
| **함수 생성**     | 매번 새로 생성       | 한 번만 생성         |
| **메모리 사용**   | 함수 객체 누적       | 최적화된 메모리 사용 |

---

## 🎯 실무 활용 패턴

### 1️⃣ 자식 컴포넌트 최적화

```jsx
// 패턴: React.memo + useCallback
const OptimizedChild = React.memo(({ onAction }) => {
  return <button onClick={onAction}>액션</button>;
});

const Parent = () => {
  const handleAction = useCallback(() => {
    // 액션 로직
  }, []);

  return <OptimizedChild onAction={handleAction} />;
};
```

### 2️⃣ 이벤트 핸들러 고정

```jsx
const Component = () => {
  const [data, setData] = useState([]);

  const handleSubmit = useCallback((formData) => {
    // API 호출 등 비즈니스 로직
    console.log('제출:', formData);
  }, []); // 한 번만 생성

  return <Form onSubmit={handleSubmit} />;
};
```

### 3️⃣ useEffect와 함께 사용

```jsx
const Component = () => {
  const [id, setId] = useState(1);

  const fetchData = useCallback(async () => {
    const response = await api.getData(id);
    // 데이터 처리
  }, [id]); // id가 변할 때만 새로 생성

  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData가 변하지 않으면 재실행 안 됨
};
```

---

## ⚖️ 장점과 단점

### 🟢 장점

- 🚀 **성능 개선**: 불필요한 리렌더링 방지
- 🔧 **함수 재생성 방지**: 메모리 효율성 향상
- 🎯 **예측 가능한 동작**: useEffect 무한 루프 방지

### 🔴 단점

- 📝 **코드 복잡성**: 남용 시 가독성 저하
- 🧠 **메모리 오버헤드**: 불필요한 사용 시 메모리 낭비
- 🤔 **학습 곡선**: 올바른 사용법 숙지 필요

---

## 💡 사용 가이드라인

### ✅ 사용해야 하는 경우

- 자식 컴포넌트에 함수를 props로 전달할 때
- useEffect의 의존성 배열에 함수를 넣을 때
- 복잡한 연산이 포함된 함수일 때
- 성능이 중요한 컴포넌트에서

### ❌ 사용하지 않아도 되는 경우

- 단순한 이벤트 핸들러 (onClick 등)
- 컴포넌트 내부에서만 사용하는 함수
- props로 전달하지 않는 함수
- 의존성이 자주 변하는 함수

## 🎪 마무리

**핵심 패턴: React.memo + useCallback**

```jsx
// 최적화된 컴포넌트 패턴
const OptimizedComponent = React.memo(({ onAction, data }) => {
  return <div onClick={onAction}>{data}</div>;
});

const ParentComponent = () => {
  const stableHandler = useCallback(() => {
    // 안정적인 함수 참조
  }, []);

  return <OptimizedComponent onAction={stableHandler} />;
};
```

이 패턴으로 React 애플리케이션의 성능을 효과적으로 최적화할 수 있습니다! 🚀
