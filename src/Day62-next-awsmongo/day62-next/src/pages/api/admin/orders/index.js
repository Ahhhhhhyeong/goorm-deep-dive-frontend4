// 주문 목록 API
// get, post, patch 요청들을 처리
import { mockOrders } from './mockOrder';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(mockOrders);
  } else if (req.method === 'PATCH') {
    const { id, status } = req.body;
    console.log('id: ', id);
    console.log('status: ', status);

    // 내가 가져온 id값이 있니?없으면 404 있으면 변경!
    const order = mockOrders.find((ord) => ord.id === id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found!!' });
    }

    order.status = status;
    return res.status(200).json({ message: 'Order Update!', data: order });
  }
  return res.status(405).end();
}
