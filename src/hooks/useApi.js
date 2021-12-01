import { useState, useEffect, useCallback } from 'react';

const useApi = (url) => {
  const [productsData, setProductsData] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const productsData = await fetch(url);
      const data = await productsData.json();
      setProductsData(data);
      setIsLoadingData(false);
    } catch (error) {
      if (error) {
        setError(error);
      }
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { productsData, isLoadingData, error };
};

export default useApi;
