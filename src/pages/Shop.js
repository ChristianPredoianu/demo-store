import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../hooks/useApi';
import ProductsFilter from '../components/products/productsFilter/ProductsFilter';
import Products from '../components/products/Products';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import classes from './Shop.module.scss';

const Shop = () => {
  const { state } = useLocation(),
    category = state,
    { productsData, isLoadingData, error } = useApi(
      'https://fakestoreapi.com/products'
    );

  const [initialCategory, setInitialCategory] = useState(null),
    [filteredProducts, setFilteredProducts] = useState('all');

  let products, output, userFilteredProducts;

  useEffect(() => {
    setInitialCategory(category);
  }, [category]);

  const filteredProductsHandler = (selectedCategory) => {
    setFilteredProducts(selectedCategory);
    setInitialCategory(null);
  };

  if (!isLoadingData) {
    products = productsData.filter((product) => product.category === category);

    filteredProducts === 'all'
      ? (userFilteredProducts = productsData)
      : (userFilteredProducts = productsData.filter(
          (product) => product.category === filteredProducts
        ));
  }

  if (isLoadingData) {
    output = <LoadingSpinner />;
  } else if (initialCategory !== null) {
    output = <Products products={products} />;
  } else {
    output = <Products products={userFilteredProducts} />;
  }

  return (
    <div className="container">
      <section className={classes.products}>
        <ProductsFilter
          onFilteredProducts={filteredProductsHandler}
          productsData={productsData}
        />
        {output}
      </section>
    </div>
  );
};

export default Shop;
