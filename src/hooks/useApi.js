import { useState, useEffect, useCallback } from 'react';

const useApi = (url) => {
  const [productsData, setProductsData] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const fetchData = useCallback(async () => {
    if (isMounted) {
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
    }
  }, [url, isMounted]);

  useEffect(() => {
    fetchData();

    return () => {
      setIsMounted(false);
    };
  }, [fetchData]);

  return { productsData, isLoadingData, error };
};

export default useApi;
