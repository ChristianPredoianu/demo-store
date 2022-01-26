import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './footer/Footer';
import ScrollToTop from '../UI/ScrollToTop';

import useApi from '../../hooks/useApi';

const Layout = () => {
  const { isLoadingData } = useApi('https://fakestoreapi.com/products');

  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      {!isLoadingData && <Footer />}
    </>
  );
};

export default Layout;
