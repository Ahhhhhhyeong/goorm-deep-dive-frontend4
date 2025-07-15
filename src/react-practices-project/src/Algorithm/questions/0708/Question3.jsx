import React, { useState } from 'react';
import InputComponent from '../../utils/InputComponent';
import TableComponent from '../../utils/TableComponent';

export default function Question3() {
  const [ages, setAges] = useState('25,11,27,56,7,19,52,31,77,8');
  // const [ages, setAges] = useState('13,33,45,11,20');
  const [transportation, setTrans] = useState('Bus');
  const [result, setResult] = useState(null);
  const transperPrice = [
    { transper: 'Bus', adult: 40000, kid: 15000 },
    { transper: 'Ship', adult: 30000, kid: 13000 },
    { transper: 'Airplane', adult: 70000, kid: 45000 },
  ];
  const discount = { adult: 10, kid: 20 };

  // 성인,아이 판별
  const onePrice = (age, type) => {
    if (age >= 20) return transperPrice.find((item) => item.transper === type)?.adult;
    return transperPrice.find((item) => item.transper === type)?.kid;
  };

  // 할인율 반영
  const calcDiscount = (age, price) => {
    return price * (1 - (age >= 20 ? discount.adult : discount.kid) / 100);
  };

  //금액 계산
  const getPrice = (type, age, isDiscount) => {
    let sum = 0;
    switch (type) {
      case 'Bus': {
        sum = onePrice(age, type);
        sum = isDiscount ? calcDiscount(age, sum) : sum;
        return sum;
      }
      case 'Ship': {
        sum = onePrice(age, type);
        sum = isDiscount ? calcDiscount(age, sum) : sum;
        return sum;
      }
      case 'Airplane': {
        sum = onePrice(age, type);
        sum = isDiscount ? calcDiscount(age, sum) : sum;
        return sum;
      }
      default:
        return sum;
    }
  };

  const handleClick = () => {
    const arr = ages
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !isNaN(v));

    if (arr.length < 0) return;

    //금액 계산 함수 실행
    let sum = 0;
    arr.forEach((age) => {
      if (arr.length >= 10) {
        sum += getPrice(transportation, age, true);
      } else {
        sum += getPrice(transportation, age, false);
      }
    });
    // console.log(sum);
    setResult(sum.toLocaleString());
  };
  return (
    <div className='section'>
      <h3>문제5 여행객의 총 교통비 구하기</h3>
      <div className='q-info'>
        <TableComponent
          title='가격 안내'
          columns={['교통수단', '어른', '어린이']}
          data={transperPrice.map(({ transper, adult, kid }) => ({
            교통수단: transper,
            어른: adult,
            어린이: kid,
          }))}
        />

        <TableComponent
          title='단체(10명이상) 할인'
          columns={['어른', '어린이']}
          data={[
            {
              어른: `${discount.adult}%`,
              어린이: `${discount.kid}%`,
            },
          ]}
        />
      </div>
      <InputComponent
        inputs={[
          {
            label: '여행객 나이',
            value: ages,
            onChange: setAges,
            type: 'text',
            id: 'test3-1',
            placeholder: '여행객의 나이를 쉼표로 구분해주세요',
          },
        ]}
        selects={[
          {
            label: '교통수단',
            options: transperPrice.map(({ transper }) => ({
              label: transper,
              value: transper,
            })),
            value: transportation,
            onChange: setTrans,
            id: 'test3',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>총 금액: {result} 원</p>
    </div>
  );
}
