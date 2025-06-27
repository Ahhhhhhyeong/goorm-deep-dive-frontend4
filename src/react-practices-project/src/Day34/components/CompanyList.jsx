import React from 'react';

export default function CompanyList({ nodes, openState, toggle, level = 0 }) {
  return nodes.map((node) => {
    const isOpen = openState[node.id];
    const hasChildren = node.children && node.children.length > 0;
    console.log('이름: ', node.name, ' 직책: ', node.role, ' 오픈 여부: ', openState, ' 레벨: ', level);
    return (
      <div key={node.id} className='ml-2 cursor-pointer' style={{ marginLeft: level * 10 }}>
        <p onClick={() => hasChildren && toggle(node.id)}>
          L {node.name} ({node.role})
        </p>
        {hasChildren && isOpen && (
          <CompanyList nodes={node.children} openState={openState} toggle={toggle} level={level + 1} />
        )}
      </div>
    );
  });
}
