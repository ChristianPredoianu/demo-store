import ProductItem from './ProductItem';

import './Products.scss';

const Products = (props) => {
  let output;

  if (props.products !== null) {
    output = props.products.map((product) => (
      <ProductItem
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    ));
  } else {
    output = (
      <p>
        Sometimes the API https://fakestoreapi.com/ takes very long time to
        load, try refreshing the page to see the products section!
      </p>
    );
  }

  return (
    <>
      <section className="section-products">{output}</section>
    </>
  );
};

export default Products;
