import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function WhoDidNotFinished() {
  //["leo", "kiki", "eden"] 	["eden", "kiki"] 	"leo"
  const [partic, setPartic] = useState('leo,kiki,eden');
  const [complet, setComplet] = useState('eden,kiki');
  const [result, setResult] = useState('');

  function solution(participant, completion) {
    let answer = '';
    const map = new Map();

    for (const p of participant) {
      if (map.has(p)) {
        map.set(p, map.get(p) + 1);
      } else {
        map.set(p, 1);
      }
    }

    for (let c of completion) {
      if (map.has(c)) {
        map.set(c, map.get(c) - 1);
        if (map.get(c) === 0) {
          map.delete(c);
        }
      }
    }
    answer = Array.from(map.keys())[0];
    return answer;
  }

  const handleClick = () => {
    const participant = partic.split(',');
    // console.log(participant);
    const completion = complet.split(',');
    // console.log(completion);
    const answer = solution(participant, completion);

    setResult(answer);
  };

  return (
    <div className='section'>
      <h2>완주하지 못 한 선수</h2>
      <InputComponent
        inputs={[
          {
            label: '참가선수들',
            value: partic,
            onChange: setPartic,
            type: 'text',
            id: 'test1-1',
          },
          {
            label: '완주선수들',
            value: complet,
            onChange: setComplet,
            type: 'text',
            id: 'test1-2',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      {result && <p>{JSON.stringify(result, null, 2)}</p>}
    </div>
  );
}
