import React from 'react';
import { nodeNames } from '../data/StaticData';

export default function DirectedGraph() {
  const adList = [
    [0, 1, 0, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ];

  return (
    <div>
      <h1>방향 그래프</h1>
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
