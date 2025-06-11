# [Day23] 25.06.11 배운 내용 정리

---

### 🗂️ 프로젝트 소개

- [day23-react](./day23-react/)
  - 이벤트 실습 프로젝트
  - 약간의 정규식 + 유효성 검사

---

# 함수 Event

## 이벤트 버블링

- 어떤 요소에서 이벤트가 발생하면 그 요소 -> 부모 요소 -> 조상 요소 순서대로 위로(bubble) 전파 되는 현상
  -> 리액트도 DOM 사용
- 리액트도 똑같이 자식 -> 부모 -> 조상 순으로 이벤트가 전달된다.

버블링 테스트 코드

```js
const handleButtonClick = () => {
  alert('버튼 클릭');
};
const handleParentClick = () => {
  alert('부모');
};

return (
  <div onClick={handleParentClick}>
    <button onClick={handleButtonClick}>클릭해보세용</button>
  </div>
);
```

버튼을 클릭하면 `handleButtonClick` 함수가 호출되어 '버튼 클릭' 이라는 알림창이 뜨고,
알림창을 끄면, div에 설정한 `handleParentClick` 함수가 호출된다.

버블링을 막는 방법

```js
const handleButtonClick = (e) => {
  e.stopPropagation(); //부모팝업 안뜨게
  alert('버튼 클릭');
};
```

자식요소(하위요소)에 이벤트 인터페이스의 `e.stopPropagation()` 메서드를 추가한다.

---

이벤트 캡처링

- 실행순서 : 조상 -> 부모 -> 자식
- 로그 수집기로 활용
- 경고. 방지 기능

이벤트 캡처링 사용

```js
import React from 'react';

export default function EventBubbling2() {
  return (
    <div
      onClickCapture={() => {
        alert('div');
      }}>
      <section
        onClickCapture={() => {
          alert('section');
        }}>
        <button
          onClickCapture={(e) => {
            alert('button');
          }}>
          click
        </button>
      </section>
    </div>
  );
}
```

---

브라우저의 기본 동작을 막는 함수 : `preventDefault()`

- 예를들어 `<a>`, `<form>` 태그같이 자동으로 제출이나 링크이동, 마우스 휠 동작 등을 막는다.

---

# 정규식?

- 문자열 안에서 특정한 패턴을 찾는 도구
- `/정규식패턴/.test('string')` 또는 `match()` 검사진행

예시1: 숫자확인

```js
const input = '123456';
const onlyNumber = /^[0-9]+$/;
console.log('숫자가 맞는지? ', onlyNumber.test(input));
```

예시2: 한글 입력 확인

```js
const koreaOnly = /^[가-힣]+$/;
console.log('한글만 입력 되었는지? ', koreaOnly.test('가나다'));
```

예시3: 8자리 이상 영문 + 숫자 비밀번호 검사

```js
const pwCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
console.log('8자리 이상, 영문+숫자 조합? ', onlyNumber.test(input));
```

> 패턴을 쓸 때는 `/`로 시작하고 `/`로 끝마침  
> ''(문자열)안에 쓰면 안됨

React Hook Form

- 폼 상태 관리, 유효성 검사, 제출처리를 깔끔하게 도와주는 라이브러리
- 사용하려면 다운로드 필요
  - 터미널에서 실행중인 프로젝트(서버)를 종료 후 다운로드 진행
  - `npm install react-hook-form`
- 상태관리, 리랜더링을 최소화 하는 덕분에 성능도 좋아짐
- 중대형 프로젝트에서는 거의 기본처럼 사용됨
- `Formik`, `Yup` 등 라이브러리도 많이 쓰임

  const {
  register, // input 필드를 Hook Form에 등록
  handleSubmit, // 폼 제출시 유효성 검사 자동 수행
  formState: { errors }, // 필드별 에러 메시지를 담고있는 객체
  } = useForm();

---

이벤트 위임

- 자식요소마다 이벤트를 걸지 않고 부모 요소에 이벤트를 한번만 걸고 자식의 이벤트를 대신 처리하는 기술
- 동적으로 추가된 요소들도 처리가 가능하기 때문에 성능, 유지보수도 좋음
- 사용: 채팅 메시지, 폼 제출 등

`e.target` : 누가 눌렀는지 확인해 처리하는 방식(이벤트 발생 대상체크)
