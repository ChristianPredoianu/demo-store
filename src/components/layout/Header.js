import { useState, useEffect } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import { CSSTransition } from 'react-transition-group';

import TopHeader from '../nav/TopHeader';
import logo from '../../assets/images/fakestore2.png';
import NavLinks from '../nav/NavLinks';
import NavIcons from '../nav/NavIcons';
import Search from '../nav/Search';

import './Header.scss';

const Header = () => {
  const { screenWidth } = useScreenWidth();
  const [showSearch, setShowSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const showSearchHandler = () => setShowSearch(true),
    closeSearchHandler = () => setShowSearch(false),
    toggleNavHandler = () => setToggleMenu(!toggleMenu),
    closeMobileMenuHandler = () => setToggleMenu(false);

  useEffect(() => {
    if (screenWidth < 640) {
      setToggleMenu(false);
    }
  }, [screenWidth]);

  return (
    <header>
      <TopHeader />
      <div className="container">
        <nav className="nav">
          <img src={logo} alt="Store logo" className="nav__logo" />
          <CSSTransition
            in={toggleMenu || screenWidth > 640}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <NavLinks onCloseMobileMenu={closeMobileMenuHandler} />
          </CSSTransition>
          <NavIcons
            onOpenSearch={showSearchHandler}
            onToggleMenu={toggleNavHandler}
            onToggleIcon={toggleMenu}
          />
          <CSSTransition
            in={showSearch}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <Search onClose={closeSearchHandler} />
          </CSSTransition>
        </nav>
      </div>
    </header>
  );
};

export default Header;
