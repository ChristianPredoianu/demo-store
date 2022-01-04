import { useState, useContext } from 'react';
import CartCounter from '../CartCounter';
import CtaBtn from '../CtaBtn';
import CartContext from '../../../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './ModalOverlay.module.scss';

const ModalOverlay = (props) => {
  const [cartCounter, setCartCounter] = useState(1);
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  const closeIcon = (
    <FontAwesomeIcon
      icon={faTimesCircle}
      className="close-modal-icon"
      onClick={props.onClose}
    />
  );

  const productItem = {
    productId: props.productId,
    productImg: props.productImg,
    productTitle: props.productTitle,
    productPrice: props.productPrice,
    amount: cartCounter,
    totalAmount: cartCtx.totalAmount,
  };

  const decreaseCartCountHandler = () => {
    if (cartCounter >= 2) {
      setCartCounter((prevState) => prevState - 1);
    }
  };

  const increaseCartCountHandler = () =>
    setCartCounter((prevState) => prevState + 1);

  const changeCountHandler = (e) => {
    if (e.target.value >= 1) {
      setCartCounter(e.target.value);
    }
  };

  const addToCartHandler = () => {
    cartCtx.addToCart(productItem);
  };

  return (
    <div className={classes.modal}>
      {closeIcon}
      <div className={classes.product}>
        <img
          src={props.productImg}
          alt="product"
          className={classes['product__img']}
        />
        <div className={classes['product__product-info']}>
          <h3 className={classes['product__title']}>{props.productTitle}</h3>
          <p className={classes['product__price']}>
            {'$ ' + props.productPrice}
          </p>
        </div>
      </div>
      <div className={classes['add-to-cart']}>
        <CartCounter
          onDecreaseCartCount={decreaseCartCountHandler}
          onIncreaseCartCount={increaseCartCountHandler}
          onChangeCount={changeCountHandler}
          cartCount={cartCounter}
        />
      </div>
      <CtaBtn handleClick={addToCartHandler}>Add to cart</CtaBtn>
    </div>
  );
};

export default ModalOverlay;
