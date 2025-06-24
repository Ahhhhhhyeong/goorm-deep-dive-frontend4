import React, { useEffect, useState } from 'react';

export default function BlogSearch() {
  /* 
  1. 클라이언트 id, secret 가지고 오기
  2. 포트번호 및 url 확인
      API 설정에 검색을 추가햇는지 확인
  3. 통신
      네이버에 검색된 내용을 전달받기 위해 fetch사용 
      필요한 정보
      url: 주소
      method: Get/Post
      header: 클라이언트 아이디, 시크릿값, User-Agent, Host, Accept 등 헤더 값

  한글 인코딩을 안하면 한글 자체가 깨지는 경우가 있어서 검색이 안될 수도 있다!! (네이버는 조금 덜 한 편)
    encodeURIComponent() 라는 함수가 있음 (js전역함수) 
    => 문자열 URI(웹 주소)의 한 부분으로 안전하게 사용할 수 있도록 형태를 변환해주는 함수
  */
  //뉴스: https://openapi.naver.com/v1/search/news.json
  //책: https://openapi.naver.com/v1/search/book.json
  const keyword = '비비안웨스트우드';
  const requestUrl = 'https://openapi.naver.com/v1/search/blog.json?query=비비안웨스트우드';
  const requestEncodeUrl = `https://openapi.naver.com/v1/search/blog.json?query=${encodeURIComponent(keyword)}`;
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;
  //공부용!!
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  //우회용 url
  const url = `${proxy}${requestEncodeUrl}`;

  //data 저장
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    console.log('start2');
    proxyFetch();
  }, []);

  /** 클라이언트에서 바로 fetch API 함수
   * 클라이언트 단(프론트엔드)에서 호출 시 막음
   * 브라우저에서 직접 Naver Open API는 네이버가 로컬 오리진 (Access-Control-Allow-Origin) 허용하지 않기 때문에
   * 헤더가 없어서 CORS에러를 발생시킨다.
   * 브라우저에서 직접 fetch() 할 수 없다.
   *
   * 네이버 open api
   * => 서버와 서버끼리 데이터를 전달하고 받을 수 있도록 만들어짐
   *
   * Node, express를 추가해서 하면 가능함!
   */
  function noProxyFetch() {
    fetch(requestUrl, {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET,
      },
    })
      .then((resp) => {
        console.log('정상');
      })
      .catch((err) => {
        console.log('에러');
      });
  }
  /** 공부용! 우회한 fetch API 함수
   * 임시 CORS 우회 프록시 서버 사용...
   * 데모 개발 목적으로 만들어진거라 꼭! 수업 및 공부용으로만 사용!!!
   * https://cors-anywhere.herokuapp.com/
   * 접속하여 `Request temporary access to the demo server` 버튼을 눌렸을 때 브라우저 IP 기준으로 1시간 정도 사용이 가능함.
   *
   * 실행순서
   * React -> CORS 프록시 -> API 호출
   *
   */
  function proxyFetch() {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET,
      },
    })
      .then((resp) => {
        //서버에서 응답받은 데이터 => Promise 객체로 반환됨
        console.log('정상');
        const jsonPromise = resp.json();
        return Promise.resolve(jsonPromise);
      })
      .then((jsonData) => {
        console.log(jsonData.items);
        setBlog(jsonData.items);
      })
      .catch((err) => {
        console.error('에러', err);
      });
  }

  return (
    <div>
      <h1>Blog Search</h1>
      {blog.map((item, index) => (
        <p key={index}> {item.title} </p>
      ))}
    </div>
  );
}

/**
 * 카테고리 변수를 만들어서 네이버 api 호출 할 때
 * 블로그, 뉴스, 책, 백과사전, 지식인 등등
 * 카테고리별 검색을 할 수 있다.
 */
