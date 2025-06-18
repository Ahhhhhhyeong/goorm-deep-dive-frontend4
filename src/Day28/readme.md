# [Day28] 25.06.18 배운 내용 정리

---

### 🔗 프로젝트 소개

- [day28-react](./day28-react/) : 오전에 배운 내용 실습 코드
- [day28-react-practices](./day28-react-practices/) : Tailwind CSS 실습

---

# 🌀 Tailwind CSS

## 🔧 설치 (Vite 기준)

[tailwindcss](https://tailwindcss.com/docs/installation/using-vite)

```bash
# 항상 최신 버전을 사용하겠다는 명령어
npm install tailwindcss@latest @tailwindcss/vite@latest -D
```

> 최신 버전의 Tailwind와 Vite 플러그인을 설치합니다.

## 🧩 특징

- 유틸리티 클래스 기반으로 빠르게 스타일 작성 가능
- 클래스 이름 암기가 필요하지만 생산성↑
- 초기 설정 필요

## 🎨 예제 코드

![Image](https://github.com/user-attachments/assets/d8904d9f-b7b3-498e-8f72-3a86c1f5e6cf)

```jsx
export default function TailwindCssEx() {
  return (
    <div className='bg-sky-400 text-white p-4 m-4 shadow-md'>
      <p className='font-mono text-xl'>간단한 Tailwind 예제</p>
    </div>
  );
}
```

---

# 🔥 Firebase

## 📌 개요

- 구글에서 제공하는 BaaS(Backend as a Service)
- 실시간 DB, 인증, 스토리지 등 제공
- NoSQL 기반 — 프론트엔드 개발에 적합

### 🔧 설치

```bash
npm install firebase
```

---

## 🔐 환경 변수 (.env)

Firebase 설정 정보는 보안을 위해 `.env` 파일에 저장 :

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_DATABASE_URL=...
...
```

> vite 프로젝트는 앞에 `VITE_`를 무조건 추가해주어야 프로젝트가 읽어들인다.

---

### ⚙️ Firebase 초기화 (firebase.js)

```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
```

---

## 📦 Firebase 입출력

### 📝 Firebase 데이터 입력(쓰기)

- Firebase Realtime Database에 데이터를 저장할 때는 `set()` 함수 사용
- `ref()`는 저장할 경로 지정
- `uuidv4()`를 사용하면 매번 고유한 ID를 생성하여 데이터가 중복되지 않게 저장
  - `uuid`는 외부 라이브러리라 설치가 필요함
  ```bash
  npm install uuid
  ```

#### 예제 코드

```jsx
import { useEffect } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID 생성용

export default function FirebaseWrite() {
  const userData = {
    name: '홍길동',
    email: 'hongildong@test.email',
  };

  useEffect(() => {
    const writeData = () => {
      const userId = uuidv4(); // 고유한 ID 생성
      const dbPath = ref(db, `users/${userId}`); // 저장 경로 지정

      set(dbPath, userData) // 데이터 쓰기
        .then(() => {
          console.log('✅ 데이터 저장 성공!');
        })
        .catch((e) => {
          console.error('❌ 데이터 저장 실패:', e);
        });
    };

    writeData(); // 실행
  }, []);

  return <div className='font-mono'>Firebase Write</div>;
}
```

---

### 🔎 Firebase - 데이터 출력(읽기)

- Firebase에서 데이터를 읽을 땐 `get()` 함수와 `ref()`를 함께 사용
- 반환된 값은 snapshot 객체이며, `.val()`로 실제 데이터를 추출 가능

#### 예제 코드

```jsx
import { useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';

export default function FirebaseRead() {
  useEffect(() => {
    const readData = async () => {
      const dbPath = ref(db, 'users'); // 전체 users 경로

      try {
        const snapshot = await get(dbPath); // 데이터 가져오기
        if (snapshot.exists()) {
          const data = snapshot.val(); // 실제 데이터 추출
          console.log('✅ 데이터 가져오기 성공:', data);
        } else {
          console.log('ℹ️ 데이터가 존재하지 않습니다.');
        }
      } catch (error) {
        console.error('❌ 데이터 가져오기 실패:', error);
      }
    };

    readData(); // 실행
  }, []);

  return <div className='font-mono'>Firebase Read</div>;
}
```
