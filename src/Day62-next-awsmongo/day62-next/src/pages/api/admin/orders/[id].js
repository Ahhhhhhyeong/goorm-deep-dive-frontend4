import { mockOrders } from './mockOrder';

export default async function handler(req, res) {
  // id가 숫자가 아닌듯
  const { id } = req.query;

  if (req.method === 'GET') {
    const order = mockOrders.find((ord) => ord.id == id);

    if (!order) return res.status(404).json({ message: 'Order not found!' });

    return res.status(200).json(order);
  }
  return res.status(405).end();
}
