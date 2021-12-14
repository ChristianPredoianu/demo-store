import { useState } from 'react';
import CartCounterBtn from './CartCounterBtn';
import CtaBtn from './CtaBtn';

import './CartCounter.scss';

const CartCounter = () => {
  const [cartCounter, setCartCounter] = useState(0);

  const increaseCartCountHandler = () =>
    setCartCounter((prevState) => prevState + 1);
  const decreaseCartCountHandler = () => {
    if (cartCounter >= 1) {
      setCartCounter((prevState) => prevState - 1);
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.value >= 0) {
      setCartCounter(+e.target.value);
    }
  };

  console.log(cartCounter);
  return (
    <div className="cart-counter-wrapper">
      <label htmlFor="quantity">Quantity (between 1 and 5):</label>
      <div className="cart-counter">
        <CartCounterBtn handleClick={decreaseCartCountHandler}>
          -
        </CartCounterBtn>
        <input
          type="text"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          onChange={onChangeHandler}
          value={cartCounter}
        />
        <CartCounterBtn handleClick={increaseCartCountHandler}>
          +
        </CartCounterBtn>
      </div>
      <CtaBtn>Add to cart</CtaBtn>
    </div>
  );
};

export default CartCounter;
