import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ProductsFilter from '../components/products/productsFilter/ProductsFilter';
import Products from '../components/products/Products';

import useApi from '../hooks/useApi';

import classes from './UserSearch.module.scss';

const UserSearch = () => {
  const { state } = useLocation();
  const [filterCategory, setFilterCategory] = useState(null);

  const { productsData, isLoadingData, error } = useApi(
    'https://fakestoreapi.com/products'
  );

  const searchTerm = state.charAt(0).toUpperCase() + state.slice(1);

  let searchFilteredProducts,
    filteredProducts,
    isProductsFound = false;

  if (!isLoadingData) {
    searchFilteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(state)
    );

    filterCategory === 'all'
      ? (filteredProducts = productsData)
      : (filteredProducts = productsData.filter(
          (product) => product.category === filterCategory
        ));
  }

  if (
    !isLoadingData &&
    searchFilteredProducts.length === 0 &&
    filteredProducts.length === 0
  ) {
    isProductsFound = true;
  }

  const filteredProductsHandler = (selectedCategory) => {
    setFilterCategory(selectedCategory);
  };

  const resetFilterHandler = () => {
    setFilterCategory(null);
  };

  return (
    <div className="container">
      {isLoadingData && <LoadingSpinner />}
      <ProductsFilter
        productsData={productsData}
        onFilteredProducts={filteredProductsHandler}
      />
      {filterCategory && (
        <p onClick={resetFilterHandler} className={classes.reset}>
          Reset Filter
        </p>
      )}
      {!filterCategory && (
        <h1 className={classes['user-search']}>
          You searched for: {searchTerm}
        </h1>
      )}
      {isProductsFound && (
        <h2 className={classes['no-products']}>No products found</h2>
      )}
      {searchFilteredProducts && !filterCategory && (
        <Products products={searchFilteredProducts} />
      )}

      {filterCategory && <Products products={filteredProducts} />}
    </div>
  );
};

export default UserSearch;
