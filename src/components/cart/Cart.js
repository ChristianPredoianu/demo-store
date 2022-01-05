import { useContext } from 'react';
import CartItem from './CartItem';
import CtaBtn from '../UI/CtaBtn';

import CartContext from '../../store/cart-context';

import classes from './Cart.module.scss';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const { items, totalAmount } = cartCtx;

  const hasCartItems = items.length > 0;

  const addToCartHandler = (item) => {
    cartCtx.addToCart({ ...item, amount: 1 });
  };

  const removeFromCartHandler = (id) => {
    cartCtx.removeFromCart(id);
  };

  const cartItems = items.map((item) => (
    <CartItem
      key={item.productId}
      productImg={item.productImg}
      productTitle={item.productTitle}
      productPrice={`${item.productPrice} $`}
      productId={item.productId}
      productAmount={item.amount}
      onAddToCart={addToCartHandler.bind(null, item)}
      onRemoveFromCart={removeFromCartHandler.bind(null, item.productId)}
    />
  ));

  return (
    <div className={classes.cart} onMouseLeave={props.onHideCart}>
      <h3 className={classes['cart__heading']}>Cart</h3>
      {cartItems}
      {hasCartItems && (
        <p className={classes['cart__total-amount']}>
          Total Amount: {`$ ${totalAmount.toFixed(2)}`}
        </p>
      )}
      {hasCartItems && <CtaBtn>Checkout</CtaBtn>}
      {!hasCartItems && <p className={classes.empty}>Your cart is empty !</p>}
    </div>
  );
};

export default Cart;
