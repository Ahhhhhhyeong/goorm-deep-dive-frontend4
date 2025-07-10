import React, { useState } from 'react';

export default function HashPasswordSHA() {
  // 1) 입력된 비밀번호 저장하는 상태
  const [password, setPassword] = useState('');

  // 2) 암호화된 (해시된) 결과를 저장하는 상태
  const [hashTable, setHashTable] = useState('');

  // 3) SHA-256 해시를 만들어주는 함수
  async function toSHA256(text) {
    // 3-1) TextEncoder라는 객체가 있다.
    //    문자열을 byte배열로 변경해주는 것!
    const encoder = new TextEncoder();
    //  text apple -> [96,112,112,108,101]같은 숫자 묶음으로
    //  변환한다.
    const data = encoder.encode(text);
    console.log(`현재 encoder : ${data}`);

    // 3-2) crypto.subtle.digest('SHA-256',data); 실제 비밀코드로
    //     변환해준다. Promise 객체로 반환한다
    //     'SHA-256' 특별한 상자
    //      무언가를 집어 넣으면 최대 256비트 길이(16진수 문자열로 64글자)
    //      나눠서 표현한다.
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    console.log(hashBuffer);

    // 3-3) 데이터를 하나하나 볼 수있는 배열로 바꿀것!
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // 3-4) 숫자 하나 하나를 16진수(0~f) 문자로 바꾸고, 붙여서 긴 문자열을
    //      완성
    const hashHex = hashArray
      .map((byte) =>
        // byte변수에 있는 값을 16진수 문자로 바꾸고
        // 한 글자라 부족하면 앞에 '0'을 붙여 두 글자로 만들어라!
        byte.toString(16).padStart(2, '0')
      ) //['ab','3f','09']
      .join('');

    return hashHex;
  }

  // 4) 버튼 클릭시 실행하는 함수
  const passwordChange = async () => {
    // 4-1) toSHA256 함수를 시작해서 비밀번호 해시 결과 받기
    const result = await toSHA256(password);

    // 4-2) 받아온 해시 문자열을 화면에 보여주기 위해 저장!
    setHashTable(result);
  };

  //toSHA256('apple');

  return (
    <div>
      <h3>crypto라이브러리를 이용해서 암호화 함</h3>

      <input type='text' placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)} />

      <button onClick={passwordChange}>암호화</button>

      {hashTable && (
        <div>
          <strong>결과</strong>
          {hashTable}
        </div>
      )}
    </div>
  );
}
/*
window.crypto.subtle.digest()
*/
