# [Day59] 25.08.07 배운 내용 정리

---

## 🔍 HTTP Methods (RESTful API)

| Method   | 기능        | 설명                     |
| -------- | ----------- | ------------------------ |
| `GET`    | 조회 / 출력 | 서버에서 데이터 가져오기 |
| `POST`   | 생성 / 입력 | 새 데이터 추가           |
| `PUT`    | 전체 수정   | 기존 데이터 전체 교체    |
| `PATCH`  | 부분 수정   | 기존 데이터 일부만 수정  |
| `DELETE` | 삭제        | 데이터 삭제              |

> **PUT vs PATCH**
>
> - **PUT**: 목록을 전체 바꾸는 것
> - **PATCH**: 일부 필드만 수정

---

## 🚀 Next.js API Routes

- **파일 기반 라우팅** 시스템
- `pages/api/` 또는 `app/api/` 포바의 파일 개념 = API Endpoint

```
pages/api/
  ├── hello.js        → /api/hello
  ├── users/
  │   ├── index.js    → /api/users
  │   └── [id].js     → /api/users/:id (동적 라우팅)
  └── products.js     → /api/products
```

### API Handler 함수

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // req: 요청 객체 (request)
  // res: 응답 객체 (response)
  res.status(200).json({ name: 'John Doe' });
}
```

**핵심 포인트**:

- 함수명은 자유롭게 변경 가능 (handler, createPost, getUserList 등)
- `export default`는 필수! (해당 파일의 기본 내보내기)
- 실무에서는 기능에 맞는 명확한 함수명 사용 권장

```js
export default function createPost(req, res) { /* 게시물 생성 */ }
export default function getUserList(req, res) { /* 사용자 목록 조회 */ }
```

---

## 🛡️ 환경변수 (.env 파일)

> **보안과 환경 분리**를 위한 필수 도구

### 파일 종류별 우선순위

1. `.env.local` (로컬 개발환경 - 최우선)
2. `.env.production` (배포환경)
3. `.env` (모든 환경 공통)

### NEXT_PUBLIC 접두사의 의미

```bash
# 서버에서만 접근 가능 (안전)
MONGODB_URI=mongodb+srv://<유저명>:<비밀번호>@<클러스터주소>/<데이터베이스명>
SECRET_KEY=my-secret-key

# 브라우저에서도 접근 가능 (공개됨)
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=MyApp
```

**⚠️ 주의**:

- `NEXT_PUBLIC_` 가 있으면 브라우저가 추출 가능
- DB, SECRET 정보에 는 사용 금지

### 사용 이유

```js
// ❌ 하드코딩 (보안 위험)
const dbUrl = 'mongodb://user:password@cluster.mongodb.net/mydb';

// ✅ 환경변수 사용 (안전)
const dbUrl = process.env.DATABASE_URL;
```

---

## 🧰 MongoDB 연결 및 CRUD 작업

### 기본 연결 패턴

```js
import clientPromise from '@/lib/mongo';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('my-shop');
    const result = await db.collection('products').find().toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: '서버 오류' });
  }
}
```

**MongoDB 특징**:

- 스키마가 없는 NoSQL 데이터베이스
- 데이터베이스나 컬렉션이 없으면 자동 생성
- 첫 번째 데이터 삽입 시 컬렉션이 실제로 생성됨

### 주요 MongoDB 메서드

```js
// 조회
.find()           // 모든 문서 조회
.findOne()        // 하나의 문서 조회
.find({}).toArray() // 결과를 배열로 변환

// 삽입
.insertOne({})    // 문서 하나 삽입
.insertMany([{}]) // 여러 문서 삽입

// 수정
.updateOne()      // 문서 하나 수정
.updateMany()     // 여러 문서 수정

// 삭제
.deleteOne()      // 문서 하나 삭제
.deleteMany()     // 여러 문서 삭제
```

---

## ➕ POST 요청 실습

### 1. HTML 폼 (클라이언트)

```jsx
<form action='/api/products' method='POST'>
  <input name='title' />
  <input name='price' />
  <button type='submit'>상품 추가</button>
</form>
```

### 2. API 핸들러 (서버)

```js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, price } = req.body;

    if (!title || !price) {
      return res.status(400).json({ error: '필수 항목 누락' });
    }

    const client = await clientPromise;
    const db = client.db('my-shop');
    const result = await db.collection('products').insertOne({
      title,
      price: Number(price),
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: '등록 성공',
      productId: result.insertedId,
    });
  }
}
```

**핵심 개념**:

- HTML form의 `name` 속성이 `req.body`의 키가 됨
- `req.body.title`, `req.body.price`로 접근 가능
- 구조분해할당: `const { title, price } = req.body`

---

## 🌐 Next.js Link 컴포넌트 (CSR vs SSR)

### 전통적인 방식 vs Next.js 방식

```jsx
// 전통적인 방식 (페이지 새로고침)
<a href="/products">상품 목록</a>

// Next.js 방식 (SPA 라우팅)
import Link from 'next/link';

<Link href="/products">
  <span>상품 목록</span>
</Link>

// Next.js 13+ (App Router)
<Link href="/products">상품 목록</Link>
```

### CSR (Client-Side Rendering)의 장점

1. **빠른 네비게이션**: 페이지 새로고침 없음
2. **상태 유지**: JavaScript 변수, 컴포넌트 상태 보존
3. **부드러운 UX**: 로딩 시간 단축
4. **자동 프리페칭**: 링크가 화면에 보이면 미리 로드

---

## ⚡️ 관리 패턴 정리

### 1. 에러 처리 패턴

```js
try {
  // 작업
} catch (error) {
  res.status(500).json({
    error: process.env.NODE_ENV === 'development' ? error.message : '서버 오류가 발생했습니다.',
  });
}
```

### 2. 환경별 설정

```js
// lib/config.js
const config = {
  development: { dbName: 'my-shop-dev' },
  production: { dbName: 'my-shop-prod' },
};
export default config[process.env.NODE_ENV || 'development'];
```

### 3. API 응답 표준화

```js
// 성공
res.status(200).json({
  success: true,
  data: result,
  message: '조회 성공',
});

// 실패
res.status(400).json({
  success: false,
  error: '잘못된 요청',
});
```

---
