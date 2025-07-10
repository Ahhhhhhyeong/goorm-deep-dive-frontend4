import React, { useEffect, useState } from 'react';
import { useUserStore } from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import InputComponents from './InputComponents';

export default function Login() {
  const [loginId, setLoginId] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const navigate = useNavigate();

  /* error 발생: 
  ❗ "The result of getSnapshot should be cached to avoid an infinite loop"
  ❗ "Maximum update depth exceeded..." 
    selector가 계속 새로운 값을 반환 하면서 무한루프에 빠져버림! 
    //useUserStore((state) => ({})) => react가 새로운 객체를 계속 만들어낸다고 착각을 하여 무한 렌더링이 일어나게 된다.
    const { isLoggined, loginError, findUser } = useUserStore(
      (state) => ({
        isLoggined: state.isLoggined,
        loginError: state.loginError,
        findUser: state.findUser,
      })
    );
    💡 해결방안 
    1. 구조분해 없이 개별 선택 하기
    2. 여러 상태가 필요하면 객체가 아니라 배열을 반환
  */
  const isLoggined = useUserStore((state) => state.isLoggined);
  const loginError = useUserStore((state) => state.loginError);
  const findUser = useUserStore((state) => state.findUser);
  const doLogin = useUserStore((state) => state.doLogin);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('로그인 버튼 클릭?');
    if (!loginId.trim() || !loginPwd.trim()) return alert('아이디 혹은 비밀번호를 입력해주세요.');
    // console.log(`id: ${loginId} pwd: ${loginPwd}`);
    findUser({ id: loginId, password: loginPwd });
  };

  useEffect(() => {
    if (isLoggined) {
      setLoginId('');
      setLoginPwd('');
      alert('로그인 되었습니다!');
      navigate('/');
    }
  }, [isLoggined]);

  useEffect(() => {
    if (!isLoggined && loginError) {
      alert(loginError);
      navigate('/login');
    }
  }, [doLogin]);

  return (
    <div className='max-w-md mx-auto mt-10 p-6 '>
      <form onSubmit={handleLogin} method='post' className='bg-white shadow-md rounded-xl p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>로그인</h2>

        <InputComponents
          inputs={[
            {
              label: '아이디',
              value: loginId,
              onChange: setLoginId,
              type: 'text',
              id: 'loginId',
              placeholder: '아이디를 입력해주세요',
            },
            {
              label: '비밀번호',
              value: loginPwd,
              onChange: setLoginPwd,
              type: 'password',
              id: 'loginPwd',
              placeholder: '비밀번호를 입력해주세요',
            },
          ]}
        />

        {doLogin < 5 ? (
          <input
            type='submit'
            value='로그인하기'
            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors'
          />
        ) : (
          <div className='max-w-md mx-auto mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm'>
            <p className='font-semibold text-center text-pretty'>
              로그인 실패 횟수가 5회를 초과했습니다! 관리자에게 연락해주세요
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
