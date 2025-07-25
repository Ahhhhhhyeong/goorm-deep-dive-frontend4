# [Day48] 25.07.16 배운 내용 정리

---

# 📝 React Hook Form - watch vs useWatch

## 🎯 watch() 함수

### 기본 개념
- **정의**: 모든 값이나 특정 필드 값을 실시간으로 감시하는 함수
- **용도**: 입력값을 즉시 확인하고 UI에 반영할 때 사용

### 기본 사용법
```jsx
import { useForm } from 'react-hook-form';

function App() {
  const { register, watch } = useForm();
  const name = watch('name');

  return (
    <div>
      <input type='text' {...register('name')} />
      <p>지금 입력한 이름: {name}</p>
      <button disabled={!name}>다음으로</button>
    </div>
  );
}
```

### watch()의 활용 예제
```jsx
// 비밀번호 확인 기능
const password = watch('password');
const confirm = watch('confirm');

return (
  <>
    <input type='password' {...register('password')} />
    <input type='password' {...register('confirm')} />
    {password && confirm && password !== confirm && 
      <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
    }
  </>
);
```

### ❌ watch()의 단점
- **전체 컴포넌트 리렌더링**: 입력할 때마다 전체 화면이 다시 그려짐
- **성능 저하**: 복잡한 폼에서 성능 문제 발생 가능

---

## 🎯 useWatch() 함수

### 기본 개념
- **정의**: watch()의 성능 문제를 해결한 최적화된 감시 함수
- **특징**: 특정 요소만 리렌더링하여 성능 향상

### 기본 사용법
```jsx
import { useForm, useWatch } from 'react-hook-form';

function UseWatchExample() {
  const { register, control } = useForm();
  
  // 단일 필드 감시
  const name = useWatch({ control, name: 'name' });
  
  // 다중 필드 감시
  const [email, agree] = useWatch({
    control,
    name: ['email', 'agree'],
  });

  return (
    <div>
      <input type='text' {...register('name')} />
      <p>지금 입력한 이름: {name}</p>
      
      <input type='email' {...register('email')} />
      <input type='checkbox' {...register('agree')} />
      <button disabled={!email || !agree}>다음으로</button>
    </div>
  );
}
```

### 🔑 useWatch() 핵심 포인트
- **control 필수**: `useForm()`의 `control`을 반드시 전달해야 함
- **부분 렌더링**: 해당 필드만 리렌더링되어 성능 최적화
- **다중 감시**: 배열로 여러 필드 동시 감시 가능

---

## ⚡ 성능 최적화 패턴

### 컴포넌트 분리를 통한 최적화
```jsx
// 부분 컴포넌트로 분리
function NameWatcher({ control }) {
  const name = useWatch({ control, name: 'name' });
  console.log('[NameWatcher] 리렌더링됨!'); // 이 부분만 렌더링
  
  return <p>지금 입력한 이름: {name}</p>;
}

function App() {
  const methods = useForm();
  console.log('[App] 전체 렌더링됨!'); // 입력 시 실행되지 않음
  
  return (
    <div>
      <input type='text' {...methods.register('name')} />
      <NameWatcher control={methods.control} />
    </div>
  );
}
```

---

## 📊 watch vs useWatch 비교

| 구분 | watch() | useWatch() |
|------|---------|------------|
| **렌더링 범위** | 전체 컴포넌트 | 특정 부분만 |
| **성능** | 상대적으로 낮음 | 최적화됨 |
| **사용법** | 간단함 | control 설정 필요 |
| **권장 상황** | 간단한 폼 | 복잡한 폼, 성능이 중요한 경우 |

---

## 💡 실무 활용 패턴

### 1️⃣ 실시간 입력 검증
```jsx
const email = useWatch({ control, name: 'email' });
const isValidEmail = email?.includes('@');

return (
  <>
    <input {...register('email')} />
    {email && !isValidEmail && <span>올바른 이메일 형식이 아닙니다</span>}
  </>
);
```

