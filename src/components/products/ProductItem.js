import { useState } from 'react';
import ProductModal from '../UI/Product-modal/ProductModal';
import Card from '../UI/Card';

import classes from './ProductItem.module.scss';

const ProductItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => setIsModalOpen(true),
    closeModalHandler = () => setIsModalOpen(false);

  return (
    <>
      <Card>
        <div className={classes['product-wrapper']} onClick={openModalHandler}>
          <img
            src={props.image}
            alt="product"
            className={classes['product-img']}
          />
          <div className={classes['product-info']}>
            <h4>{props.title}</h4>
            <h5>{props.price} $</h5>
          </div>
        </div>
      </Card>

      {isModalOpen && (
        <ProductModal
          onCloseModal={closeModalHandler}
          productId={props.id}
          productImg={props.image}
          productTitle={props.title}
          productPrice={props.price}
        />
      )}
    </>
  );
};

export default ProductItem;
