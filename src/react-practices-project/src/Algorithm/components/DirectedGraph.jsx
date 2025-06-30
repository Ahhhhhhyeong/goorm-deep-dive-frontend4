import React, { useState } from 'react';

export default function DirectedGraph() {
  const cities = ['서울', '부산', '대전', '광주', '대구'];
  const maps = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ];
  const [inputCity, setInputCity] = useState('');
  const [result, setResult] = useState([]);

  const checkCity = () => {
    // console.log('click: ', inputCity);
    const index = cities.indexOf(inputCity.trim());
    // console.log(index);
    if (index === -1) {
      setResult([]);
      return;
    }
    // console.log('포함되어있는 도시');
    const linked = maps[index]
      .map((val, idx) => {
        return Number(val) === 0 ? null : cities[idx];
      })
      .filter(Boolean);
    setResult(linked);
  };

  return (
    <div className='m-4 text-center'>
      <h1 className='text-xl font-bold'>도시에서 연결된 도시 목록 출력</h1>
      <h3 className='text-lg font-semibold'>도시목록</h3>
      <p className='m-4'>{JSON.stringify(cities)}</p>
      <hr />
      <input
        className='border-1 border-zinc-300 mt-4 mr-3'
        type='text'
        onChange={(e) => setInputCity(e.target.value)}
        value={inputCity}
      />
      <button onClick={checkCity} className='px-3 text-lg rounded-lg bg-blue-500 text-white'>
        검색
      </button>
      <div className='text-mb mt-3'>
        {result.length === 0 ? (
          <p>목록에 없는 도시 입니다.</p>
        ) : (
          <p>
            ✅ {inputCity}에서 연결된 도시 : {result.join(',')}
          </p>
        )}
      </div>
    </div>
  );
}
