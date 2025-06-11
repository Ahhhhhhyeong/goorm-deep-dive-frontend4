import React from 'react';

export default function SubMenuItem({ item, isClick = false }) {
  return (
    <div className={`button-groups-item ${isClick ? 'isClick' : ''}`}>
      <a href='#'>{item}</a>
    </div>
  );
}
