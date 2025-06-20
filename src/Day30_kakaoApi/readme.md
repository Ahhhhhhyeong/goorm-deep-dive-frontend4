# [Day30] 25.06.20 배운 내용 정리

---

# 🔐 Kakao 로그인 API 연동 (React + Kakao JavaScript SDK)

> [Day29에서 정리한 내용](https://github.com/Ahhhhhhyeong/goorm-deep-dive-frontend4/tree/main/src/Day29#-kakao-%EB%A1%9C%EA%B7%B8%EC%9D%B8-api) : 준비 사항, OAuth 2.0 개념 간단하게 정리 되어있음
>
> 네이버도 진행했는데, [네이버 개발자 센터](https://developers.naver.com/docs/login/devguide/devguide.md)에 예제 코드나 설명이 너무 잘 되어 있다!

---

## 📦 1. Kakao SDK 초기화

```tsx
useEffect(() => {
  console.log('window.kakao: ', window.Kakao);
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_JS_KEY);
    console.log('카카오 객체 만들어짐');
  }
}, []);
```

### ✅ 설명

- `window.Kakao` 객체는 Kakao SDK가 로드되면 전역으로 생성됨
- `isInitialized()`로 중복 초기화 방지
- 초기화 시, `KAKAO_JS_KEY`를 사용하여 Kakao SDK 사용 준비 완료

---

## 🚀 2. 카카오 로그인 요청 함수

```tsx
function handleLogin() {
  if (!window.Kakao) {
    alert('카카오객체가 정상적으로 만들어지지 않았습니다');
    return;
  }

  window.Kakao.Auth.login({
    scope: 'profile_nickname, profile_image', // 사용자 정보 접근 권한
    success: function (authObj) {
      console.log('로그인 성공!', authObj);
      window.Kakao.API.request({
        url: '/v2/user/me',
      })
        .then(function (response) {
          console.log(response); // 사용자 정보 출력
        })
        .catch(function (error) {
          console.error(error); // 사용자 정보 요청 실패
        });
    },
    fail: function (err) {
      console.error('로그인 실패', err);
    },
  });
}
```

### ✅ 설명

- `Kakao.Auth.login()`을 통해 팝업 로그인 창 제공
- `scope`는 사용자 정보 접근 권한 설정
- 로그인 성공 시, `Kakao.API.request()`로 사용자 정보 (`nickname`, `profile_image`) 요청
- 로그인 or 정보 요청 실패 시, 에러 핸들링 포함

---
