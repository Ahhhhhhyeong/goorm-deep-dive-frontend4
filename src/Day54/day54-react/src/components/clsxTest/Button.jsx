
import React from 'react'

// clsx를 사용하지 않아서 코드가 약간 지저분한 상황!

export default function Button({primary,disabled, rounded}) {

  let className = 'btn '; // 기본적인 클래스명을 먼저 할당

  if(primary && disabled){
    className += 'btn-primary btn-disabled'
  }else if(primary){
    className += 'btn-primary'
  }else if(disabled){
    className += 'btn-disabled'
  }

  // 추가적ㅇ로 버튼을 둥굴게 만들기
  if(rounded){
    className += 'btn-rounded';
  }

  return <button className={className}>버튼</button>
}

/*
위에 내용들은 디자인이 추가되거나 클래스명이 추가되면 if/else 어마무시하게 
나올 수있다.

코드를 깔끔하게 처리하기 위해서는 clsx 
유지보수면으로 생각했을 때는 Button.module.scss 변경하기!
*/