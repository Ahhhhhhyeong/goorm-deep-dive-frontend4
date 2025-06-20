import React, { useEffect } from 'react';

export default function KakaoMap1() {
  const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_KEY;
  useEffect(() => {
    //항상 카카오라는걸 이용하기 위해서는 카카오 객체가 생성되었는지 확인을 해야함
    // console.log(window.kakao.maps);
    console.log('kakao.maps: ', kakao.maps);
    if (window.Kakao && kakao.maps) {
      //지도 생성 코드
      const container = document.getElementById('map');
      console.log(kakao.maps.LatLng);
      let options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      // const map = new kakao.maps.Map(container, options);
    }
  }, []);

  return (
    <div>
      <h1>Kakao Map</h1>
      <div id='map' className='w-[500px] h-[450px]'></div>
    </div>
  );
}
