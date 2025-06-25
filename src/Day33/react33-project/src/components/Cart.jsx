// 장바구니 아이템 추가, 삭제
import React, { useReducer } from 'react';

// 1. 처음 시작 값 설정 => null
const cartInitState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'REMOVE':
      //기존 배열에서 삭제할것만 삭제하고 나머지는 남겨놓기
      // filter() 배열을 자동으로 돌면서 남길것만 고름
      // 값은 필요없고, 번호만 쓸거라서 _는 무시, index 변수명 변경 가능.
      return state.filter((_, index) => index !== action.index);
  }
}

export default function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, cartInitState);
  return (
    <div>
      <h2>장바구니 아이템 추가 삭제</h2>

      <button
        onClick={() =>
          dispatch({
            type: 'ADD',
            item: '👓안경',
          })
        }>
        안경추가
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD',
            item: '🕶️선글라스',
          })
        }>
        선글라스 추가
      </button>
      <h2>장바구니 목록</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE',
                  index: index,
                })
              }>
              제거
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
