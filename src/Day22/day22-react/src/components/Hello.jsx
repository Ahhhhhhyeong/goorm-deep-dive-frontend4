// 클래스 컴포넌트!!

import { Component } from 'react';

// 클래스, 함수형 컴포넌트든 항상 첫 글자는 대문자로!!!
// extends : 상속 (여기서는 Component를 상속 받음)
class Hello extends Component {
  // //데이터를 전달 받을 때! constructor(생성자) 사용
  // constructor(props) {
  //   // this는 현재 페이지(Hello.jsx)객체를 나타냄
  //   this.state = props.count;
  // }
  render() {
    return <h1>Hello! This is Class Component</h1>;
  }
}

//내보내기!!
export default Hello;
