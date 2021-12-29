import classes from './CartItem.module.scss';

const CartItem = (props) => {
  return (
    <div className={classes['cart-item']}>
      <img src={props.img} alt="" className={classes['product-img']} />
      <div className={classes['product-details']}>
        <p className={classes['product-details__title']}>{props.title}</p>
        <p className={classes['product-details__price']}>{props.price}</p>
        <p className={classes['product-details__amount']}>{props.amount}</p>
      </div>
      <p className={classes['remove-product']}></p>
    </div>
  );
};

export default CartItem;
