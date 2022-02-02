import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './footer/Footer';
import ScrollToTop from '../UI/ScrollToTop';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
