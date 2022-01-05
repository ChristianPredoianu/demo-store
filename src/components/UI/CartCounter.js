import CartCounterBtn from './CartCounterBtn';

import classes from './CartCounter.module.scss';

const CartCounter = (props) => {
  return (
    <div className={classes['cart-counter-wrapper']}>
      <div className={classes['cart-counter']}>
        <CartCounterBtn handleClick={props.onDecreaseCartCount}>
          -
        </CartCounterBtn>
        <input
          className={classes['quantity-input']}
          type="text"
          name="quantity"
          onChange={props.onChangeCount}
          value={props.cartCount}
        />
        <CartCounterBtn handleClick={props.onIncreaseCartCount}>
          +
        </CartCounterBtn>
      </div>
    </div>
  );
};

export default CartCounter;
