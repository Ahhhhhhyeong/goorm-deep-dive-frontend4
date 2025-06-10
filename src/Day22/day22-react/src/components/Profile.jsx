import React from 'react';
import Avater from './Avater';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <Avater imge={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
