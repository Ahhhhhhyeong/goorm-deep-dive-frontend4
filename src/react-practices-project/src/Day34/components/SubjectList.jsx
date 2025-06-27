import React from 'react';

export default function SubjectList({ nodes, openState, toggle, level = 0 }) {
  return nodes.map((node) => {
    console.log(node.title);
    const isOpen = openState[node.id]; //open 여부
    const hasChildren = node.children && node.children.length > 0; //자식이 있는지 확인
    return (
      <div key={node.id} className='ml-2'>
        <p
          className={'cursor-pointer'}
          style={{ marginLeft: level * 10 }}
          onClick={() => hasChildren && toggle(node.id)} //자식이 있으면 toggle 업데이트
        >
          L {node.title}
        </p>
        {hasChildren && isOpen && (
          <SubjectList nodes={node.children} openState={openState} toggle={toggle} level={level + 1} />
        )}
      </div>
    );
  });
}