### 2️⃣ 조건부 UI 표시
```jsx
const userType = useWatch({ control, name: 'userType' });

return (
  <>
    <select {...register('userType')}>
      <option value="individual">개인</option>
      <option value="business">사업자</option>
    </select>
    
    {userType === 'business' && (
      <input {...register('businessNumber')} placeholder="사업자 번호" />
    )}
  </>
);
```

### 3️⃣ 다단계 폼 제어
```jsx
const [step1Complete, step2Complete] = useWatch({
  control,
  name: ['name', 'email']
});

const canProceed = step1Complete && step2Complete;

return (
  <>
    <input {...register('name')} />
    <input {...register('email')} />
    <button disabled={!canProceed}>다음 단계</button>
  </>
);
```

---

## 📋 핵심 정리

### ✅ 주요 학습 내용
1. **watch()**: 간단한 실시간 감시, 전체 리렌더링
2. **useWatch()**: 성능 최적화된 감시, 부분 리렌더링
3. **컴포넌트 분리**: 성능 최적화를 위한 구조적 접근
4. **실무 패턴**: 검증, 조건부 UI, 다단계 폼 제어

### 🎯 선택 기준
- **간단한 폼 → watch() 사용**
- **복잡한 폼, 성능 중요 → useWatch() 사용**
- **대규모 애플리케이션 → 컴포넌트 분리 + useWatch() 조합**

### 💡 성능 최적화 팁
1. **필요한 필드만 감시**하기
2. **컴포넌트 분리**로 리렌더링 범위 최소화
3. **조건부 렌더링**으로 불필요한 연산 방지
4. **debounce** 적용으로 과도한 호출 방지

---


# 🎠 Swiper 라이브러리 학습

## 🎯 Swiper 개요

### Swiper란?
- **정의**: 슬라이더 형 UI 컴포넌트 라이브러리
- **용도**: 이미지 슬라이더, 다단계 폼, 캐러셀 등 제작
- **특징**: 터치/드래그 지원, 다양한 옵션 제공

### 설치 방법
```bash
npm install swiper
```

### ⚠️ 필수 import
```jsx
import 'swiper/css'; // 반드시 포함해야 함!
import { Swiper, SwiperSlide } from 'swiper/react';
```

---

## 📖 기본 사용법

### 1️⃣ 기본 Swiper 구조
```jsx
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperTest() {
  return (
    <Swiper>
      <SwiperSlide>
        <div style={{ backgroundColor: 'aqua', padding: 30 }}>
          슬라이드 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: 'pink', padding: 30 }}>
          슬라이드 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: 'greenyellow', padding: 30 }}>
          슬라이드 3
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
```

#### 🔑 기본 구조
- **`<Swiper>`**: 전체 슬라이드를 감싸는 부모 컴포넌트
- **`<SwiperSlide>`**: 각각의 슬라이드(페이지)

#### 📝 주요 속성
- **`spaceBetween={값}`**: 슬라이드 간의 여백(px)
- **`slidesPerView={숫자}`**: 한 화면에 보여줄 슬라이드 수

---

## ⚡ 자동 재생 기능

### 2️⃣ Autoplay 모듈 사용
```jsx
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperAutoTest() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000, // 2초마다 자동 넘김
      }}
    >
      <SwiperSlide>
        <div style={{ backgroundColor: 'aqua', padding: 30 }}>슬라이드 1</div>
      </SwiperSlide>
      {/* 다른 슬라이드들... */}
    </Swiper>
  );
}
```

#### 🔑 Autoplay 옵션
- **`delay`**: 슬라이드 전환 간격(ms)
- **`disableOnInteraction`**: 사용자 조작 시 자동재생 중단 여부

---

## 🔘 페이지네이션 (점 표시)

### 3️⃣ Pagination 모듈 사용
```jsx
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination'; // 페이지네이션 CSS 추가!

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperPagination() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }} // 점 클릭으로 이동 가능
    >
      <SwiperSlide>
        <div style={{ backgroundColor: 'aqua', padding: 30 }}>슬라이드 1</div>
      </SwiperSlide>
      {/* 다른 슬라이드들... */}
    </Swiper>
  );
}
```

