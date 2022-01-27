import { useState } from 'react';

import CartCounter from '../UI/CartCounter';
import classes from './CartItem.module.scss';

const CartItem = (props) => {
  const [cartCounter, setCartCounter] = useState(0);

  const decreaseCartCountHandler = () => {
    if (cartCounter >= 1) {
      setCartCounter((prevState) => prevState - 1);
      props.onRemoveFromCart();
    }
  };

  const increaseCartCountHandler = () => {
    setCartCounter((prevState) => prevState + 1);
    props.onAddToCart();
  };

  const changeCountHandler = (e) => {
    if (e.target.value >= 1) {
      setCartCounter(e.target.value);
    }
  };

  return (
    <div className={classes['cart-item']}>
      <img
        src={props.productImg}
        alt="product"
        className={classes['product-img']}
      />
      <div className={classes['product-details']}>
        <p className={classes['product-details__title']}>
          {props.productTitle}
        </p>
        <p className={classes['product-details__price']}>
          {props.productPrice}
        </p>
        <p className={classes['product-details__amount']}>
          {`Amount: ${props.productAmount}`}
        </p>
        <div className={classes['product-details__counter']}>
          <CartCounter
            onDecreaseCartCount={decreaseCartCountHandler}
            onIncreaseCartCount={increaseCartCountHandler}
            onChangeCount={changeCountHandler}
            cartCount={cartCounter}
          />
        </div>

        <p
          className={classes['product-details__remove-product']}
          onClick={props.onRemoveFromCart}
        >
          Remove item
        </p>
      </div>
    </div>
  );
};

export default CartItem;
