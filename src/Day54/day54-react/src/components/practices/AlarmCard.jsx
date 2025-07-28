import clsx from 'clsx';
import React from 'react';
import './AlarmCardStyle.scss';

export default function AlarmCard({ type = 'INFO' }) {
  return (
    <div
      className={clsx('base-card', {
        info: type === 'INFO',
        success: type === 'SUCCESS',
        warning: type === 'WARNING',
        error: type === 'ERROR',
      })}>
      각 타입 별 카드 색상 다르게
    </div>
  );
}
