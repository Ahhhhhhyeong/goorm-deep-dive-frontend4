import React from 'react';

export default function ObjectPaser() {
  const str = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  //구조 분해 할당으로 간단하게 변수 꺼내기
  // const {city, geo} = str.address;
  // const {lat, lng} = geo;

  //한줄로 작성
  const {
    address: {
      city,
      geo: { lat, lng },
    },
  } = str;

  //간단한 object형
  const testObject = {
    name: 'Ervin',
    job: ['Developer', 'Tutor', 'Author'],
  };
  const testJob = testObject.job;
  return (
    <div>
      <h1>자바스크립트의 json 중첩</h1>
      <h5>Name : {testObject.name}</h5>
      <h5>Job : {testObject.job[0]}</h5>
      {/* {testJob.map((item) => console.log('item: ', item))} */}
    </div>
  );
}
