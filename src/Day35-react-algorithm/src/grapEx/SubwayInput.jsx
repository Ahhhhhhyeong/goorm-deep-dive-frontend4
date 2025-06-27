import React, { useState } from 'react';
import { subwayNames, subwayList } from '../data/StaticData';
import { Link } from 'react-router-dom';

/**
 * 입력창에 역 이름 입력
 * 버튼을 클릭 시 해당 역에서 연결된 모든 역을 화면에 출력
 * 연결 정보는 subway 인접 행렬로 확인해서 출력
 */

export default function SubwayInput() {
  // 역을 입력한 값을 기억하는 변수
  const [input, setInput] = useState('');

  // 입력받은 역의 연결된 인접행렬을 저장
  const [connected, setConnect] = useState([]);

  // static 데이터 복사
  const subway = subwayList;

  /** 버튼을 클릭하면 역의 정보가 있는지 확인
   * 정보가 있을 때 = 데이터 출력
   * 없으면 = 함수 종료
   */
  function handleSearch() {
    /**예외 상황
     * 사용자가 역을 입력했을 때 역이 존재하지 않을 수 있음
     * indexOf(val)
     * => 배열안에서 값이 잇으면 공간의 번호를 준다.
     * => 배열안에 값이 없으면 -1
     * trim()
     * => 값에 공백이 있을 수 있으니 앞쪽과 뒷쪽의 공백을 모두 제거하는 함수
     */
    const index = subwayNames.indexOf(input.trim());
    //역이 존재하지 않는 경우
    if (index === -1) {
      alert('존재하지 않는 역입니다.');
      setConnect([]);
      return;
    }

    //역이 존재하는 경우
    const connections = subwayList[index]
      .map((val, idx) => {
        return Number(val) === 0 ? null : subwayNames[idx];
      })
      .filter(Boolean);
    //filter(item => Boolean(item)) => 풀어쓰면 이렇게 됨
    //  -> null, undefined, 빈공간, false, 0가 들어오면 값을 제거하고 정상적인 문자들만 남김
    console.log('?', connections);
    setConnect(connections);
  }

  return (
    <div>
      <h1>지하철 노선도 2</h1>
      <div className='m-4'>
        <input
          type='text'
          className='border border-zinc-300 p-2 rounded-sm mr-3'
          onChange={(e) => setInput(e.target.value)}
          placeholder='역 이름을 입력하세요!'
        />
        <button onClick={handleSearch}>연결된 역 찾기</button>
      </div>
      {connected.length > 0 && (
        <div>
          <h4 className='font-semibold text-lg mb-2'>{`[${input}]`}에서 연결 된 역</h4>
          <ul>
            {connected.map((station, idx) => (
              <li key={idx}>🚉 {station}</li>
            ))}
          </ul>
          <Link className='text-lg/10' to={'/subway'}>
            전체 노선도 보러가기
          </Link>
        </div>
      )}
    </div>
  );
}
