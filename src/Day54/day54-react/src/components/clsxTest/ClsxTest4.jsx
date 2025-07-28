import clsx from 'clsx';
import React, { useState } from 'react';

export default function ClsxTest4() {
  const [type, setType] = useState('success');

  return (
    <div>
      <div
        className={clsx('box', {
          success: type === 'success',
          error: type === 'error',
        })}>
        예제3: 객체 조건({type})
      </div>

      <button onClick={() => setType('success')}>성공</button>
      <button onClick={() => setType('error')}>실패</button>
    </div>
  );
}
