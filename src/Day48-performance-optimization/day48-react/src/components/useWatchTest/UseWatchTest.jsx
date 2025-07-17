import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

export default function UseWatchTest() {
  const { register, control } = useForm();

  // name 필드를 실시간 감시
  const name = useWatch({ control, name: 'name' });

  const [email, agree] = useWatch({
    control,
    name: ['email', 'agree'],
  });

  const age = useWatch({ control, name: 'age' });

  return (
    <div>
      <h1>useWatch로 변경</h1>
      <input type='text' {...register('name')} />
      <p>지금 입력한 이름 : {name}</p>

      <hr />

      {/* 다중으로 필드 감시 + 조건부 버튼 활성화 */}
      <div>
        <h3>다중으로 필드 감시 + 조건부 버튼 활성화</h3>
        <input type='text' placeholder='이메일' {...register('email')} />
        <br />
        <label>
          <input type='checkbox' {...register('agree')} /> 이용약관 동의
        </label>
        <br />
        <button disabled={!email || !agree}>다음으로</button>
      </div>

      <hr />

      {/* 특정 조건에 따라서 컴포넌트 보여주기 */}
      <div>
        <h3>특정 조건에 따라서 컴포넌트 보여주기</h3>
        <input type='number' {...register('age')} placeholder='나이 입력' />
        {age >= 20 && <p>성인 전용 옵션이 표시됩니다!</p>}
      </div>
    </div>
  );
}

/*
useWatch()
> 실시간으로 감시하는 건 똑같음

- 그 대상이 어느 폼 컨트롤러에 속해있는지 알아야 제대로 감시할 수 있다
- useForm() 안에 control이 없으면 어느 폼의 값을 지켜보는지 모르게 됨

watch() = 전체적으로 렌더링
useWatch() = 특정 요소 하나만 렌더링
-> 성능 부담이 적음
*/
