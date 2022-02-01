import { useState, useEffect, useContext } from 'react';
import CartCounter from '../CartCounter';
import CtaBtn from '../CtaBtn';
import CartContext from '../../../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './ModalOverlay.module.scss';

const ModalOverlay = (props) => {
  const [cartCounter, setCartCounter] = useState(1);
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const closeIcon = (
    <FontAwesomeIcon
      icon={faTimesCircle}
      className={classes['close-modal-icon']}
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

  useEffect(() => {
    const addedToCartTimeout = setTimeout(() => {
      setIsProductAddedToCart(false);
    }, 2000);

    return () => {
      clearTimeout(addedToCartTimeout);
    };
  });

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
    setIsProductAddedToCart(true);
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

        <h3 className={classes['product__title']}>{props.productTitle}</h3>
        <p className={classes['product__price']}>{'$ ' + props.productPrice}</p>
      </div>
      {!isProductAddedToCart && (
        <div className={classes.cta}>
          <div className={classes.counter}>
            <CartCounter
              onDecreaseCartCount={decreaseCartCountHandler}
              onIncreaseCartCount={increaseCartCountHandler}
              onChangeCount={changeCountHandler}
              cartCount={cartCounter}
            />
          </div>

          <CtaBtn handleClick={addToCartHandler}>Add to cart</CtaBtn>
        </div>
      )}

      {isProductAddedToCart && (
        <p className={classes['product-added']}>Product added to cart</p>
      )}
    </div>
  );
};

export default ModalOverlay;
