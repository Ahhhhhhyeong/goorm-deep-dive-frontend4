import React from 'react';

export default function Avater({ imge, isNew }) {
  return (
    <div className='avater'>
      <img className='photo' src={imge} alt='avatar' />
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
