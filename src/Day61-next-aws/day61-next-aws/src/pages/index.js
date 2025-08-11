import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [imgURL, setImgUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 새로고침 막기

    if (!file) return alert('파일을 선택하세요!');

    // multpart/form-data 알아서 자동으로 변환해준다.
    // 우리는 데이터를 꺼내쓰거나 파일을 전송받을 경우에는 FormData객체(공간)을
    // 만들어서 받는다.
    const formData = new FormData();

    formData.append('file', file);

    const res = await axios.post('/api/hello', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res.data);
    alert(res.data.message);

    // presigned Get URL을 발급
    const data = await axios.post('/api/geturl', key);

    setImgUrl(data.url);
  };

  return (
    <div>
      {/*  파일을 서버로 보내기 */}
      <h1>파일업로드</h1>

      <form onSubmit={handleSubmit}>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} accept='image/*' />

        <button type='submit'>업로드</button>
      </form>

      {imgURL && (
        <div>
          <img src={imgURL} alt='업로드' width={200} />
        </div>
      )}
    </div>
  );
}

/*
// 실제 여러개의 파일을 선택하면 선택한 파일들의 리스트 (FileList객체)
// [0] 첫번째 단일 파일만 선택!
// http에서 쓰는 multpart/form-data 전송방식
//  텍스트와 파일을 한번에 여러 조각으로 나눠서 보내는 형식이다.

// 왜 필요하지?
// = 일반적으로 application/json 순수 데이터만 전송이 가능하다.
// = 이미지,동영상,PDF같은 파일 그대로 전송할 수가 없다.(이진파일)
// = 그래서 파일은 텍스트와 다른 형태로 HTTP요청에 담아야된다.

// multpart/form-data 전송방식으로 온 데이터를 꺼내올려면 
// 필요한 라이브러리가 있다. 외부라이브러리기 때문에 다운로드 받아야된다.
// npm install formidable
*/
