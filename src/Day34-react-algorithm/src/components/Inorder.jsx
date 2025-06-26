import React from 'react';
import { tree } from '../data/TreeData';

export default function Inorder() {
  function inorder(node, result = []) {
    console.log('호출시 node: ', node);
    //데이터가 null => retrun;
    if (!node) return;
    inorder(node.left, result); //1. 왼쪽자식 먼저확인
    result.push(node.value); //2. 부모노드 방문
    inorder(node.right, result); //3. 오른쪽자식 확인

    return result;
  }
  return (
    <div>
      <h1>중위 순회</h1>
      <h3>순서 : {inorder(tree).join('-')}</h3>
    </div>
  );
}
