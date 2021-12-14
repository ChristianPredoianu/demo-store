import ReactDOM from 'react-dom';
import CartCounter from './CartCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './ProductsModal.scss';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const closeIcon = (
    <FontAwesomeIcon
      icon={faTimesCircle}
      className="close-modal-icon"
      onClick={props.onClose}
    />
  );

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
        <CartCounter />
      </div>
    </div>
  );
};

const ProductsModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onCloseModal}
          productImg={props.productImg}
          productTitle={props.productTitle}
          productPrice={props.productPrice}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ProductsModal;
