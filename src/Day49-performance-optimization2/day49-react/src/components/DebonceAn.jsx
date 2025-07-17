import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';

export default function DebonceAn() {
  const debounceChange = useCallback(
    debounce((value) => {
      console.log('Api 호출:', value);
    }, 300),
    []
  );
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    debounceChange(e.target.value); // 디바운스 적용
  };

  return (
    <div>
      <h3>Debounce를 이용해서 성능 향상</h3>
      <h6>위에 라이브러리를 위용해서 디바운스를 설정하는 방법</h6>
      <input onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}
