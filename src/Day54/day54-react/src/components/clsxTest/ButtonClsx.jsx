import clsx from 'clsx';
import React from 'react';

export default function ButtonClsx({ primary, disabled, rounded }) {
  return (
    <button
      className={clsx('btn', {
        'btn-primary': primary,
        'btn-disabled': disabled,
        'btn-rounded': rounded,
      })}>
      clsx 버튼적용
    </button>
  );
}
