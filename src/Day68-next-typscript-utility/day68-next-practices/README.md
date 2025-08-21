## 과제 하면서 생긴 이슈

---

## 1. Next.js App Router 환경에서 cookies-next setCookie가 동작하지 않음

### 📝 설명

cookies-next 라이브러리를 사용하여 서버에서 쿠키를 설정하려고 시도했으나, 쿠키가 브라우저에 내려가지 않는 문제가 발생했습니다.

- 문제 코드 예시:

```ts
setCookie('userId', user._id.toString(), { path: '/' });
console.log(getCookie('userId')); // undefined
```

---

### 🔍 원인

1. `cookies-next`의 `setCookie`는 **서버 컨텍스트에서 `req`와 `res` 객체가 필요**합니다.
2. Next.js 13+ App Router에서는 `Request` 객체는 Node.js의 `req`/`res`가 아니므로, `cookies-next`의 서버용 API와 호환되지 않습니다.
3. 따라서, `setCookie` 호출만으로는 브라우저에 쿠키가 전달되지 않습니다.

---

### ✅ 해결 방법

#### Client page에서 설정

```ts
// API 연동
const fetchData = async () => {
  try {
    const res = await axios.post('/api/login', formData);
    console.log(res.data);
    setCookie('userId', res.data.userId.toString(), { path: '/' });
    alert('로그인 성공했습니다!메인페이지로 이동합니다..');
    router.push('/');
  } catch (error) {
    console.error(error);
    alert('로그인에 문제가 생겼습니다. 다시 시도해주시기 바랍니다.');
  }
};
fetchData();
```

#### 참고

- `httpOnly: true` 옵션 사용 시 클라이언트에서 JavaScript로 쿠키를 읽을 수 없습니다.
- `cookies-next`를 계속 사용하려면, 서버에서 `req`와 `res` 객체를 명시적으로 전달해야 하지만, App Router에서는 잘 동작하지 않습니다.

---

### 🔧 결론

- 서버에서 직접 `setCookie`를 호출하는 방식은 App Router에서는 브라우저에 쿠키를 내려주지 못함.
