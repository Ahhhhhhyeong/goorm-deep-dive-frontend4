import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function BestAlbums() {
  const [gen, setGen] = useState('classic,pop,classic,classic,pop');
  const [run, setRuns] = useState('500,600,150,800,2500');
  const [result, setResult] = useState(null);

  function solution(genres, plays) {
    let answer = [];

    const songs = new Map();
    genres.forEach((v, idx) => {
      if (!songs.has(v)) {
        songs.set(v, new Map());
      }
      songs.get(v).set(idx, plays[idx]);
    });
    // console.log(songs);

    //제일 각 장르별로 제일 큰 value의 인덱스 값이 큰 수대로 정렬
    songs.forEach((v, key) => {
      console.log('key: ', key);
      console.log('val: ', v);
    });

    return answer;
  }

  const handleClick = () => {
    const genres = gen.trim().split(',');
    const plays = run.trim().split(',');
    setResult(solution(genres, plays));
  };

  return (
    <div className='section'>
      <h2>베스트 앨범</h2>
      <p>입력은 띄어쓰기없이 쉼표로만 구분해주세요.</p>
      <InputComponent
        inputs={[
          {
            label: '장르',
            value: gen,
            onChange: setGen,
            type: 'text',
            id: 'test2-1',
          },
          {
            label: '음악재생횟수',
            value: run,
            onChange: setRuns,
            type: 'text',
            id: 'test2-2',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>{result && JSON.stringify(result)}</p>
    </div>
  );
}
/**
 * genres 	
 * plays 	
 * return
["classic", "pop", "classic", "classic", "pop"] 	
[500, 600, 150, 800, 2500] 	
[4, 1, 3, 0]
 */
