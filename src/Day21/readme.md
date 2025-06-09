# [Day21] 25.06.09 배운 내용 정리

---

## 📌 React 설치 및 프로젝트 생성

### ✅ Node.js 설치

> [Node.js 홈페이지](https://nodejs.org/ko/download)
>
> > - **LTS 버전**으로 다운로드

### ✅ 프로젝트 생성

1. 터미널 오픈
2. 생성하려는 디렉토리로 이동  
   `cd [이동을 원하는 경로]`
3. Node.js와 Vite를 사용하여 React 프로젝트 생성
   ```bash
   npm create vite@latest [프로젝트이름] -- --template react
   ```
   - `npm create vite@latest` : 최신 vite 실행
   - `[프로젝트이름]` : 새 프로젝트 이름
   - `-- --template react` : React 템플릿 적용
4. 생성된 프로젝트로 이동  
   `cd [프로젝트이름]`
5. 의존성 설치  
   `npm install`
6. 개발 서버 실행  
   `npm run dev`

---

## 🔍 React란?

- **SPA (Single Page Application)** 방식

### 📄 SPA란?

> Single Page Application 의 약자

- 하나의 HTML 페이지와 애플리케이션 실행에 필요한 JS와 CSS같은 모든 자산을 로드하는 애플리케이션
- 페이지 또는 후속 페이지의 상호작용은 서버로부터 새로운 페이지를 불러오지 않으므로 페이지가 다시 로드되지 않는다.

### 🔸 UI란?

- 사용자와 컴퓨터 간의 **상호작용을 위한 화면 요소**
- 예: 버튼, 입력창, 메뉴 등

---

## 🧱 JSX & 컴포넌트

### ✅ JSX (JavaScript XML)

- 자바스크립트 안에서 HTML처럼 사용하는 **확장 문법**
- React DOM은 `HTML 어트리뷰트(attribute)` 이름 대신 `캐멀케이스(camelCase)`를 네이밍 컨벤션으로 사용
  - 예 : `class` -> `className`

### ✅ 컴포넌트

- UI의 독립적인 블럭
- **작고 재사용 가능한 단위**
- 컴포넌트는 기능별로 나눌 수 있으며 다른 컴포넌트 안에서 사용 가능

#### 👾 props

- 컴포넌트의 입력값
- 부모 컴포넌트로부터 자식 컴포넌트로 전달된 데이터
- `props`는 **읽기 전용!!** 어떤 방식으로든 수정해서는 안됨

**📌 React props 종류**

| 분류     | 예시                          | 설명                        |
| -------- | ----------------------------- | --------------------------- |
| 기본형   | `string`, `number`, `boolean` | 텍스트, 숫자, true/false 등 |
| 객체     | `{ user: { name, age } }`     | 여러 데이터 묶음            |
| 배열     | `[1, 2, 3]`                   | 리스트 형태 데이터 전달     |
| 함수     | `() => {}`                    | 콜백 함수                   |
| children | `<Component>내용</Component>` | 자식 요소 받기              |
| 기본값   | `props = default`             | 값이 없을 때 기본값 설정    |
| 기타     | `...rest`                     | 나머지 props 모두 받기      |

### ✅ Fragment (`<></>`)

- 여러 컴포넌트를 하나로 묶을 때 사용
- **추가적인 DOM 노드를 생성하지 않음**

---

## 🗂️ React 프로젝트 구조

```
📁 project/
├── index.html        # SPA 진입점
├── vite.config.js    # Vite 설정
├── package.json      # 프로젝트 정보 및 의존성
├── node_modules/     # 설치된 라이브러리
└── src/              # 실제 작업 영역
    ├── main.jsx      # React 진입점
    └── App.jsx       # 메인 화면 컴포넌트
```

### 📌 실행 순서

1. `index.html` 로딩
2. `<div id="root">` → React가 렌더링할 위치
3. `main.jsx` → `createRoot()` 실행
4. `App.jsx` → 실제 화면 구성

📌 **주의사항**

- 컴포넌트 이름은 **반드시 대문자**로 시작해야 함

---

## Vite

### 🚀 Vite 란?

- Vite는 모던 웹 개발을 위한 초고속 빌드 도구
- ES 모듈(ESM)을 기반으로 하며, 빠른 개발 환경과 최적화된 빌드를 제공
- [Vite 공식 페이지](https://ko.vite.dev/guide/)

#### Vite vs Create React App(CRA) 차이

| 항목                | Vite 🔥                        | CRA (Create React App) 🧰      |
| ------------------- | ------------------------------ | ------------------------------ |
| **개발 서버 속도**  | 매우 빠름 (즉시 시작)          | 느림 (전체 번들링 필요)        |
| **번들링 도구**     | ESBuild (Go로 작성, 매우 빠름) | Webpack (느림)                 |
| **핫 리로드 (HMR)** | 즉각적, 거의 지연 없음         | 다소 느림                      |
| **설정 접근성**     | 쉽고 유연 (vite.config.js)     | 숨겨짐 (`eject`해야 수정 가능) |
| **최초 빌드 속도**  | 빠름                           | 느림                           |
| **코드 스플리팅**   | 기본 제공                      | 설정 필요                      |
| **플러그인 시스템** | 가볍고 단순                    | 복잡한 Webpack 기반            |
| **출시 시점**       | 비교적 최신 (2020\~)           | 오래됨 (2016\~)                |

---

#### 정리할 때 참고한 사이트

[React 공식 홈페이지](https://ko.legacy.reactjs.org/docs/glossary.html)
