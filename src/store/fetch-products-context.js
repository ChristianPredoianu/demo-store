import React, { useState, useEffect } from 'react';

const FetchProductsDataContext = React.createContext({
  productsData: [],
  isLoadingData: true,
  error: '',
});

const apiUrl = 'https://fakestoreapi.com/products';

export const FetchProductsDataContextProvider = (props) => {
  const [productsData, setProductsData] = useState();
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const productsData = await fetch(apiUrl);
      const data = await productsData.json();
      setProductsData(data);
      setIsLoadingData(false);
    } catch (error) {
      if (error) {
        setError(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FetchProductsDataContext.Provider
      value={{
        productsData,
        isLoadingData,
        error,
      }}
    >
      {props.children}
    </FetchProductsDataContext.Provider>
  );
};

export default FetchProductsDataContext;
