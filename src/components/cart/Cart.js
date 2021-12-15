import CartItem from './CartItem';
import CtaBtn from '../UI/CtaBtn';

import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <CartItem />
      <p className="total-amount">Total Amount: </p>
      <CtaBtn>Checkout</CtaBtn>
    </div>
  );
};

export default Cart;
