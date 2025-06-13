import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json'
    )
      .then((response) => response.json())
      .then((json) => {
        setItem(json.slice(Number(id), Number(id) + 1));
      });
  }, []);
  return (
    <>
      {item.map((value, index) => (
        <div className='item-wrapper' key={index}>
          <div className='item-image'>
            <img src={value.image} alt='제품사진' />
          </div>
          <div className='item-info'>
            <h3>{value.name}</h3>
            <div className='item-price'>
              <p className='text-discount'>{value.discount}</p>
              <p>{value.price}</p>
            </div>
            <p className='text-original-price'>{value.original_price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
/**
 * json.slice(id, id+1);
 * => 특정값 1개만 출력을 하고싶은데, 여러개의 값이 출력이 되는 버그가 생김
 *
 * id 값이 숫자값이 아닐 수 있다!
 * id = '2'일 때, id + 1 = 21 이 될 수 있다!!
 *
 * 확실하게 숫자라는 것을 알려주기 위해 Number(id) 로 수정해준다!
 * json.slice(Number(id), Number(id) + 1)
 * 🗂️
 */
