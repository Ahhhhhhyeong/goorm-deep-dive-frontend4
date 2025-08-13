// (주문조회)get,post ,(주문상태변경)patch 요청들을 처리하는 곳!
// 배송완료,배송중,배송 준비
export const mockOrders = [
  {
    id: 101,
    user: '홍길동',
    product: '티셔츠',
    quantity: 2,
    status: '배송 준비',
  },
  {
    id: 102,
    user: '김영희',
    product: '청바지',
    quantity: 1,
    status: '배송 중',
  },
];
