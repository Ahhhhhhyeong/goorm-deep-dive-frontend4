import React from 'react';
import { subwayNames, subwayList } from '../data/StaticData';

export default function SubwayGraph() {
  return (
    <div>
      <h1>지하철 노선도를 그래프로</h1>
      <ul className='text-left mt-4'>
        {subwayNames.map((station, i) => (
          <li key={i}>
            <strong>{station}</strong> ➡️ 연결된 역 :{' '}
            {subwayList[i]
              .map((isConnected, j) => (isConnected ? subwayNames[j] : null))
              .filter((name) => name !== null)
              .join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
