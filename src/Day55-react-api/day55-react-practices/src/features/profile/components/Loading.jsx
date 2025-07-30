import React from 'react';
import ReactIcon from '../../../assets/react.svg';
import '../Loading.scss';

export default function Loading() {
  return (
    <div className='loading-container'>
      <img src={ReactIcon} alt='Loading...' className='loading-spinner' />
    </div>
  );
}
