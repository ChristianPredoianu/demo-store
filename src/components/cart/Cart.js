import { useState, useEffect, useContext } from 'react';
import CartItem from './CartItem';
import CtaBtn from '../UI/CtaBtn';

import CartContext from '../../store/cart-context';

import classes from './Cart.module.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  let cartItem = null;
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  if (cartItems) {
    cartItem = cartItems.map((cartItem) => (
      <CartItem
        key={cartItem.productId}
        img={cartItem.productImg}
        title={cartItem.productTitle}
        price={cartItem.productPrice}
      />
    ));
  }

  return (
    <div className={classes.cart}>
      <h3>Cart</h3>
      {cartItem}
      <p className={classes['total-amount']}>Total Amount: </p>
      <CtaBtn>Checkout</CtaBtn>
    </div>
  );
};

export default Cart;
