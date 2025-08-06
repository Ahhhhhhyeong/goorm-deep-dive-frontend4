import React, { useEffect, useState } from 'react';

export default function ProblemOne() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState('())(()');

  useEffect(() => {
    //solution();
    solutionUsingStack();
  }, [input]);

  function solution() {
    // 빈 문자열 = 괄호 없음 = true
    if (input.length === 0) return setResult(true);

    const arr = input.split('');
    console.log(arr);

    // 1. 시작이 )이거나, 끝이 ( 인경우 false
    if (arr[0] === ')' || arr[arr.length - 1] === '(') {
      return setResult(false);
    }

    // 2. arr 길이가 홀수일 때 false
    if (arr.length % 2 != 0) return setResult(false);

    // 3. (와 )의 개수가 안맞는 경우 false
    const openCount = arr.filter((ch) => ch === '(').length;
    const closeCount = arr.filter((ch) => ch === ')').length;
    if (openCount != closeCount) return setResult(false);

    // 4. open close가 쌍을 이루지 않는 경우 [())(()]=>중간에 짝이 안맞음
    // 스택으로 수정 해보기!
    const checkMap = {};
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element === '(') {
        checkMap[index] = 0;
        index++;
      } else {
        // ')' 의 경우
        //만약 value에 0이 없는경우
        const key = getKeyByValue(checkMap);
        if (key === undefined) return setResult(false);
        checkMap[key] = 1;
      }
    }
    setResult(true);
  }

  function getKeyByValue(obj) {
    return Object.keys(obj).find((key) => obj[key] === 0);
  }

  function solutionUsingStack() {
    // Stack 사용하여 풀어보기
    const arr = input.split('');
    if (arr.length === 0) return setResult(false);
    if (arr[0] === ')' || arr[arr.length - 1] === '(') {
      return setResult(false);
    }

    const pairChk = [];
    while (arr.length > 0) {
      // 첫번째거부터
      const pairPop = arr.shift();
      // open 이면 chk에 넣기
      if (pairPop === '(') {
        pairChk.push(pairPop);
        continue;
      } else if (pairPop === ')' && pairChk.length > 0) {
        pairChk.pop();
      }
      if (arr.length === 0) break;
    }

    return pairChk.length === 0 ? setResult(true) : setResult(false);
  }

  return (
    <div className='bg-whit space-y-6'>
      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>입력값</h3>
        <p className='text-zinc-700 text-sm'>{input}</p>
      </section>

      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>출력값</h3>
        <p className='text-zinc-700 text-sm'>{result ? 'true' : 'false'}</p>
      </section>
    </div>
  );
}
