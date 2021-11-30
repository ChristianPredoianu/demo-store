import { useContext } from 'react';

import ProductItem from './ProductItem';
import FetchProductsDataContextProvider from '../../context/fetch-products-context';

import './Products.scss';

const Products = () => {
  const ctx = useContext(FetchProductsDataContextProvider);
  console.log(ctx.productsData);

  let output;

  if (ctx.productsData !== undefined) {
    output = ctx.productsData.map((product) => (
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
      <h3 className="products-heading">Products Overview</h3>
      <section className="section-products">{output}</section>
    </>
  );
};

export default Products;
