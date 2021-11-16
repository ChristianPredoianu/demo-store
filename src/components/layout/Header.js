import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './UI/Search';
import logo from '../../assets/images/fakestore2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const searchIcon = <FontAwesomeIcon icon={faSearch} />,
    cartIcon = <FontAwesomeIcon icon={faShoppingCart} />,
    hamburgerIcon = <FontAwesomeIcon icon={faBars} />;

  const showSearchHandler = () => {
    setShowSearch(true);
  };

  const closeSearchHandler = () => {
    setShowSearch(false);
  };

  return (
    <header>
      <div className="top-header">
        <div className="container">
          <p>Free Shipping for standard order over 100$</p>
        </div>
      </div>
      <div className="container">
        <nav className="nav">
          <img src={logo} alt="Store logo" className="nav__logo" />
          <ul className="nav-list">
            <li className="nav-list__link">
              <Link to="/"> Home</Link>
            </li>
            <li className="nav-list__link">
              <Link to="/Shop"> Shop</Link>
            </li>
            <li className="nav-list__link">
              <Link to="/About"> About</Link>
            </li>
            <li className="nav-list__link">
              <Link to="/Contact"> Contact</Link>
            </li>
          </ul>
          <ul className="nav-icons">
            <li onClick={showSearchHandler}>{searchIcon}</li>
            <li>{cartIcon}</li>
            <li className="nav-icons__hamburger">{hamburgerIcon}</li>
          </ul>
          {showSearch && <Search onClose={closeSearchHandler} />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
