# [Day52] 25.07.24 배운 내용 정리

---

## 📋 학습 요약

- React 컴포넌트 테스트 (단위 테스트 vs 통합 테스트)
- 커스텀 훅 개발 및 테스트
- Testing Library를 활용한 사용자 중심 테스트
- BDD(Behavior-Driven Development) 스타일 테스트 작성

---

## 🧪 테스트의 기본 개념

### test() vs it() 차이점

| 구분       | test()          | it()                    |
| ---------- | --------------- | ----------------------- |
| **용도**   | 단위 테스트     | 통합 테스트             |
| **범위**   | 개별 기능 단위  | 여러 컴포넌트 상호작용  |
| **스타일** | 직관적 테스트명 | BDD 스타일 서술형       |
| **그룹화** | 독립 실행       | describe 블록 내 그룹화 |

```js
// 단위 테스트 예시
test('할 일 추가 기능', () => {
  // 특정 기능만 테스트
});

// 통합 테스트 예시
describe('Todo 앱 전체 기능', () => {
  it('사용자가 할 일을 추가하고 완료 처리하는 전체 플로우를 성공적으로 수행한다', () => {
    // 전체 시나리오 테스트
  });
});
```

### userEvent vs fireEvent

```js
// userEvent - 권장 방식
const user = userEvent.setup();
await user.type(input, '테스트 할 일');
await user.click(button);
```

**userEvent의 장점:**

- 실제 사용자 행동과 유사한 이벤트 시뮬레이션
- 복잡한 이벤트 체인 자동 처리
- 더 현실적인 테스트 환경 제공

---

## 🎯 Todo App 구조 분석

### 기본 Todo App 구현

- **컴포넌트**: 할 일 표시 및 상태 토글 UI
- **커스텀 훅**: 상태 관리 로직 분리 (`useTodo`)
- **테스트**: 사용자 시나리오 검증

### 고급 기능 (검색 기능 포함)

- **TaskInputWithSearch**: 할 일 추가 + 검색 기능 통합 컴포넌트
- **useInputWithSearch**: 입력과 검색 상태를 동시 관리하는 커스텀 훅
- **Props 기반 통신**: 부모-자식 컴포넌트 간 데이터 흐름

---

## 🔧 커스텀 훅 개발 및 테스트

### useInputWithSearch 훅 구조

```js
export function useInputWithSearch() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);  // 실시간 검색을 위한 동기화
  };

  const resetInput = () => {
    setInputValue('');
    setSearchTerm('');
  };

  return { inputValue, searchTerm, handleInputChange, resetInput, ... };
}
```

### 커스텀 훅 테스트 핵심 도구

#### 1. renderHook()

```js
const { result } = renderHook(() => useInputWithSearch());
```

- **목적**: 컴포넌트 없이 훅만 독립적으로 테스트
- **필요성**: 훅은 컴포넌트 내에서만 동작하므로 가상 환경 필요

#### 2. act()

```js
act(() => {
  result.current.handleInputChange({ target: { value: 'react' } });
});
```

- **목적**: 상태 변경을 안전하게 처리
- **이유**: React의 비동기 상태 업데이트 완료까지 대기

#### 3. beforeEach()

```js
beforeEach(() => {
  ({ result } = renderHook(() => useInputWithSearch()));
});
```

- **목적**: 각 테스트 실행 전 초기 설정
- **장점**: 테스트 간 격리 보장 및 코드 중복 제거

---

## 📝 BDD (Behavior-Driven Development) 스타일

### 자연어에 가까운 테스트 작성

```js
describe('✅ useInputWithSearch 커스텀 훅', () => {
  it('초기값이 빈 문자열로 설정되어야 한다', () => {
    expect(result.current.inputValue).toBe('');
    expect(result.current.searchTerm).toBe('');
  });

  it('사용자가 입력하면 검색어도 함께 업데이트되어야 한다', () => {
    act(() => {
      result.current.handleInputChange({ target: { value: 'react' } });
    });

    expect(result.current.inputValue).toBe('react');
    expect(result.current.searchTerm).toBe('react');
  });
});
```

### BDD의 특징

- **사용자 중심**: 기술 구현보다 사용자 행동에 집중
- **가독성**: 비개발자도 이해 가능한 명확한 설명
- **구조화**: describe-it으로 논리적 그룹화

---

## ⚠️ 주요 에러 및 해결방법

### 1. ReferenceError: expect is not defined

- **원인**: Vitest 전역 설정 누락
- **해결**: `vite.config.js`에서 globals 설정 추가

### 2. Could not determine window of node

- **원인**: jsdom과 userEvent 연결 문제
- **해결**: `userEvent.setup()` 사용

---

## 🎯 핵심 학습 포인트

### 1. 설계 원칙

- **단일 책임**: 각 함수/컴포넌트의 명확한 역할 분리
- **재사용성**: 커스텀 훅으로 로직 추상화
- **접근성**: aria-label 등으로 스크린 리더 지원

### 2. 테스트 전략

- **단위 테스트**: 개별 기능의 독립적 검증
- **통합 테스트**: 컴포넌트 간 상호작용 검증
- **사용자 시나리오**: 실제 사용 흐름과 유사한 테스트

### 3. 개발 효율성

- **에러 해결**: 설정 파일 수정과 라이브러리 올바른 사용
- **코드 품질**: 테스트를 통한 안정성 확보
- **유지보수**: 명확한 테스트 케이스로 코드 변경 시 안전성 보장

---
