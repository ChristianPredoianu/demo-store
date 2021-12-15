import { useState } from 'react';
import ProductsModal from '../UI/ProductsModal';
import Card from '../UI/Card';
import CartProvider from '../../store/CartProvider';

import './ProductItem.scss';

const ProductItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => setIsModalOpen(true),
    closeModalHandler = () => setIsModalOpen(false);

  return (
    <>
      <Card>
        <div className="product-wrapper" onClick={openModalHandler}>
          <img src={props.image} alt="product" className="product-img" />
          <div className="product-info">
            <h4>{props.title}</h4>
            <h5>{props.price} $</h5>
          </div>
        </div>
      </Card>

      {isModalOpen && (
        <CartProvider>
          <ProductsModal
            onCloseModal={closeModalHandler}
            productImg={props.image}
            productTitle={props.title}
            productPrice={props.price}
          />
        </CartProvider>
      )}
    </>
  );
};

export default ProductItem;
