// 로그아웃 : 쿠키 삭제

import { deleteCookie } from 'cookies-next';

export default function handler(req, res) {
  deleteCookie('adminToken');
  return res.status(200).json({ message: 'delte token ' });
}
