import React, { useRef } from 'react';
import styles from '../assets/css/refTestComponent.module.css';

export default function Carousel() {
  const imgRef = useRef(null);
  const imgSizeRef = useRef([]);

  const imgList = [
    'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310112234917676.jpg',
    'https://previews.123rf.com/images/breakingdots/breakingdots2304/breakingdots230400781/202938341-cat-kawaii-character-cartoon-vector-illustration.jpg',
    'https://www.logoyogo.com/web/wp-content/uploads/edd/2024/05/logoyogo-1-16.jpg',
    'https://cdn.class101.net/images/66ee24e2-70af-4666-8143-0d9b0d2279f3',
    'https://i.pinimg.com/564x/9d/39/70/9d39702c75934e86b8afaec99d4c929b.jpg',
  ];

  const handleCarousel = (e) => {
    const clickPosition = e.target.name;
    const scrollContainer = imgRef.current;
    const widthCurrent = scrollContainer.scrollLeft; //이미지 컨테이너 현재 스크롤 위치
    const widthMax = scrollContainer.scrollLeftMax; // 이미지 컨테이너 스크롤 전체 너비

    //첫 이미지 너비 기준으로
    const imgWidth = imgSizeRef.current[0]?.offsetWidth || 0;
    const gap = 8; //gap-2 = 8px
    const scrollAmount = imgWidth + gap; //스크롤 될 너비
    //이미지 스크롤 계산
    let newScrollLeft = clickPosition === 'next' ? widthCurrent + scrollAmount : widthCurrent - scrollAmount;

    widthCurrent === widthMax
      ? imgRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
      : imgRef.current?.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  return (
    <div>
      <h1 className={styles.title}>이미지 캐러셀</h1>
      <div className={`relative w-[20rem] border-1 border-zinc-300`}>
        {/* 버튼 이미지 영역 바깥에 고정 */}
        <button name='prev' onClick={handleCarousel} className={`absolute cursor-pointer h-full w-12 m-0 left-0`}>
          ＜
        </button>
        <button name='next' onClick={handleCarousel} className={`absolute cursor-pointer h-full w-12 m-0 right-0`}>
          ＞
        </button>
        {/* 스크롤 되는 부분 분리 */}
        <div ref={imgRef} className='overflow-x-auto flex gap-2 size-full'>
          {imgList.map((img, index) => (
            <img
              ref={(el) => (imgSizeRef.current[index] = el)}
              src={img}
              key={index}
              className='w-[300px] flex-shrink-0 object-contain'
              alt={`img-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
