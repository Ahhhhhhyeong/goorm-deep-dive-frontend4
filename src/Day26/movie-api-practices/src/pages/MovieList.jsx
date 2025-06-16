import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export default function MovieList() {
  // API 호출 url
  const requestUrl = `${apiUrl}?key=${apiKey}&targetDt=20250610`;

  // 영화목록 저장
  const [movies, setMovie] = useState([]);

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
      //console.log('json: ', json.boxOfficeResult.dailyBoxOfficeList);
      setMovie(json.boxOfficeResult.dailyBoxOfficeList);
    }
    //함수명 호출해서 실행하기
    boxOffice();
  }, []);
  return (
    <div>
      <h1>무비차트</h1>
      <hr />
      <section className='movie-form'>
        <div className='movie-check'>
          <input type='checkbox' name='nowRunning' id='nowRunning' />
          <label htmlFor='nowRunning'>현재 상영작만 보기</label>
        </div>
        <div>
          <select name='movieChoice' id='movieChoice'>
            <option value='showCnt'>예매율순</option>
            <option value='audiAcc'>관람객순</option>
          </select>
        </div>
      </section>
      <section className='movie-list__wrapper'>
        {movies.map((movie) => (
          <section className='movie-list' key={movie.rnum}>
            <article className='movie-rank'>
              <h3>No.{movie.rank}</h3>
            </article>
            <Link to={movie.movieCd}>
              <article className='movie-image'>
                <img
                  src='https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89315/89315_320.jpg'
                  alt='영화 포스터'
                />
              </article>
            </Link>
            <article className='movie-info'>
              <h3>{movie.movieNm}</h3>
              <p>
                예매율 <span>{movie.salesShare}</span>
              </p>
              <p>{movie.openDt} 개봉</p>
              <button>예매하기</button>
            </article>
          </section>
        ))}
      </section>
    </div>
  );
}
