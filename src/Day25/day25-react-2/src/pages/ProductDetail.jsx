import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const [item, setItem] = useState();
  const { id } = useParams();
  useEffect(() => {
    console.log('id', id);
    fetch(
      'https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json'
    )
      .then((response) => response.json())
      .then((json) => {
        setItem('detail', json.slice(id, id + 1));
        console.log(json.slice(id, id + 1));
      });
  }, []);
  return <div>ProductDetail</div>;
}
