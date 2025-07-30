import Image from 'next/image';
import React from 'react';

export default function ImagePage() {
  return (
    <div>
      <h1>이미지 테스트</h1>
      <h3>일반 html &lt;img&gt;</h3>
      <img
        src='/playing.png'
        alt='playimg-html'
        width={600}
        height={400}
        style={{ border: '2px solid red', marginBottom: '50px' }}
      />
      <h3>next &lt;Image /&gt;</h3>
      <Image src='/playing.png' alt='익명이놀아줘' width={600} height={400} style={{ border: '2px solid green' }} />
    </div>
  );
}

/*
error
```
Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.
```
=> alt 추가하기

*/
