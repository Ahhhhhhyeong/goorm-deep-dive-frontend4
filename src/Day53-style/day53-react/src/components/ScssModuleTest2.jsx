import React from 'react';
import styles from '../assets/scss/ScssModuleTest2.module.scss';

export default function ScssModuleTest2() {
  return (
    <div>
      <h1>SCSS 상속 실습 예제</h1>
      <h3>버튼 상속 예제</h3>
      <button className={styles.btnPrimary}>Primary 버튼</button>
    </div>
  );
}

/** 상속(Extend)
 * scss에서 가장 강력한 무기중에 하나가 바로 상속!
 * 기존 클래스의 스타일을 그대로 가져와서 다른 클래스에 붙여서 상속하는 기능
 * `@extend`
 *
 *
 * -----
 * styles.btn-primary => 객체 뒤에는 하이픈(-)을 못 쓴다.
 * 방법 1. styles["btn-primary"] 로 사용
 * 방법 2. btnPrimary로 수정 (camelCase 사용)
 *
 * scss 기준으로 파일 구조 및 분리
 * 언더 바(_)로 시작하는 scss파일은 css로 컴파일이 되지 않기 때문에 미리 기능/역할별로 scss를 파일을 분리해서 만들어두기도 함
 *    예시: _reset.scss / _variables.scss / _mixins.scss
 * 모두 적용될 수 있도록 index.css에 한번에 import
 *
 * 변수랑 mixin 많이 사용함
 *    브랜드 컬러, 폰트, z-index 같이 반복되는 스타일은 변수로 관리
 *    공통적인 스타일 패턴은 mixin으로 추출해서 재사용
 *    mixin은 변수로 받아서 js함수처럼 사용하는 경우도 있음
 *
 */
