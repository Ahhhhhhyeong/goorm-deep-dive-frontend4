import React from 'react';
import { useForm } from 'react-hook-form';

export default function UseFormEx() {
  /**
   * @param {Object} register : input을 폼에 등록하는 함수
   *                         =>리엑트 훅 폼과 input을 연결
   * @param {func} handleSubmit : 폼 제출 이벤트를 감싸서 검증 -> 제출 함수 실행 흐름으로 바꿔줌
   *
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * 폼이 성공적으로 제출되면 실행되는 함수
   * @param {*} data  : 사용자가 입력한 모든 값이 담긴 객체
   * {username: '철수'}
   */
  const onSubmit = (data) => {
    console.log(data);
  };

  /**
   * <form onSubmit={handleSubmit(onSubmit)}>
   * 1. 입력값을 먼저 검증
   * 2. 문제가 없으면 onSubmit()함수를 실행
   * <input placeholder='이름'
        { 
          ...register('username',{required: true})
        }  />
    register 
    : username 이라는 이름으로 input을 폼에 등록
    : required: true -> 필수 입력이라는 검증 조건
    : {...re} ; 이걸 input에 직접 연결하면 value, onChange, ref가 자동으로 처리
    실행의 순서
        1. input을 register()로 연결한다.
        2. 제출시 handleSubmit()이 실행되고 입력값을 검사한다.
        3. 조건이 맞으면 onSubmit을 실행하고 아니면 errors에 정보를 저장한다.
   */

  return (
    <div>
      <h2>UseForm 알아보기</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('username', { required: true })} placeholder='이름' />
        {errors.username && <span>이름은 필수입니다.</span>}
        <input
          type='password'
          {...register('password', { required: '비밀번호는 필수입니다.' })}
          placeholder='비밀번호 입력'
        />
        {/* 비밀번호 동일한지 확인 */}
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}
