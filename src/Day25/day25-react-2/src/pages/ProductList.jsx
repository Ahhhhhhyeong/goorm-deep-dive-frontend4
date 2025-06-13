import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  //https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json'
    )
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        console.log(json.slice(0, 4));
      });
  }, []);
  return (
    <div className='product-wrapper'>
      {products.map((product, index) => (
        <div key={index} className='product-item'>
          <Link to={`/product/${index}`}>
            <img src={product.image} alt='제품사진' />
          </Link>
          <h4>{product.name}</h4>
        </div>
      ))}
    </div>
  );
}
