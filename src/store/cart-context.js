import React from 'react';

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addToCart: (product) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
