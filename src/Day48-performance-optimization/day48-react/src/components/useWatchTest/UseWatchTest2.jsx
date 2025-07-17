import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

// 부분 컴포넌트
function NameWatcher({ control }) {
  const name = useWatch({ control, name: 'name' });
  console.log('[NameWatcher] 컴포넌트 리 렌더링됨!');
  return <p>지금 입력한 이름: {name}</p>;
}

export default function UseWatchTest2() {
  const methods = useForm();

  console.log('🔍 [App] 전체 컴포넌트 렌더링됨!');

  return (
    <div>
      <h1>useWatch 성능 확인</h1>
      <input type='text' {...methods.register('name')} />
      <NameWatcher control={methods.control} />
    </div>
  );
}
