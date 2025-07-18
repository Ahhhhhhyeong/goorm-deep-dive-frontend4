# [Day50] 25.07.18 배운 내용 정리

---

1. [커스텀 훅](#커스텀-훅custom-hook)
2. [커스텀 훅 + 데이터 패치](#-커스텀-훅과-데이터-페칭-학습-정리)
3. [리엑트 쿼리](#react-query)

---

# 🎣 커스텀 훅(Custom Hook)

## 📝 커스텀 훅이란?

> 커스텀 훅은 컴포넌트 간에 상태 로직이나 사이드 이펙트 로직을 재사용하기 위한 React의 기능

### 주요 특징

- **use**로 시작하는 이름을 가진다
- 직접 상태관리 로직을 만들어 재사용할 수 있다
- 여러 컴포넌트에서 비슷한 로직을 공유할 때 사용한다

## 🔧 핵심 개념들

### 리팩토링 (Refactoring)

- 기능을 그대로 유지하면서 코드를 더 읽기 쉽고 재사용 가능하게 정리하는 것
- 기능은 동일하지만 코드는 더 짧고 읽기 쉽고, 유지보수도 쉬워진다

### 사이드 이펙트 (Side Effect)

- 컴포넌트가 렌더링 외에 다른 상태를 변경하는 행위
- 부수적인 일(화면을 그리는 일 제외)
- **사이드 이펙트는 무조건 useEffect 안에서 처리**해야 한다

## 📋 커스텀 훅을 나누는 기준

1. **중복된 로직 반복**: 여러 컴포넌트가 같은 (useState, useEffect, fetch)를 쓰고 있다면 분리 대상
2. **하나의 책임을 가지는 상태 묶음**
3. **사이드 이펙트 관리**: 외부 API호출, 이벤트 리스너 등록 등
4. **계산, 변환, 필터링 로직**을 외부로 재사용을 확보
5. **react-query, swiper, form** 등의 훅을 래핑해서 커스텀 제어

## 🛠️ 실습한 커스텀 훅들

### 1. useToggle

```jsx
// 토글의 초기값을 설정하는 것으로 initial = false
export default function UseToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
```

**용도**: 켜짐/꺼짐 상태를 쉽게 토글할 때 사용

### 2. useInput

```jsx
export default function useInput(initial = '') {
  const [value, setValue] = useState(initial);
  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');
  return { value, onChange, reset };
}
```

**용도**:

- 간단하게 값만 관리할 때 useInput 사용
- 여러 필드 관리 + 유효성 검사 + 제출이 필요할 때는 useForm 사용

### 3. useDebounce

```jsx
export default function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
    // 타이핑 도중 clearTimeout()으로 이전 타이머를 취소
    // 계속 기다렸다가 마지막 값만 적용
  }, [value, delay]);

  return debounced;
}
```

**용도**:

- 입력값이 짧은 시간에 계속 바뀌는 걸 잠시 기다렸다가 반영
- 검색창, 자동완성, API요청에 최적화

### 4. useWindowSize

```jsx
export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

**용도**:

- 화면 크기를 실시간으로 감지
- 모바일, 태블릿, PC 구별할 때 주로 사용
- 실무에서 자주 사용하는 커스텀 훅

---

# 🧩 커스텀 훅과 데이터 페칭

## 📊 데이터 페칭 커스텀 훅

### useUser 커스텀 훅

> API에서 사용자 데이터를 가져오는 로직을 재사용 가능한 형태로 만든 커스텀 훅

```jsx
export default function useUser(userId = 1) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}
```

### 주요 특징

- **상태 관리**: `user` 데이터와 `loading` 상태를 함께 관리
- **사이드 이펙트**: API 호출을 useEffect 내에서 처리
- **매개변수**: `userId`를 받아서 동적으로 다른 사용자 정보 조회 가능
- **에러 처리**: catch를 통한 기본적인 에러 핸들링
- **로딩 상태**: finally를 통해 완료 시 로딩 상태 해제

---

## ⚒️ React Query 전역 설정

### QueryClient 설정

> 리액트 쿼리를 프로젝트 전체에서 사용할 수 있도록 전역 설정을 진행합니다.

```jsx
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* 개발도구!! 처음에는 닫힌상태로 시작! */}
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
```

### 🔧 핵심 개념

- **QueryClient**: 리액트 쿼리의 모든 동작을 한 곳(중앙)에서 관리하는 클라이언트
- **QueryClientProvider**: 프로젝트 전체에서 React Query를 사용할 수 있도록 하는 Provider
- **ReactQueryDevtools**: 개발 시 쿼리 상태를 확인할 수 있는 개발도구
  - `initialIsOpen={false}`: 처음에는 닫힌 상태로 시작

### 기존 방식 vs React Query

- **기존 방식**: 직접 fetch API 사용 + useState/useEffect로 상태 관리
- **React Query**: 캐싱, 에러 처리, 로딩 상태 등을 자동으로 관리

### 데이터 페칭 패턴

1. **로딩 상태 관리**: 데이터를 불러오는 동안의 UI 처리
2. **에러 처리**: API 호출 실패 시 대응
3. **의존성 배열**: userId 변경 시 새로운 데이터 페칭
4. **cleanup**: useEffect의 의존성을 통한 적절한 재실행

### 실무 적용점

- API 호출 로직을 커스텀 훅으로 분리하여 재사용성 향상
- 로딩과 에러 상태를 일관되게 처리
- React Query 도입 시 더 강력한 데이터 관리 가능

---

# React Query

## 🚀 React Query 기본 사용법

### 1. 기본적인 데이터 페칭 (ReactHook1)

```jsx
async function fetchUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/5`);
  return await res.json();
}

export default function ReactHook1() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'], // 고유 ID
    queryFn: fetchUser, // 실제 데이터를 가지고오는 함수
  });

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러 발생!!!</p>;

  return (
    <div className='box'>
      <h3>🤭 유저정보</h3>
      <p>이름 : {data.name}</p>
      <p>이메일 : {data.email}</p>
    </div>
  );
}
```

### 🔥 버전별 문법 차이

- **v5 미만**: `useQuery(['user'], fetchUser)`
- **v5 이상**: `useQuery({ queryKey: ['user'], queryFn: fetchUser })`

## 🎛️ 수동 요청 제어

### 2. 자동 실행 비활성화 (ReactHook2)

```jsx
export default function ReactHook2() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: refetchUser,
    enabled: false, // ⭐ 처음에는 자동 실행되지 않음
  });

  return (
    <div className='box'>
      <h3>❌ 수동제어로 불러오기 실패</h3>
      <p>하지만 자동으로 데이터 안들고왔쥬</p>
      <button onClick={() => refetchUser()}>❌ 잘못된 방법</button>
    </div>
  );
}
```

### 3. 올바른 수동 요청 (ReactHook2_2)

```jsx
export default function ReactHook2_2() {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: refetchUser,
    enabled: false,
  });

  return (
    <div className='box'>
      <h3>✅ 사용자 정보 수동 불러오기</h3>
      <button onClick={() => refetch()}>
        {' '}
        {/* ⭐ refetch 사용 */}
        {isFetching ? '불러오는 중...' : '불러오기'}
      </button>
      {isError && <p>에러발생!!</p>}
      {data && (
        <div>
          <p>이름 : {data.name}</p>
          <p>이메일 : {data.email}</p>
        </div>
      )}
    </div>
  );
}
```

#### 실행 순서

1. 컴포넌트가 마운트되어도 API요청은 자동으로 실행되지 않음
2. 버튼 클릭 시 `refetch()` 실행
3. `fetchUser()` 함수가 호출되어 데이터 가져오기
4. 로딩 중일 땐 '불러오는 중...'으로 버튼 텍스트 변경
5. 데이터 도착 시 화면에 name, email 표시

## ⏰ 고급 옵션: staleTime과 데이터 선택

### 4. staleTime 및 데이터 변환 (ReactHook3)

```jsx
export default function ReactHook3({ id = '5' }) {
  const MINUTE = 1000 * 60; // ⭐ 상수로 시간 관리

  const {
    data: userName,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: refetchUser,

    /* ⭐ 고급 옵션들 */
    staleTime: MINUTE * 5, // 5분간 데이터를 신선하게 유지
    refetchOnWindowFocus: true, // 창 포커스 시 재요청
    select: (data) => data.name, // 데이터 일부만 선택
  });

  return (
    <div className='box'>
      <h3>⏰ staleTime 실습</h3>
      {userName && <p>{userName}</p>}
    </div>
  );
}
```

## 📊 주요 개념 정리

### staleTime 이해하기

- **기본값**: 0 (fetch 이후 즉시 stale 상태)
- **동작**: 지정된 시간 동안 데이터를 "신선한" 상태로 유지
- **재요청 조건**: 탭 포커스 변경, 네트워크 재연결, 컴포넌트 재마운트

### 시간 관리 베스트 프랙티스

```jsx
// ❌ 나쁜 예시
staleTime: 300000; // 몇 분인지 알기 어려움

// ⭐ 좋은 예시
const MINUTE = 1000 * 60;
staleTime: MINUTE * 5; // 5분으로 명확함
```

### 실무 활용 예시

- **실시간 데이터** (알림): `staleTime` 짧게
- **변경이 적은 데이터** (마이페이지): `staleTime` 길게
- **뉴스 피드**: 일정 시간마다 갱신

## 🛠️ 개발 도구 설정

### React Query Devtools

```bash
npm install @tanstack/react-query-devtools
```

- 개발 중 Query 상태를 시각적으로 확인
- 디버깅에 매우 유용한 도구
- main.jsx에서 Provider와 함께 설정 필요

## 💡 주요 포인트

1. **enabled: false**로 자동 실행 제어 가능
2. **refetch()** 함수로 수동 재요청
3. **select** 옵션으로 필요한 데이터만 추출
4. **staleTime**으로 캐싱 전략 설정
5. **상수 활용**으로 시간 관리의 가독성 향상
