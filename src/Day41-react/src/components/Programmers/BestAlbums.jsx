import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function BestAlbums() {
  const [gen, setGen] = useState('classic,pop,classic,classic,pop');
  const [run, setRuns] = useState('500,600,150,800,2500');
  const [result, setResult] = useState(null);

  function solution(genres, plays) {
    let answer = [];
    const genreTotal = {};

    //장르별 플레이수
    for (let i = 0; i < genres.length; i++) {
      if (!Object.keys(genreTotal).includes(genres[i])) {
        genreTotal[genres[i]] = 0;
      }
      genreTotal[genres[i]] += Number(plays[i]);
    }

    //장르 플레이수 내림차수 정렬
    const genreRank = Object.entries(genreTotal)
      .sort(([, a], [, b]) => b - a)
      .map(([k, v]) => k);

    //베스트노래 탐색
    for (const genre of genreRank) {
      let temp = [];
      for (let i = 0; i < genres.length; i++) {
        if (genres[i] === genre) {
          temp.push([i, plays[i]]);
        }
      }
      const sorted = temp.sort((a, b) => b[1] - a[1]).slice(0, 2);
      answer.push(...sorted.map((music) => music[0]));
    }

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