#### 🔑 Pagination 옵션
- **`clickable: true`**: 점을 클릭하면 해당 슬라이드로 이동
- **`type: 'bullets'`**: 기본 점 형태 (다른 옵션: progressbar, fraction)

---

## ◀️ ▶️ 네비게이션 (이전/다음 버튼)

### 4️⃣ Navigation 모듈 사용
```jsx
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation'; // 네비게이션 CSS 추가!

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperNavigationTest() {
  return (
    <Swiper 
      modules={[Navigation]} 
      navigation // 이전/다음 버튼 활성화
    >
      <SwiperSlide>
        <div style={{ backgroundColor: 'yellow', padding: 30 }}>슬라이드 1</div>
      </SwiperSlide>
      {/* 다른 슬라이드들... */}
    </Swiper>
  );
}
```

---

## 🎮 수동 제어 (useRef 활용)

### 5️⃣ Swiper 인스턴스 직접 제어
```jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SwiperPaginationTest() {
  const swiperRef = useRef(null);

  return (
    <div>
      <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)}>
        <SwiperSlide>
          <div style={{ backgroundColor: 'pink', padding: 50 }}>슬라이드1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: 'green', padding: 50 }}>슬라이드2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: 'blue', padding: 50 }}>슬라이드3</div>
        </SwiperSlide>
      </Swiper>
      
      <button onClick={() => swiperRef.current?.slideNext()}>
        👉 다음슬라이드
      </button>
      <button onClick={() => swiperRef.current?.slidePrev()}>
        👈 이전슬라이드
      </button>
    </div>
  );
}
```

#### 🔄 수동 제어 실행 순서
1. **컴포넌트 렌더링**
2. **Swiper 컴포넌트 마운트**
3. **onSwiper 콜백 실행** → `swiperRef.current`에 인스턴스 저장
4. **사용자가 버튼 클릭**
5. **onClick 이벤트 발생**
6. **`swiperRef.current.slideNext()` 실행**
7. **Swiper 내부 슬라이드 이동 (트랜지션 발생)**

#### 🎮 주요 제어 메서드
- **`slideNext()`**: 다음 슬라이드로 이동
- **`slidePrev()`**: 이전 슬라이드로 이동
- **`slideTo(index)`**: 특정 인덱스 슬라이드로 이동

---

## 🔧 모듈 조합 사용

### 여러 모듈 동시 사용
```jsx
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AdvancedSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={30}
      slidesPerView={1}
    >
      {/* 슬라이드들... */}
    </Swiper>
  );
}
```

---

## 📋 Swiper 핵심 정리

### ✅ 필수 체크리스트
1. **기본 CSS** - `import 'swiper/css'` 반드시 포함
2. **모듈별 CSS** - 사용하는 모듈의 CSS도 import 필요
3. **modules 배열** - 사용할 기능을 modules 배열에 선언
4. **구조 이해** - `<Swiper>`와 `<SwiperSlide>` 관계

### 🎨 주요 기능별 사용법

| 기능 | 모듈 | CSS import | 속성 |
|------|------|------------|------|
| 기본 | - | `swiper/css` | - |
| 자동재생 | `Autoplay` | - | `autoplay={{delay: 2000}}` |
| 페이지네이션 | `Pagination` | `swiper/css/pagination` | `pagination={{clickable: true}}` |
| 네비게이션 | `Navigation` | `swiper/css/navigation` | `navigation` |

### 💡 실무 활용 팁
1. **useRef**로 Swiper 인스턴스 제어
2. **여러 모듈 조합**으로 풍부한 기능 구현
3. **반응형 설정**으로 다양한 화면 크기 대응
4. **커스텀 스타일링**으로 브랜드에 맞는 디자인 적용

### 🔄 useRef 사용 이유
- **DOM 요소나 외부 객체 제어**를 위해 사용
- **Swiper 인스턴스를 직접 저장**하여 프로그래밍적 제어 가능
- **React 생명주기와 독립적**으로 객체 관리
