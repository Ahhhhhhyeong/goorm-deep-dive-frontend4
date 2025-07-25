import React from 'react';
import { useToggle } from '../hooks/useToggle';
import ButtonComponents from '../components/ButtonComponents';

export default function BasicTogglePage() {
  const [flag, { toggle, setTrue, setFalse }] = useToggle(false);

  return (
    <div>
      <h2 className='text-lg font-bold my-4'>BasicTogglePage</h2>

      <div className='flex gap-2'>
        <ButtonComponents onClick={toggle}>열기/닫기</ButtonComponents>
        <ButtonComponents onClick={setTrue}>강제로 열기</ButtonComponents>
        <ButtonComponents onClick={setFalse}>강제로 닫기</ButtonComponents>
      </div>

      {flag && (
        <div className='w-mb h-mb boder-1 boder-pink-300 rounded'>
          <p className='text-mb text-rose-400'>모달 열림</p>
        </div>
      )}
    </div>
  );
}
