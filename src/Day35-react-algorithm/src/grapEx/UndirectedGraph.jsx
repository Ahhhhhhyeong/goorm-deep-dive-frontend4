import React from 'react';
import { nodeNames } from '../data/StaticData';

export default function GraphApp() {
  //2차원 배열
  // 이용해서 그래프를 그릴 예정이다
  const arr = [1, 2, 3, 4, 5]; //1차원배열

  const arr2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]; // 2차원 배열

  const adList = [
    [0, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 0],
  ];
  /*
 무방향 그래프를 인접행렬로 구현할 때 정점들을 배열의 인덱스로 표현하고 간선은 배열의 내의 값으로 두 정점이 연결 되어있다면 1로 표현
 두 정점이 연결되어있지 않다면 0으로 표현한다.
 a 0번째 저장
 b 1번째 저장
 c 2번쨰 저장
 d 3번째 저장
*/
  return (
    <div>
      <h1>무방향 그래프</h1>
      <table className='table-auto border-collapse w-md mt-5'>
        <thead>
          <tr>
            <th className='border border-gray-300'></th>
            {nodeNames.map((la, i) => (
              <th key={i} className='border border-gray-300'>
                {la}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {adList.map((row, i) => (
            <tr key={i}>
              <th className='border border-gray-300'>{nodeNames[i]}</th>
              {row.map((col, j) => (
                <td className={`border border-gray-300 text-center ${col ? 'bg-green-200' : ''}`} key={j}>
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
