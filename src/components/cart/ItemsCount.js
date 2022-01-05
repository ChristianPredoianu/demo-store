import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './ItemsCount.module.scss';

const ItemsCount = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  console.log(items);

  const cartItemsCount = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  console.log(cartItemsCount);

  return <div className={classes.counter}>{cartItemsCount}</div>;
};

export default ItemsCount;
