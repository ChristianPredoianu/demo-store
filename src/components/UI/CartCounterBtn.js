import classes from './CartCounterBtn.module.scss';

const CartCounterBtn = (props) => {
  return (
    <button className={classes['quantity-btn']} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default CartCounterBtn;
