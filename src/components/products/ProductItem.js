import Card from '../UI/Card';

import './ProductItem.scss';

const ProductItem = (props) => {
  return (
    <Card>
      <div className="product-wrapper">
        <img src={props.image} alt="product" className="product-img" />
        <div className="product-info">
          <h4>{props.title}</h4>
          <h5>{props.price} $</h5>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
