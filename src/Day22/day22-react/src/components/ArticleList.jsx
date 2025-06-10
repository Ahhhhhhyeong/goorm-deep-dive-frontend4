//블로그 내용을 나타내는 부분
import React from 'react';
import ArticleCard from './ArticleCard';

export default function ArticleList() {
  const articls = [
    {
      id: 0,
      avaterImg:
        'https://item.kakaocdn.net/do/b563e153db82fde06e1423472ccf192c960f4ab09fe6e38bae8c63030c9b37f9',
      profile: '우유헛간',
      time: '1시간 전',
      title: '올해 잘한 일 2가지',
      content:
        '올해 잘한 일 2가지가 있는데, 하나는 출판 계약을 한 것 초고는 이미 다 집필했고, 서서히 출판사와 함께 편집 할 예정입니다. 내년 신간으로, 올해의 책 만들어보려고 합니다. 나머지 하나는 유튜브를 시작한 것 항상 느끼는 거지만, 인간은 무언가 새로 도전할 때 살아있음을 느끼는 거 같습니다. 저에게 유튜브가 그러했습니다. 지금 구독자 수가 2.4만명입니다. 저의 장기적인 목표는 유튜브 실버 버튼(10만 달성)을 받아 보는 겁니다. 받게 되면, 저에게 큰 영광의 성취이지 않을까 싶습니다. +@@ 나머지 하나는, 남은 기간 동안 만들어보려고 합니다. 유튜브 롱폼도 열심히 올리고 있는데, 반응이 그리 있지는 않지만 꾸준히 하고 있습니다. 일단, 반복하다보면 기회가 오기 때문입니다. 그리고 좀 더 나은 방법을 찾게 되고요 2025년이 벌써 반을 지난 거 아시나요? 신년 목표로 잡으셨던 일 잘이루고 계십니까? 아직, 시작하지 않았다면 지금이라도 하면 됩니다. 반 년이라는 시간이 남았으니까요. 나의 서사는 나만이 만들어갑니다. 올해 연말, 잘한 일 3가지를 말할 수 있도록 노력해봅시다. 내가 움직이기 나름입니다. 오늘도 파이팅^^',
      image:
        'https://media.bunjang.co.kr/product/276240460_2_1719675006_w360.jpg',
      likes: 104,
      commnets: 1,
    },
    {
      id: 1,
      avaterImg:
        'https://item.kakaocdn.net/do/b563e153db82fde06e1423472ccf192c960f4ab09fe6e38bae8c63030c9b37f9',
      profile: '그레이스웬디',
      time: '2시간 전',
      title: '우리가 가족이 될 수 있을까요',
      content:
        '키워드 : 연대, 사랑, 책임, 희생, 가족, 그리움. 한 줄 평 : 전쟁 속에서 살아가는 아프간 여성들의 삶을 그린 역사 소설 지붕 위에서 희미하게 반짝이는 달들을 셀 수도 없고 벽 뒤에 숨은 천 개의 찬란한 태양들을 셀 수도 없으리. 우리는 흔히 전쟁을 숫자로 기억한다. 몇 명이 죽었고, 얼마나 많은 도시가 무너졌는지... 그러나 <천 개의 찬란한 태양>은 숫자가 아닌 사람의 이야기, 특히 여성의 삶을 통해 아프가니스탄의 참혹한 역사 속 진실을 들려준다. 이 소설은 눈부시게 아름답고도 끔찍하게 고통스러운 이야기다. 그 속에서 피어난 연대와 희생은 오랜 여운을 남긴다. 소설 속 이야기는 허구가 아니다. 지금도 아프간의 여성들은 소설 속에서처럼 살아가는지도 모르기에 호세이니는 아프간을 많은 독자들에게 알리고 싶었다. 그리고 아프간 여성들의 용기 있는 삶에 대한 경외심으로 이 책을 썼다. 호세이니는 이 작품을 통해 두 여성, 마리암과 라일라의 삶을 중심에 세운다. 서로 너무도 다른 출발선을 가진 두 여자가 전쟁과 가부장제, 가난이라는 현실에 의해 한 남자의 아내로 묶이며, 적에서 동지로, 그리고 마침내 서로를 지켜주는 가족이 되는 과정을 그...',
      image:
        'https://media.bunjang.co.kr/product/276240460_2_1719675006_w360.jpg',
      likes: 251,
      commnets: 10,
    },
    {
      id: 2,
      avaterImg:
        'https://item.kakaocdn.net/do/b563e153db82fde06e1423472ccf192c960f4ab09fe6e38bae8c63030c9b37f9',
      profile: '아론',
      time: '11시간 전',
      title: '영화 신명 정보 출연진 관람평 왜 이렇게 뜨거운 걸까',
      content:
        '부족한 제작비와 현실적 어려움을 뚫고 손익분기점을 돌파한 영화 <신명> 정보를 정리하였습니다. "진실은 불편하지만, 외면할 수 없다"라는 말이 떠오르는 이 영화는 정치, 주술, 미디어가 얽힌 복잡한 현실을 날카롭게 직시하며, 마치 거울을 보는 듯한 불편함을 안기는데요. 익숙한 인물과 장면 속에 낯선 긴장감이 흐...',
      image:
        'data:image/jpeg;base64,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',
      likes: 65,
      commnets: 5,
    },
  ];
  return (
    <div className='article-list'>
      {/* 
      {...articls[0]} ... :스프레드, 안에 내용을 펼쳐서 복사하거나 전달해주는 연산자
      <ArticleCard key={articls[0].id} {...articls[0]} />
      */}
      {/* map 사용! */}
      {articls.map((value) => (
        <ArticleCard key={value.id} {...value} />
      ))}
    </div>
  );
}
