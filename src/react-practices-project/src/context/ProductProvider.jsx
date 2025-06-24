import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [cart, setCart] = useState([]); //장바구니 정보
  const [quantity, setQuantity] = useState(0); //물품 개수

  //공유할 값
  const item = {
    cart,
    setCart,
    quantity,
    setQuantity,
  };

  return <ProductContext.Provider value={item}>{children}</ProductContext.Provider>;
}

function useProductContext() {
  return useContext(ProductContext);
}

export { ProductProvider, useProductContext };
