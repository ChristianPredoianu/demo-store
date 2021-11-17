import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import TopHeader from '../nav/TopHeader';
import logo from '../../assets/images/fakestore2.png';
import NavLinks from '../nav/NavLinks';
import NavIcons from '../nav/NavIcons';
import Search from '../nav/Search';

import './Header.scss';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const showSearchHandler = () => setShowSearch(true);

  const closeSearchHandler = () => setShowSearch(false);

  const toggleNavHandler = () => setToggleMenu(!toggleMenu);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);

      if (screenWidth < 640) {
        setToggleMenu(false);
      }
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
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
            {<NavLinks />}
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
