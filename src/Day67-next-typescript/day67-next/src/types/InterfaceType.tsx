// 사용자와 관리자 구분

interface User {
  id: string;
  pw: string;
}

interface Admin extends User {
  role: 'admin' | 'superadmin';
}

// 물건 : 기본상품
interface Product {
  id: number;
  title: string;
  price: number;
}

// 할인 상품
interface DiscountProduct extends Product {
  discountRate: number;
}

// 블로그 글
interface Post {
  id: number;
  title: string;
  content: string;
}

// 기본 블로그 글에 추천여부(추천수)를 추가
interface FeaturedPost extends Post {
  likes: number;
}
