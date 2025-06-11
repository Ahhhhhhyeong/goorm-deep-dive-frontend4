import React from 'react';
// 추가적으로 라이브러리(도구들)받았을 때 가끔 자동완성이 안되는 경우도 있으니 import 꼭 확인!!
// {} > 안에 있는거는 필요한거만 쓰겠다고 들고옴
import { useForm } from 'react-hook-form';

export default function ReactHookFormEx1() {
  const {
    register, // input 필드를 Hook Form에 등록
    handleSubmit, // 폼 제출시 유효성 검사 자동 수행
    formState: { errors }, // 필드별 에러 메시지를 담고있는 객체
  } = useForm();

  // form 이 제출되었을 때, 실행할 함수
  const onSubmit = (data) => {
    alert(`Good : ${data}`);
  };

  return (
    <div>
      <h1>React Hook</h1>
      {/* 이 폼이 제출되면 handleSubmit() 함수 실행 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* username 필드를 등록 + 필수조건 설정 */}
        <input
          type='text'
          {...register('username', { required: '이름은 필수입력하세요' })}
          placeholder='이름입력'
        />
        <p style={{ color: 'red' }}>{errors.username?.message}</p>
        <input type='submit' value='제출하기' />
      </form>
    </div>
  );
}
/** 정규식 어떻게 쓰는지 구경 */
function fncRegex() {
  //Regex 정규식 사용
  //숫자만 입력되었는지 확인
  const input = '123456';
  const onlyNumber = /^[0-9]+$/; //패턴을 쓸 때는 슬래시로 시작하고 슬래시로 끝마침. ''안에 쓰면ㅁ 안됨
  console.log('Regex 숫자:', onlyNumber.test(input));

  //한글 입력
  const koreaOnly = /^[가-힣]+$/;
  console.log('한글만 입력 되었는지? ', koreaOnly.test('가나다'));

  // 8자리 이상 영문 + 숫자 비밀번호 검사
  const pwCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  console.log(onlyNumber.test(input));
}
