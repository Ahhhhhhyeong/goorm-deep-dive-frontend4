import React from 'react';

export default function GameList({ nodes, clickState, toggle, level = 0 }) {
  return nodes.map((node) => {
    const isClick = clickState[node.id];
    const hasOptions = node.options && node.options.length > 0;

    console.log(node.text);

    return (
      <button
        key={node.id}
        // onClick={() => }
        className='bg-blue-100 text-red-600 text-lg p-4 mr-3 rounded-xl'>
        {node.text}
      </button>
    );
  });
}

function testGameList({ currentNode, clickState, onBack, canGoBack }) {
  const isEnding = !!currentNode.result; //값을 불리언타입으로 변환
  return (
    <div>
      {canGoBack && (
        <button onClick={onBack} className='bg-gray-200 text-gray-800 px-3 py-1 rounded-lg mb-4'>
          ⬅️ 뒤로가기
        </button>
      )}
      {isEnding ? (
        <div className='p-4 bg-yellow-100 rounded-lg text-lg font-semibold text-center'>🏁 {currentNode.result}</div>
      ) : (
        <>
          <h3 className='text-lg font-semibold text-green-500 mb-3'>{currentNode.question}</h3>
          <div className='space-y-3'>
            {currentNode.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(opt.next)}
                className='bg-blue-100 text-red-600 text-lg p-4 mr-3 rounded-xl w-full text-left'>
                {opt.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/*
  제일 먼저 스타트를 누르면 이게 실행 
  -> 트리구조로 되어있을거아님?
  -> 제일 먼저 나오는 부모에서 다음 단계를 눌렸을 때,
  -> 부모는 안보이고 그 자식만 보이게
  -> level이 0인경우는 뒤로가기 버튼이 없고, 이후부터 뒤로가기 버튼이 있어서
  -> 뒤로가기 선택 시, 부모가 나타나도록 
*/
