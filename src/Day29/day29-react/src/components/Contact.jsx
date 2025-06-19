import React from 'react';
import { Form, redirect } from 'react-router-dom';

// 폼태그에서 전송 버튼을 클릭했을 때 실행할 수 있는 함수 작성
export async function contactAction({ request }) {
  // Form에서 입력한 데이터 수집
  const data = await request.formData(); // form에 대한 내용을 가져옴
  // form 에서 전송된 입력값을 가져올 때 name 속성이 필요함
  const name = data.get('username');
  const age = data.get('userage');
  console.log('입력된 이름: ', name);

  return redirect('/'); // form 전송 시 어디로 이동할지 설정
}

export default function Contact() {
  return (
    <div>
      <p>Form 전송 실습</p>
      <Form method='POST'>
        <input type='text' name='username' placeholder='이름을 입력하세요' />
        <input type='text' name='userage' placeholder='나이를 입력하세요' />
        <button type='submit'>제출</button>
      </Form>
    </div>
  );
}
