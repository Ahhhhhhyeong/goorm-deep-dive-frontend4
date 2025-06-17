import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL_SELECT_ONE;

export default function MovieDetail() {
  const movieCode = useParams();

  // API 호출 url
  const requestUrl = `${apiUrl}?key=${apiKey}&movieCd=${movieCode.id}`;

  //영화 데이터 저장
  const [movie, setMovie] = useState({});
  const [movieCreditStr, setMovieCreditStr] = useState('');
  const [movieinfo, setMovieInfo] = useState('');

  function movieCredits(directors, actors, genres, audits, nations, showTm) {
    return new Promise((resolve) => {
      const directorsNames = directors.map((d) => d.peopleNm);
      const actorsNames = actors.map((a) => a.peopleNm).join(' , ');
      setMovieCreditStr(`감독 : ${directorsNames} / 배우 : ${actorsNames}`);

      let result = `장르 : ${genres
        .map((g) => g.genreNm)
        .join(', ')} / 기본 정보 : ${audits.map(
        (a) => a.watchGradeNm
      )},  ${showTm}분, ${nations.map((n) => n.nationNm)}`;
      console.log('result: ', result);
      setMovieInfo(result);
    });
  }
  useEffect(() => {
    async function boxOffice() {
      //요청을 보내고 기다림
      const response = await fetch(requestUrl);
      //에러를 확인
      if (!response.ok) return;

      //정상적으로 받았을 경우
      //json객체로 파싱 될 때 까지 await(대기)
      const json = await response.json();

      const jsonMovie = json.movieInfoResult.movieInfo;
      setMovie(jsonMovie);
      console.log('json: ', json);

      const directors = jsonMovie.directors;
      const actors = jsonMovie.actors;
      const genres = jsonMovie.genres;
      const audits = jsonMovie.audits;
      const nations = jsonMovie.nations;
      const showTm = jsonMovie.showTm;
      await movieCredits(directors, actors, genres, audits, nations, showTm);
    }
    //함수명 호출해서 실행하기
    boxOffice();
  }, []);

  return (
    <div className='movie-detail'>
      <article className='movie-image'></article>
      <section className='movie-detail-right'>
        <h3>{movie.movieNm}</h3>
        <h5>{movie.movieNmEn}</h5>
        <hr />
        <div className='movie-detail-info'>
          <p>{movieCreditStr}</p>
          <p>{movieinfo}</p>
          <p>개봉 : {formatDate(movie.openDt)}</p>
        </div>
      </section>
    </div>
  );
}
function formatDate(yyyymmdd) {
  if (!yyyymmdd || yyyymmdd.length !== 8) return '';
  return `${yyyymmdd.slice(0, 4)}-${yyyymmdd.slice(4, 6)}-${yyyymmdd.slice(
    6,
    8
  )}`;
}
