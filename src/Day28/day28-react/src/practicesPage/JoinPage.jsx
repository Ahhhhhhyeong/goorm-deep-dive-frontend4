import React from 'react';
import { ref, set, get } from 'firebase/database'; // RTDB functions
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

export default function JoinPage() {
  const handleJoin = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지 (페이지 새로고침 막기)
    // 고유값
    const uid = uuidv4();

    //저장소 이름 = JoinList
    const STORAGE_NAME = 'JoinList';

    //user 정보 가져오기
    // console.log(e.target);
    const form = e.target;

    const userData = {
      userId: form.userId.value,
      userPwd: form.userPwd.value,
      userName: form.userName.value,
      userEmail: form.userEmail.value,
    };

    //데이터 저장
    set(ref(db, `${STORAGE_NAME}/${uid}`), userData).then(() => {
      console.log('등록완료!');
      alert('회원가입 완료되었습니다!');
    });
  };

  return (
    <div className='box-content md:box-border border-1 p-4'>
      <form
        onSubmit={handleJoin}
        method='post'
        className='grid grid-flow-col grid-rows-5 gap-4'>
        <input
          className='border-2 border-gray-700 focus:border-pink-600'
          type='text'
          placeholder='아이디 입력해주세요'
          name='userId'
        />
        <input
          type='password'
          className='border-2 border-gray-700 focus:border-pink-600'
          placeholder='비밀번호를 입력해주세요'
          name='userPwd'
        />
        <input
          type='text'
          className='border-2 border-gray-700 focus:border-pink-600'
          placeholder='이름 입력해주세요'
          name='userName'
        />
        <input
          className='border-2 border-gray-700 focus:border-pink-600'
          type='text'
          placeholder='이메일 입력해주세요'
          name='userEmail'
        />
        <input
          type='submit'
          value='회원가입'
          className='bg-sky-500 hover:bg-sky-700 text-white'
        />
      </form>
    </div>
  );
}
