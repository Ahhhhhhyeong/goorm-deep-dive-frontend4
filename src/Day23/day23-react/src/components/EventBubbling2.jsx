import React from 'react';

export default function EventBubbling2() {
  return (
    <div
      onClickCapture={() => {
        alert('div');
      }}>
      <section
        onClickCapture={() => {
          alert('section');
        }}>
        <button
          onClickCapture={(e) => {
            alert('button');
          }}>
          click
        </button>
      </section>

      {/* 
      버블링
      <section
        onClick={() => {
          alert('section');
        }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert('button');
          }}>
          click
        </button>
      </section> */}
    </div>
  );
}
