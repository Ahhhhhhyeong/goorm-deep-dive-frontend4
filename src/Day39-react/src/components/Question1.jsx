import React, { useState } from 'react';
import InputComponent from './InputComponent';

export default function Question1() {
  const shirt_size_default = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const [shirtizelen, setShritsSizeLen] = useState(0);
  const [shirtSize, setShirtSize] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const shirtSizetoArr = shirtSize.split(',').map((str) => str.toUpperCase());
    const numLen = Number(shirtizelen);
    if (numLen === 0 || numLen > 100 || shirtSizetoArr.length !== numLen) {
      alert('입력값이 잘 못 되었습니다.');
      return;
    }
    const obj = {};
    //디폴트 티셔츠 사이즈를 배열 key로 사용
    for (const size of shirt_size_default) {
      obj[size] = obj[size] || 0;
    }
    //obj에 입력받은 값을 key에 맞춰 값 증가
    for (const size of shirtSizetoArr) {
      obj[size] = (obj[size] || 0) + 1;
    }
    //value만 따로 배열을 만들어서 리턴
    const tmp = [];
    for (const key in obj) {
      tmp.push(obj[key]);
    }
    setResult(tmp);
  };
  return (
    <div>
      <h2>단체 티셔츠 주문하기</h2>
      <p>1~100 이하로 입력해주세요. 사이즈는 쉼표(,)로 구분하여 인원수에 맞게 써주세요.</p>
      <p>티셔츠 사이즈 : {shirt_size_default.map((v) => v).join(',')}</p>
      <InputComponent
        inputs={[
          { label: '주문인원', value: shirtizelen, onChange: setShritsSizeLen, type: 'number' },
          { label: '사이즈입력', value: shirtSize, onChange: setShirtSize, type: 'text' },
        ]}
        buttonText='주문확인'
        onClick={handleCheck}
      />
      {result && <p>{JSON.stringify(result, null, 2)}</p>}
    </div>
  );
}
