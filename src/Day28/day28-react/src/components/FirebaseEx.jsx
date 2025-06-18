import React, { useEffect } from 'react';
import { ref, set, get } from 'firebase/database'; // RTDB functions
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

export default function FirebaseEx() {
  const userData = {
    name: '홍길동',
    email: 'hongildong@test.email',
  };

  /* ref(db, 'DB경로(이름)/id')에 id가 기존에 있는 내용과 같은경우
  useEffect(() => {
    console.log('Start...useEffect');
    const writeData = () => {
      console.log('Start Function writeData()');
      //set을 사용하면 기존 내용이 있으면 덮어쓰기를 한다.
      set(ref(db, 'users/user2'), userData)
        .then(() => {
          console.log('Data saved Success!');
        })
        .catch((e) => console.error('Error!!! ', e));
    };
    //start
    writeData();
    console.log('end..?');
  }, []);
  */

  /*
  실제 firebase는 각각의 고유한 키를 이용해서 데이터를 저장해야 한다. => UUID
    * UUID 패키지(라이브러리) 다운 필요 `npm install uuid`
  */
  useEffect(() => {
    console.log('Start...useEffect');
    // 데이터 쓰기
    const writeData = () => {
      console.log('Start Function writeData()');
      //set을 사용하면 기존 내용이 있으면 덮어쓰기를 한다.
      set(ref(db, `users/${uuidv4()}`), userData)
        .then(() => {
          console.log('Data saved Success!');
        })
        .catch((e) => console.error('Error!!! ', e));
    };
    // 데이터 읽기
    const readData = async () => {
      try {
        const respData = await get(ref(db, `users`));
        /** snapshot 객체로 리턴이 됨
         * .val() = 데이터를 객체 형태로 꺼내옴
         */
        console.log(respData.val());
      } catch (error) {
        console.error(`ERROR!!!!! ${error}`);
      }
    };
    //start
    //writeData(); //data 추가 함수
    //readData();

    console.log('end..?');
  }, []);
  return (
    <div className='font-mono'>
      <h2>Firebase!</h2>
    </div>
  );
}
