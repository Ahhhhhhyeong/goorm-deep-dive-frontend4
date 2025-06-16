import React, { useEffect, useState } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export default function MovieView() {
  // API 호출 url
  const requestUrl = `${apiUrl}?key=${apiKey}&targetDt=20250610`;

  // 영화목록 저장
  const [movie, setMovie] = useState([]);

  //데이터를 화면에 로딩해야되기 때문에 처음 한 번 마운트
  useEffect(() => {
    async function boxOffice() {
      //요청을 보내고 기다림
      const response = await fetch(requestUrl);
      //에러를 확인
      if (!response.ok) return;

      //정상적으로 받았을 경우
      //json객체로 파싱 될 때 까지 await(대기)
      const json = await response.json();

      console.log('json: ', json);
    }
    //함수명 호출해서 실행하기
    boxOffice();
  }, []);

  return (
    <div>
      <h1>Movie View Page</h1>
    </div>
  );
}
