import React, { useState } from 'react';
import ReactIcon from '../../assets/react.svg';
import './Loading.scss';
import clsx from 'clsx';
import Loading from './components/Loading';

export default function ProfilePage() {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      <h3>로딩바</h3>
      <div
        className={clsx('loading-box', {
          'loading-bg': isLoading,
          'normal-bg': !isLoading,
        })}>
        {/* 로딩 상태에 따라 SVG 표시 */}
        {isLoading && <Loading />}
        <button onClick={() => setLoading(!isLoading)}>{isLoading ? '로딩 멈추기' : '로딩 시작하기'}</button>
      </div>
    </div>
  );
}
