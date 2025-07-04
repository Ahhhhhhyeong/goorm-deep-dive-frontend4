import React, { useEffect, useState } from 'react';

export default function Lcs() {
  // 두 문자열에서 순서를 지키며 가장 길게 겹치는 부분을 찾는다
  // 비교할 두 문자열
  const [strA, setStrA] = useState('ABCDBAS');
  const [strB, setStrB] = useState('BDAB');
  // 계산된 결과를 2차원 DP 테이블에 저장해서 상태 관리
  const [lcsLength, setLcsLength] = useState(0);
  const [dpTable, setDpTable] = useState([]);

  // 계산하는 함수
  const calculateLCS = (a, b) => {
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    // console.log(dp);
    // a index = i / b index = j
    /**
     dp[i][j] = a[0 ~ i-1] b[0 ~ j-1] 길이

     테이블을 어떻게 채우는가?
     1. 글자가 같으면 +1
     2. 글자가 다르면 -> 둘 중 큰 값을 가져옴
     
     왜 1번부터 시작? 0번째 행열은 빈값?
     - 문자열들을 비교할 때, 0번째는 공백으로 인식한다.
     - 0번째는 공집합 처리용
     - 비교 범위가 넘어갈 수 있어서 1번부터 시작
     */
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
      //최종 길이 저장
      setLcsLength(dp[a.length][b.length]);
      setDpTable(dp);
    }
  };

  useEffect(() => {
    calculateLCS(strA, strB);
  }, [strA, strB]);

  return (
    <div className='section'>
      <h2>🧬 LCS (Longest Common Subsequence)</h2>

      <div style={{ marginBottom: 10 }}>
        <label>
          문자열 A:
          <input value={strA} onChange={(e) => setStrA(e.target.value)} />
        </label>
        <label style={{ marginLeft: 20 }}>
          문자열 B:
          <input value={strB} onChange={(e) => setStrB(e.target.value)} />
        </label>
      </div>

      <p>
        🔍 가장 긴 공통 부분 수열의 길이: <strong>{lcsLength}</strong>
      </p>

      <h4>🧾 DP 테이블 시각화</h4>
      <table border='1' cellPadding='5' style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            {strB.split('').map((char, j) => (
              <th key={j}>{char}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dpTable.map((row, i) => (
            <tr key={i}>
              <th>{i === 0 ? '' : strA[i - 1]}</th>
              {row.map((val, j) => (
                <td key={j} style={{ backgroundColor: val > 0 ? '#e0f7fa' : '#f0f0f0' }}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
