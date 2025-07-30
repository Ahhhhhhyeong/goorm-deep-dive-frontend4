import Image from 'next/image';
import React from 'react';

export default function Product() {
  let prd = ['신발', '로봇', '책상'];

  return (
    <div>
      <h1>상품 페이지</h1>
      {prd.map((prd, idx) => (
        <div key={idx}>
          {/* <img src='/playing.png' /> */}
          <Image src='/playing.png' alt='놀아줘익명' width={100} height={100} />
          <h4>{prd}</h4>
        </div>
      ))}
    </div>
  );
}

/*
image => public directory에 저장
public : 사이트 실행 시 자동으로 사이트의 가장 최상위(root)로 이동
=> 이렇게하면 성능이 떨어짐

실무에서는 웹 성능 최적화를 진행
next에서 이미지 컴포넌트를 제공함
<Image src='' alt='' />
일반 img 태그는 로딩이 느리고 콘텐츠 밀림이 생길 수 있음
=> 레이아웃 쉬프트 현상
(이미지가 먼저 로드되고 텍스트가 나와야하는데, 이미지가 늦게 올라오는 경우 생기는 현상)

Lazy Loading
  - 화면에 보이기 전까지 이미지를 로드하지 않음
  - 초기 속도가 빠름
  - 사이즈 최적화 진행
    - 다양한 해상도에 맞춰 이미지 크기를 자동으로 조절
  - 레이아웃 쉬프트 방지
    - 이미지가 미리 공간을 확보 -> 콘텐츠 밀림 방지

*/
