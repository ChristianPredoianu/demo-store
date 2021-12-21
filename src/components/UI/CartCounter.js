import CartCounterBtn from './CartCounterBtn';

import './CartCounter.scss';

const CartCounter = (props) => {
  /* const cartItemsAmount = cartCtx.cartItems.reduce((curNumber, item)=>{
  return curNumber + item.amount
}, 0) */

  return (
    <div className="cart-counter-wrapper">
      <label htmlFor="quantity">Quantity (between 1 and 5):</label>
      <div className="cart-counter">
        <CartCounterBtn handleClick={props.onDecreaseCartCount}>
          -
        </CartCounterBtn>
        <input
          className="quantity-input"
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
