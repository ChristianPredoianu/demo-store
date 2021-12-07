import { useLocation } from 'react-router-dom';
import useApi from '../hooks/useApi';
import ProductsFilter from '../components/products/productsFilter/ProductsFilter';
import Products from '../components/products/Products';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import './Shop.scss';

const Shop = (props) => {
  const { state } = useLocation(),
    category = state,
    { productsData, isLoadingData, error } = useApi(
      'https://fakestoreapi.com/products'
    );

  let products,
    output,
    categoriesArray = [];

  if (!isLoadingData) {
    let categories, uniqueCategories;
    products = productsData.filter((product) => product.category === category);

    categories = productsData.map((a) => a.category);

    uniqueCategories = [...new Set(categories)];
    uniqueCategories.forEach((category) =>
      categoriesArray.push({ category: category })
    );
  }

  if (isLoadingData) {
    output = <LoadingSpinner />;
  } else if (state !== null) {
    output = <Products products={products} />;
  } else {
    output = <Products products={productsData} />;
  }

  return (
    <div className="container">
      <ProductsFilter categories={categoriesArray} />
      {output}
    </div>
  );
};

export default Shop;
