import React from 'react';
import styles from '../assets/scss/ScssTest2.module.scss';

export default function ScssTest2() {
  return (
    <div className={styles.card}>
      <h2>title</h2>
      <p>contents</p>
    </div>
  );
}

/*
파일명.module.scs
=> 모듈 방식으로 변경했을 때는 일반 css가 먹히지 않음
=> 호출하는 방식을 다르게 해야함 
=> css클래스 이름이 일반 문자열이 아니라 js의 객체로 import
=> 각 클래스 명이 고유한 값으로 맵핑이 됨
  - 이름충돌이 없고 안전하게 사용 가능
=> styles 객체에 저장
*/
