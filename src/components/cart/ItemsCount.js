import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './ItemsCount.module.scss';

const ItemsCount = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const cartItemsCount = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return <div className={classes.counter}>{cartItemsCount}</div>;
};

export default ItemsCount;
