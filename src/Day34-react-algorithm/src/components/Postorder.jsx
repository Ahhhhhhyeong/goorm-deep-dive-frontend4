import React from 'react';
import { tree } from '../data/TreeData';

export default function Postorder() {
  function postorder(node, result = []) {
    // 객체가 없으면 리턴
    if (!node) return;
    // 왼쪽부터 탐색
    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.value);
    console.log(result);
    return result;
  }
  return (
    <div>
      <h1>후위순회 Post-order</h1>
      <h3>순서 :{postorder(tree).join('-')}</h3>
    </div>
  );
}
