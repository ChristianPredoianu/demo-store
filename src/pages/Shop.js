import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../hooks/useApi';
import ProductsFilter from '../components/products/productsFilter/ProductsFilter';
import Products from '../components/products/Products';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import './Shop.scss';

const Shop = () => {
  const { state } = useLocation(),
    category = state,
    { productsData, isLoadingData, error } = useApi(
      'https://fakestoreapi.com/products'
    ),
    [filteredProducts, setFilteredProducts] = useState('all');

  let products, output, userFilteredProducts;

  useEffect(() => {
    setFilteredProducts(category);
  }, [category]);

  const filteredProductsHandler = (selectedCategory) =>
    setFilteredProducts(selectedCategory);

  console.log(filteredProducts);

  if (!isLoadingData) {
    products = productsData.filter((product) => product.category === category);

    userFilteredProducts = productsData.filter(
      (product) => product.category === filteredProducts
    );
  }

  /*   if (isLoadingData) {
    output = <LoadingSpinner />;
  } else if (state !== null) {
    output = <Products products={products} />;
  } else {
    output = <Products products={userFilteredProducts} />;
  } */

  return (
    <div className="container">
      <ProductsFilter onFilteredProducts={filteredProductsHandler} />
      {output}
    </div>
  );
};

export default Shop;
