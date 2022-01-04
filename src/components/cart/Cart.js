import { useContext } from 'react';
import CartItem from './CartItem';
import CtaBtn from '../UI/CtaBtn';

import CartContext from '../../store/cart-context';

import classes from './Cart.module.scss';

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const { items, totalAmount } = cartCtx;

  console.log(items);
  console.log(totalAmount);

  console.log(cartCtx);

  const removeFromCartHandler = (id) => {
    cartCtx.removeFromCart(id);
  };

  const cartItems = items.map((item) => (
    <CartItem
      key={item.productId}
      img={item.productImg}
      title={item.productTitle}
      price={`${item.productPrice} $`}
      id={item.productId}
      onRemoveFromCart={removeFromCartHandler.bind(null, item.productId)}
    />
  ));

  return (
    <div className={classes.cart}>
      <h3 className={classes['cart__heading']}>Cart</h3>
      {cartItems}
      <p className={classes['cart__total-amount']}>
        Total Amount: {totalAmount}{' '}
      </p>
      <CtaBtn>Checkout</CtaBtn>
    </div>
  );
};

export default Cart;
