# [Day27] 25.06.17 배운 내용 정리

---

---

## 📡 Axios

- HTTP 요청을 보내기 위한 JavaScript 라이브러리
- 요청 성공 시: `.then()`
- 요청 실패 시: `.catch()`

### ✅ REST API 기본 메서드

| 메서드 | 설명        |
| ------ | ----------- |
| GET    | 데이터 조회 |
| POST   | 데이터 생성 |
| PUT    | 데이터 수정 |
| DELETE | 데이터 삭제 |

### 🔁 Axios vs Fetch

| 항목      | Axios              | Fetch                      |
| --------- | ------------------ | -------------------------- |
| 응답 처리 | 자동으로 JSON 파싱 | 직접 `.json()` 처리해야 함 |
| 에러 처리 | 자동               | 직접 try-catch 필요        |
| 코드 구조 | 간결               | 상대적으로 복잡            |
| 반환 값   | `Promise`          | `Promise`                  |

> 요즘은 `async/await`를 사용하는 방식이 일반적입니다.

---

## ⚛️ React Query

- 실무에서 `axios`보다 강력한 **비동기 상태 관리 도구**
- 서버 상태를 간편하게 캐싱하고 동기화할 수 있음
- 설치:
  ```bash
  npm install @tanstack/react-query
  ```
  > (※ ReactQuery는 깊이 다루지 않음)

---

## 🔍 크롤링(Crawling)

- 웹사이트의 **HTML 구조를 분석하여 데이터 자동 수집**하는 기술
- 예: 뉴스 제목, 상품 가격, 영화 순위, 이미지 등 추출 가능
- **프론트엔드(React)에서는 직접적인 크롤링 불가** → 보안 정책(CORS) 때문

### 📛 CORS (Cross-Origin Resource Sharing)

- 다른 출처(origin) 간의 리소스 요청 제한
- 출처 = 프로토콜 + 도메인 + 포트
  - 예: `http://localhost:5173`

---

## 🛠️ Express (서버 구축용 백엔드 프레임워크)

- Node.js 환경에서 가장 널리 사용됨
- 서버를 쉽고 빠르게 구축할 수 있음

### 💡 크롤링 보조 라이브러리

- `Puppeteer`: 브라우저를 실제로 띄워 크롤링 가능
- `Cheerio`: jQuery처럼 HTML 파싱 가능 (Puppeteer보다 가볍고 빠름)

### 🧾 Express 서버 예제 (server.js)

```js
// Express Server Config
/**
 * require : 옛날 JS 문법 (CommonJS).
 * vite 프로젝트에서 사용 시 package.json에서 "type": "module" 삭제 필요.
 * import/export 문법과 혼용 불가.
 */
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express(); // 앱 인스턴스 생성
const port = 5000;

// 모든 요청 허용 (주의: 실제 운영 시 보안 설정 필수!)
app.use(cors());

// GET 요청 응답 예시
app.get('/api/hello', (req, res) => {
  res.json({ message: 'hi Express Server' });
});

// 네이버 페이지 크롤링 예제
app.get('/api/naver', async (req, res) => {
  try {
    const response = await axios.get('https://www.naver.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });
    console.log(response);
    res.json(response.data);
  } catch (e) {
    console.error(`❌error: ${e}`);
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 동작합니다. http://localhost:${port}`);
});
```
