import ProductItem from './ProductItem';

import classes from './Products.module.scss';

const Products = (props) => {
  let output;

  if (props.products !== null) {
    output = props.products.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    ));
  }

  return <section className={classes['section-products']}>{output}</section>;
};

export default Products;
