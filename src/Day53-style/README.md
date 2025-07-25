# [Day53] 25.07.25 배운 내용 정리

---

# 📝 React SCSS 학습 내용 정리

## 🎯 SCSS 개요

### SCSS란?

- **CSS의 확장문법**
- 기존 CSS 문법을 그대로 사용하면서 추가 기능 제공:
  - 변수
  - 중첩
  - 조건문
  - 반복문
  - 믹스인(Mixin)
- **확장자**: `.scss`
- 구조적이고 재사용성 높은 스타일 작성 가능

### 왜 SCSS를 사용하는가?

- **기존 CSS의 문제점**: 대규모 프로젝트에서 반복적 코드가 많아져 유지보수가 어려움
- **SCSS의 장점**: 변수, 중첩, 함수 사용으로 더 깔끔하고 유지보수하기 쉬운 코드 작성

## 🔍 SCSS vs SASS

| 구분   | SCSS                                      | SASS                               |
| ------ | ----------------------------------------- | ---------------------------------- |
| 확장자 | `.scss`                                   | `.sass`                            |
| 문법   | 중괄호 `{}`, 세미콜론 `;` 사용            | 들여쓰기 기반, 중괄호와 세미콜론 X |
| 순서   | SASS 이후 CSS에 익숙한 사람들을 위해 등장 | 먼저 출시                          |

> 💡 **React에서는 SCSS를 더 선호**

## ⚙️ 설치 방법

```bash
npm install -D sass
```

---

## 📖 주요 기능 실습

### 1️⃣ 기본 변수 사용

```scss
$title-color: orange;

.title {
  color: $title-color;
}
```

### 2️⃣ 모듈 방식 & 중첩 구문

```jsx
import styles from '../assets/scss/ScssTest2.module.scss';
// 사용: className={styles.card}
```

```scss
.card {
  background-color: white;
  h2 {
    font-size: 2rem;
  }
  p {
    color: gray;
  }
}
```

#### 🔑 모듈 방식 특징

- **파일명**: `파일명.module.scss`
- **사용 방식**: `styles.클래스명`
- **장점**: 클래스명 충돌 방지, 안전한 사용

### 3️⃣ Mixin 사용

```scss
@mixin button-style($bg-color) {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: $bg-color;

  &:hover {
    opacity: 0.5;
  }
}

.primary {
  @include button-style(#3498db);
}
```

#### 🔑 Mixin & & 기호

- **Mixin**: 재사용 가능한 스타일 블록 (JavaScript 함수와 유사)
- **& 기호**: 부모 셀렉터 참조 (`&:hover`는 부모의 hover 상태)

---

## 🎯 동적 클래스 적용

### 조건부 클래스 적용 패턴

```jsx
const [isActive, setIsActive] = useState(false);
const [darkMode, setDarkMode] = useState(true);

// 패턴 1: 삼항 연산자
<div className={`${styles.box} ${isActive ? styles.active : ''}`}>

// 패턴 2: 변수 저장
const className = darkMode ? `${styles.card} ${styles.dark}` : styles.card;
<div className={className}>
```

#### 💡 동적 클래스 적용 패턴

1. **삼항 연산자**: `${조건 ? styles.클래스명 : ''}`
2. **변수 저장**: 복잡한 조건은 변수에 저장
3. **템플릿 리터럴**: 여러 클래스 조합

---

## 🔄 SCSS 상속 (Extend)

```scss
.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  border: none;
}

.btnPrimary {
  @extend .btn;
  background-color: #3498db;
  color: white;
}
```

#### 🔑 상속 주요 개념

- **정의**: 기존 클래스 스타일을 상속받아 확장
- **문법**: `@extend 클래스명`
- **주의**: 모듈에서 하이픈(-) 사용 시 `camelCase` 권장

---

## 🎨 SCSS 파일 구조 관리

### 📁 파일 분리 패턴

```
scss/
├── _reset.scss        // 리셋 스타일
├── _variables.scss    // 변수 모음
├── _mixins.scss       // 믹스인 모음
└── index.scss         // 전체 import
```

#### 🔑 언더바(\_) 파일

- **특징**: CSS로 컴파일되지 않음
- **용도**: 기능별 파일 분리 후 한곳에서 import

---

## 🔀 SCSS 제어문

### 조건문과 반복문

```scss
$theme: dark;

.box {
  padding: 2rem;

  @if $theme == light {
    background-color: white;
  } @else if $theme == dark {
    background-color: #111;
  }
}

// 반복문으로 여러 클래스 생성
@for $num from 1 through 5 {
  .box-#{$num} {
    width: 3rem * $num;
    height: 3rem;
  }
}
```

#### 🔑 제어문 종류

| 제어문  | 용도           | 문법                           |
| ------- | -------------- | ------------------------------ |
| `@if`   | 조건부 스타일  | `@if 조건 { } @else { }`       |
| `@for`  | 숫자 반복      | `@for $i from 1 through 5 { }` |
| `@each` | 리스트/맵 반복 | `@each $item in $list { }`     |

#### 💡 문자열 보간

- **문법**: `#{변수명}`
- **예시**: `.box-#{$num}` → `.box-1`, `.box-2`, ...

---

## 📋 요약

### ✅ 핵심 학습 내용

1. **기본 문법**: 변수, 중첩, 모듈 방식
2. **고급 기능**: Mixin, 상속, 제어문
3. **동적 스타일**: 조건부 클래스 적용
4. **구조 관리**: 파일 분리 및 모듈화

### 🎯 실무 적용

- **테마 시스템**: 변수와 조건문 활용
- **컴포넌트 변형**: 상속과 믹스인 활용
- **디자인 시스템**: 파일 분리로 체계적 관리
- **반응형 디자인**: 반복문으로 브레이크포인트 생성
