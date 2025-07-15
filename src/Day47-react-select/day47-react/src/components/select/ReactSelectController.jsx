import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

const options = [
  { value: '초콜릿', label: '초콜릿' },
  { value: '딸기초콜릿', label: '딸기초콜릿' },
  { value: '바닐라초콜릿', label: '바닐라초콜릿' },
];

export default function ReactSelectController() {
  // useForm에서 control 객체를 가져오기
  const { handleSubmit, control } = useForm();

  // 이벤트 실행
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    /*
     예시 결과 출력
        {
          "food": {
            "value": "딸기초콜릿",
            "label": "딸기초콜릿"
          }
        }
    */
  };
  return (
    <div className='mt-4'>
      <h3 className='tex-xl'>외부라이브러리 연결시 Controller사용</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller // 그 데이터를 사용하는 UI컴포넌트
          name='food'
          control={control} // 외부컴포넌트와 연결해주는 연결자 역할 (데이터)
          render={(
            { field } // 이 필드를 어떻게 그릴 지 정하는 함수
          ) => (
            // ...field(핵심동작)
            // value -> 현재 값
            // onChange-> 선택된 값이 바뀔때 저장
            // ref -> 폼 내부에서 이 요소를 추적
            <Select
              {...field}
              options={options} // 드롭다운 옵션
              placeholder='맛을 선택하세요'
              isClearable
            />
          )}
        />
        <button type='submit'>제출</button>
      </form>
    </div>
  );
}
/*
control 폼 상태를 추적하는 기계( 외부 컴포넌트를 연결 준비)
Controller 외부 UI를 붙여주는 연결자 (어떤 UI를 보여줄지 설정)
Select {...field} 그 연결을 사용하는 사용자 인터페이스! (정보가 작동하게 만든다)
 
...field -> value,onChange,ref 등을 한꺼번에 전달
*/
