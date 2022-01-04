import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import useScreenWidth from '../../hooks/useScreenWidth';

import TopHeader from '../nav/TopHeader';
import logo from '../../assets/images/fakestore2.png';
import NavLinks from '../nav/NavLinks';
import NavIcons from '../nav/NavIcons';
import Search from '../nav/Search';
import Cart from '../cart/Cart';

import CartProvider from '../../store/CartProvider';

import classes from './Header.module.scss';

const Header = () => {
  const { screenWidth } = useScreenWidth(),
    [showSearch, setShowSearch] = useState(false),
    [toggleMenu, setToggleMenu] = useState(false),
    [showCart, setShowCart] = useState(false);

  const showSearchHandler = () => setShowSearch(true),
    closeSearchHandler = () => setShowSearch(false),
    toggleNavHandler = () => setToggleMenu(!toggleMenu),
    closeMobileMenuHandler = () => setToggleMenu(false),
    showCartHandler = () => setShowCart(true),
    hideCartHandler = () => setShowCart(false);

  useEffect(() => {
    if (screenWidth < 640) {
      setToggleMenu(false);
    }
  }, [screenWidth]);

  console.log(showCart);

  return (
    <header>
      <TopHeader />
      <div className="container">
        <nav className={classes.nav}>
          <img src={logo} alt="Store logo" className={classes.nav__logo} />
          <CSSTransition
            in={toggleMenu || screenWidth > 640}
            timeout={300}
            classNames={{
              enter: classes['slide-enter'],
              enterActive: classes['slide-enter-active'],
              exitActive: classes['slide-exit-active'],
            }}
            unmountOnExit
          >
            <NavLinks onCloseMobileMenu={closeMobileMenuHandler} />
          </CSSTransition>
          <NavIcons
            onOpenSearch={showSearchHandler}
            onToggleMenu={toggleNavHandler}
            onToggleIcon={toggleMenu}
            onShowCart={showCartHandler}
            onHideCart={hideCartHandler}
          />
          <CSSTransition
            in={showSearch}
            timeout={300}
            classNames={{
              enter: classes['slide-enter'],
              enterActive: classes['slide-enter-active'],
              exitActive: classes['slide-exit-active'],
            }}
            unmountOnExit
          >
            <Search onClose={closeSearchHandler} />
          </CSSTransition>
          {showCart && (
            <CartProvider>
              <Cart />
            </CartProvider>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
