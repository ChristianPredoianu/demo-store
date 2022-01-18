import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Products from '../components/products/Products';

import useApi from '../hooks/useApi';

import classes from './UserSearch.module.scss';

const UserSearch = () => {
  let searchFilteredData;
  const { state } = useLocation();
  const [searchTerm, setSearchTerm] = useSearchParams();
  const userSearch = searchTerm.get('q');

  const { productsData, isLoadingData, error } = useApi(
    'https://fakestoreapi.com/products'
  );

  if (productsData && userSearch) {
    searchFilteredData = productsData.filter((product) =>
      product.title.toLowerCase().includes(userSearch)
    );
    console.log(searchFilteredData);
  }

  useEffect(() => {
    if (state !== null) {
      setSearchTerm({ q: state });
    }
  }, [state, setSearchTerm]);

  return (
    <div className="container">
      {searchFilteredData && <Products products={searchFilteredData} />}
      {!searchFilteredData && <LoadingSpinner />}
    </div>
  );
};

export default UserSearch;
