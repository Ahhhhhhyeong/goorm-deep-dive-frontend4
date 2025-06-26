import React, { useEffect, useState } from 'react';

export default function PageEx() {
  const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;
  const [keyword, setKeyword] = useState('망곰이');
  //우회용 url
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const requestUrl = `https://openapi.naver.com/v1/search/image`;

  //Data save
  const [images, setImages] = useState([]);

  // 보여질 데이터 개수
  let itemCount = 10;
  // 1. 전체 페이지 개수 = 전체 아이템 수 / 한 페이지에 보여질 데이터 개수
  const totalPage = images.length / itemCount;
  // 2. 시작하는 페이지 번호
  let startPage = 1;

  //비동기 통신 시작
  const fetchImages = async () => {
    const res = await fetch(`${proxy}${requestUrl}?query=${encodeURIComponent(keyword)}&display=50`, {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    });
    // 데이터가 다 변환될때까지 기다려라!
    const data = await res.json();
    console.log(data.items);
    // 변수에 저장하기
    setImages(data.items);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>페이지네이션</h1>
      <input type='text' placeholder='검색어' />
      <br />
      <button>검색</button>

      <h1>이미지 출력</h1>
      <ul>
        {images.map((img, i) => (
          <li key={i}>
            <img src={img.thumbnail} alt={img.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
