import React, { useState } from 'react';
import { tree } from '../data/TreeData';

export default function Preorder() {
  function prdorder(node, result = []) {
    // 객체가 없다면 함수 종료
    if (!node) return;
    // 1. 부모를 먼저 방문
    result.push(node.value);
    // 2. 왼쪽 방문
    prdorder(node.left, result);
    // 3. 오른쪽 방문
    prdorder(node.right, result);
    // console.log('node: ', node);
    return result;
  }

  return (
    <div>
      <h1>전위 순회 Pre-order</h1>
      <h3>순서 : {prdorder(tree).join('-')}</h3>
    </div>
  );
}
