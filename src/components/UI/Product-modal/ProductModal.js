import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

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
          productId={props.productId}
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
