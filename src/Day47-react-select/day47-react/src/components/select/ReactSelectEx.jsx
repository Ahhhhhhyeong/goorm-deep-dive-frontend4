import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

// 1) option 만들기
const options = [
  { value: '초콜릿', label: '초콜릿' },
  { value: '딸기초콜릿', label: '딸기초콜릿' },
  { value: '바닐라초콜릿', label: '바닐라초콜릿' },
];

export default function ReactSelectEx() {
  //2) 선택된 옵션을 변수에 저장
  const [selectOption, setSelectOption] = useState(null);
  const { register, handleSubmit } = useForm();

  // 3) 이벤트 함수 만들기
  const handleChange = (option) => {
    console.log('선택된 값:', option);
  };

  //폼 데이터 확인
  const onSubmit = (data) => {
    console.log(`options:`, JSON.stringify(data));
    console.log(`제출됨 ${data}`);
  };

  return (
    <div className='w-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          {...register('food')}
          options={options} //drop-down option
          value={selectOption} //현재 선택된 값
          placeholder='맛을 선택해요'
          onChange={handleChange} //선택 시 변경되는 함수
          isClearable
        />
        <button type='submit'>제출</button>
      </form>
      {/* <Select
        options={options} //drop-down option
        value={selectOption} //현재 선택된 값
        placeholder='맛을 선택해요'
        onChange={handleChange} //선택 시 변경되는 함수
        isClearable
      /> */}
    </div>
  );
}
