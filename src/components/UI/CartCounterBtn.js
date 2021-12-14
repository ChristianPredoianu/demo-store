import './CartCounterBtn.scss';

const CartCounterBtn = (props) => {
  return (
    <button className="quantity-btn" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default CartCounterBtn;
