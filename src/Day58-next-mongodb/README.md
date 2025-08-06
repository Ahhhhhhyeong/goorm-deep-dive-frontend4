# \[Day58] 25.08.06 MongoDB 학습 정리

---

## 📌 MongoDB란?

- NoSQL 데이터베이스의 일종으로, JSON 형태의 문서(Document) 단위로 데이터를 저장
- 컬렉션(Collection)은 폴더처럼 문서들을 저장하는 단위
- 문서는 key-value 쌍으로 구성

## ✅ MongoDB를 사용하는 이유

- 기존의 RDBMS는 고정된 스키마 구조로 인해, 빠르게 변경되는 데이터를 처리하기 불편
- MongoDB는 유연한 구조로 대용량 데이터를 빠르게 저장 및 조회할 수 있음

## ⚙️ Clusters (클러스터)

- MongoDB가 설치된 서버들의 집합 (데이터 저장 및 관리)
- **분산처리** 지원:

  - 여러 사용자가 동시에 접근해도 빠른 응답
  - 장애 발생 시에도 데이터 유실 없이 복구 가능

## 💡 설치 및 설정 절차

### 1. MongoDB Atlas에서 클러스터 생성

- [MongoDB Atlas](https://cloud.mongodb.com/)에 회원가입 후 클러스터 생성

### 2. 패키지 설치

```bash
npm install mongodb
```

### 3. MongoDB 연결 유틸 생성 (`lib/mongodb.js`)

```js
import { MongoClient } from 'mongodb';

const DB_URL = process.env.DB_DEV_URL;
const client = new MongoClient(DB_URL);
const clientPromise = client.connect();

export default clientPromise;
```

### 4. 환경변수 설정 (`.env.local`)

```env
DB_DEV_URL=mongodb+srv://<username>:<userpassword>@<clustername>.mongodb.net/?retryWrites=true&w=majority&appName=<clustername>
```

### 5. API Route 생성 및 MongoDB 연결 테스트 (`pages/api/testdb/route.js`)

```js
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('frontend_project');
    console.log(db);
    res.status(200).json({ message: '연결 성공' });
  } catch (error) {
    console.error('❌ ERROR: ', error);
    res.status(500).json({ message: '연결 실패' });
  }
}
```

- **주의**: 모든 IP 허용 시(`0.0.0.0/0`)는 개인 개발 시에만 사용, 기업 환경에서는 보안 문제로 금지됨

---

## 🔄 실행 흐름 정리

1. `index.js` 컴포넌트 실행
2. `useEffect()` 내부에서 API 요청 발생
3. `/api/testdb/route.js`에서 API 처리
4. `lib/mongodb.js`에서 DB 연결
5. `clientPromise`로 클라이언트 인스턴스 생성
6. `route.js`에서 DB 인스턴스를 통해 연결
7. 연결된 DB에서 데이터를 가져오거나 전송
8. JSON 응답 데이터를 `useState`로 상태 관리

---

## 📦 React에서 API 호출 컴포넌트 예시

```js
useEffect(() => {
  fetch('/api/testdb/route')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data.data || []);
    })
    .catch((err) => {
      console.error('❌ 호출 실패: ', err);
      setError(err);
    });
}, []);
```

- **주의점**:

  - 서버 사이드 실행 시 `console.log()`는 **터미널 출력**
  - 클라이언트 컴포넌트의 `console.log()`는 **브라우저 콘솔 출력**

---

## 🧠 부가 학습 내용

### ✅ 사용 라이브러리

- Node.js (백엔드): `mongoose`, `mongodb` 드라이버
- Python: `pymongo`, `mongoengine`
- 프론트엔드와 연동: REST API 또는 GraphQL API로 연결

### ✅ App Router vs Page Router (React 기준)

- React 13 이상 → App Router (`app/` 폴더 사용)

  - 컴포넌트 상단에 `"use client"` 필수

- React 12 이하 → Page Router (`pages/` 폴더 사용)

  - 자동으로 클라이언트 컴포넌트 처리

---

## 🔐 예외 처리 중요성

- DB 연결 및 CRUD 작업 중 예외 발생 가능성 높음
- 예외 발생 시 서버 오류로 앱이 중단되지 않도록 try-catch 필수

---

## 📚 참고

- MongoDB 연결은 자동으로 DB나 Collection이 없으면 생성됨
- 클러스터 내부의 DB는 프로젝트 단위로 나뉘어 생성 가능
