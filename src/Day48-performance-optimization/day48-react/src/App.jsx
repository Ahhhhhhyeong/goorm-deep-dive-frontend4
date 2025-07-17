import { useForm } from 'react-hook-form';
import './App.css';
import UseWatchTest from './components/useWatchTest/UseWatchTest';
import WatchTest from './components/watchTest/WatchTest';
import UseWatchTest2 from './components/useWatchTest/useWatchTest2';
import SwiperTest from './components/swiperTest/SwiperTest';
import SwiperAutoTest from './components/swiperTest/SwiperAutoTest';
import SwiperPagenation from './components/swiperTest/SwiperPagenation';
import SwiperNavigationTest from './components/swiperTest/SwiperNavigationTest';
import SwiperPaginationTest from './components/swiperTest/SwiperPaginationTest';

function App() {
  return (
    <>
      {/* 실습 순서 App */}
      {/* <App_watch_test /> */}
      {/* <UseWatchTest /> */}
      {/* <WatchTest /> */}
      {/* <UseWatchTest2 /> */}
      {/* <SwiperTest /> */}
      {/* <SwiperAutoTest /> */}
      {/* <SwiperPagenation /> */}
      {/* <SwiperNavigationTest /> */}
      {/* <SwiperPaginationTest /> */}
    </>
  );
}

export default App;

/*
# watch()
> 모든 값이나 특정 필드 값을 실시간으로 감시하는 함수
  
```jsx
    const name = watch('name');
```
- name이라는 입력창에 들어간 내용을 계속 지켜보게 된다.
- 중복확인 같은 간단한 검사로는 좋음
- watch()를 사용하지 않으면 폼 제출을 하기 전 까지 입력된 값들을 React hook form에서 기억하지만 코드로 즉시 확인이 불가능
- 단점!!
    - watch()는 화면이 계속 렌더링이 됨
    - 성능이 떨어질 수 있음

# useWatch()
> watch()의 단점을 커버한거


*/

function App_watch_test() {
  const { register, watch } = useForm();
  const name = watch('name');

  //두 입력값 비교
  const password = watch('password');
  const confirm = watch('confirm');

  return (
    <>
      <div>
        <input type='text' {...register('name')} />
        <p>지금 입력한 이름: {name}</p>

        {/* 입력값이 특정 조건이면 버튼 활성화 */}
        <button disabled={!name}>다음으로</button>
      </div>

      <div>
        <label>비밀번호 입력</label>
        <input type='password' {...register('password')} />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input type='password' {...register('confirm')} />
      </div>
      {
        //비밀번호 불일치 경고
        password && confirm && password !== confirm && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
      }
    </>
  );
}
