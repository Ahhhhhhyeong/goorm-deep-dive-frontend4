import React from 'react';
import { useInput } from '../hooks/useInputChange';
import InputComponents from '../components/InputComponents';
import ButtonComponents from '../components/ButtonComponents';

export default function BasicInputPage() {
  const nameInput = useInput();
  return (
    <div>
      <h1 className='text-lg font-bold my-2'>기본 입력값 훅 페이지</h1>
      <InputComponents
        label={'이름'}
        type='text'
        placeholder='이름을 입력해주세요'
        value={nameInput.value}
        handleInputChange={nameInput.handleInputChange}
      />
      <ButtonComponents onClick={nameInput.resetValue}>초기화</ButtonComponents>
    </div>
  );
}
