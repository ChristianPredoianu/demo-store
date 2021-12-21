import { useState, useContext } from 'react';
import CartCounter from '../CartCounter';
import CtaBtn from '../CtaBtn';
import CartContext from '../../../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './ModalOverlay.scss';

const ModalOverlay = (props) => {
  const [cartCounter, setCartCounter] = useState(1);
  const cartCtx = useContext(CartContext);
  const closeIcon = (
    <FontAwesomeIcon
      icon={faTimesCircle}
      className="close-modal-icon"
      onClick={props.onClose}
    />
  );

  console.log(cartCtx);

  const productItem = {
    productId: props.productId,
    productImg: props.productImg,
    productTitle: props.productTitle,
    productPrice: props.productPrice,
    amount: cartCounter,
    totalAmount: cartCtx.totalAmount,
  };

  console.log(cartCtx);

  const persistCart = () => {
    /*  let data = localStorage.getItem('products');
    let productData = data ? JSON.parse(data) : [];
    productData.push(productItem); */
    localStorage.setItem('products', JSON.stringify(productItem));
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
