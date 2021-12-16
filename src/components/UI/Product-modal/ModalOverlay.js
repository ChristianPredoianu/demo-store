import { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import CartCounter from '../CartCounter';
import CtaBtn from '../CtaBtn';
import CartContext from '../../../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './ModalOverlay.scss';

const ModalOverlay = (props) => {
  const [cartCounter, setCartCounter] = useState(0);
  const cartCtx = useContext(CartContext);
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
  };

  const persistCart = () => {
    let data = localStorage.getItem('products');
    let productData = data ? JSON.parse(data) : [];
    productData.push(productItem);
    localStorage.setItem('products', JSON.stringify(productData));
  };

  const increaseCartCountHandler = () =>
    setCartCounter((prevState) => prevState + 1);

  const decreaseCartCountHandler = () => {
    if (cartCounter >= 1) {
      setCartCounter((prevState) => prevState - 1);
    }
  };

  const changeCountHandler = (e) => {
    if (e.target.value >= 0) {
      setCartCounter(e.target.value);
    }
  };

  const addToCartHandler = () => {
    cartCtx.addToCart(productItem);
    persistCart();
  };

  return (
    <div className="modal">
      {closeIcon}
      <div className="product">
        <img src={props.productImg} alt="product" className="product__img" />
        <div className="product__product-info">
          <h3 className="product__title">{props.productTitle}</h3>
          <p className="product__price">{'$ ' + props.productPrice}</p>
        </div>
      </div>
      <div className="add-to-cart">
        <CartCounter
          onIncreaseCartCount={increaseCartCountHandler}
          onDecreseCartCount={decreaseCartCountHandler}
          onChangeCount={changeCountHandler}
          cartCount={cartCounter}
        />
      </div>
      <CtaBtn handleClick={addToCartHandler}>Add to cart</CtaBtn>
    </div>
  );
};

export default ModalOverlay;
