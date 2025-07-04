import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function CosProTest1() {
  const [leftG, setLeftG] = useState('');
  const [leftGL, setLeftGL] = useState('');
  return (
    <div className='section'>
      <h2>최대한 많은 쌍의 장갑 개수 구하기</h2>
      <InputComponent
        inputs={[{ label: '왼손 제품번호', value: 'text', onChange, placeholder: '쉼표로 구분해주세요' }]}
      />
    </div>
  );
}
