import { products } from '@/data/products';

export function getProduct() {
  return products;
}

// 상품 정보를 조회하는 가상의 함수
export function getProductById(id) {
  return products.find((prd) => prd.id === id);
}
