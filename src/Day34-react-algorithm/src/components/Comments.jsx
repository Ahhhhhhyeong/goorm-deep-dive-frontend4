import React from 'react';

export default function Comments({ key, tree, level = 0 }) {
  /**
   *
   * @param { key, tree, level } param: key, node, 대댓글 확인용 레벨
   * tree=>
   * comments 를 전역변수로 할건지, props로 넘길건지...
   * 댓글이 추가되거나 뭔가 수정되기에 전역변수 context로 사용하는걸 권장함!!
   * 하지만 여긴 정적 댓글 데이터를 사용하기에 패스ㅎㅎ
   */
  return (
    <div
      key={key}
      style={{
        marginLeft: level * 15, //단계마다 들여쓰기
        borderLeft: '1px solid #ccc', //계층선 구분
        paddingLeft: 8,
        marginBottom: 10,
      }}>
      {/* 기본 댓글 */}
      <p>💌 {tree.text}</p>
      {/* 댓글 안의 댓글이 필요 */}
      {tree.children.map((child) => (
        <Comments key={child.id} tree={child} level={level + 1} />
      ))}
    </div>
  );
}
