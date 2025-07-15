import React, { useState } from 'react';
import InputComponent from '../../utils/InputComponent';

export default function Question2() {
  const [words, setWords] = useState('CODE,COED,CDEO');
  const [correct, setCorrect] = useState('CODE');
  const [result, setResult] = useState(null);

  function checkWord(typo, basic) {
    if (typo === basic) return 0;
    let cnt = 0;
    for (let i = 0; i < typo.length; i++) {
      //charCodeAt: 아스키코드 반환 / charAt: 문자 반환
      if (typo.charAt(i) !== basic.charAt(i)) cnt++;
    }
    return cnt;
  }

  const handleClick = () => {
    const wordArr = words.split(',').map((v) => v.trim());
    if (wordArr.length === 0) return;
    //수정해야하는 단어(오타부분) 카운트
    let count = 0;
    for (const typo of wordArr) {
      count += checkWord(typo, correct);
    }
    setResult(count);
  };
  return (
    <div className='section'>
      <h3>문제4 단어의 오타 수정하기</h3>
      <InputComponent
        inputs={[
          {
            label: '단어여러개 입력',
            value: words,
            onChange: setWords,
            type: 'text',
            id: 'test2-1',
            placeholder: '단어를 쉼표로 연결하여 입력해주세요.',
          },
          {
            label: '본래단어',
            value: correct,
            onChange: setCorrect,
            type: 'text',
            id: 'test2-2',
            placeholder: '오타가 나지않은 본래 단어를 입력해주세요.',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>바꾸어야하는 문자 개수: {result}</p>
    </div>
  );
}
