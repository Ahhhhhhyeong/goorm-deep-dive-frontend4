import React, { useState } from 'react';

//단순히 커스텀 훅을 만들기 위해서 사용하는 것이지
// 화면에 태그를 만들려고 하는 것이 아니기 때문에 소문자로 작성해도 된다
export default function useInput(initial = '') {
  const [value, setValue] = useState(initial);
  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');

  return { value, onChange, reset };
}
/*
이 커스텀 훅을 사용하게 되면 텍스트 입력상태를 간단하게 관리할 수 있다.

간단하게 값만 관리를 할 때는 커스텀 훅으로 useInput을 만들어서 사용하는게 좋고, 
여러개의 필드를 한 곳에서 관리하고 유효성 검사, 제출 필요할때는 useForm을 사용
*/
