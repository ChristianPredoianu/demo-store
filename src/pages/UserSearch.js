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
  const [isUserSearch, setIsUserSearch] = useState(true);

  const { productsData, isLoadingData, error } = useApi(
    'https://fakestoreapi.com/products'
  );

  let searchFilteredProducts, filteredProducts;

  if (!isLoadingData) {
    searchFilteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(state)
    );
    console.log(searchFilteredProducts);
  }

  const filteredProductsHandler = (selectedCategory) => {
    setFilterCategory(selectedCategory);
    setIsUserSearch(false);
  };

  if (!isLoadingData) {
    filteredProducts = productsData.filter(
      (product) => product.category === filterCategory
    );

    /// ------ADD THIS------------
    /*   filteredProducts === 'all'
    ? (userFilteredProducts = productsData)
    : (userFilteredProducts = productsData.filter(
        (product) => product.category === filteredProducts
      )); */
  }

  return (
    <div className="container">
      {isLoadingData && <LoadingSpinner />}
      <ProductsFilter
        productsData={productsData}
        onFilteredProducts={filteredProductsHandler}
      />
      {searchFilteredProducts && !filterCategory && (
        <Products products={searchFilteredProducts} />
      )}

      {!isUserSearch && <Products products={filteredProducts} />}
    </div>
  );
};

export default UserSearch;
