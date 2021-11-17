import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import './NavIcons.scss';

const NavIcons = (props) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />,
    cartIcon = <FontAwesomeIcon icon={faShoppingCart} />,
    hamburgerIcon = <FontAwesomeIcon icon={faBars} />,
    closeIcon = <FontAwesomeIcon icon={faTimes} />;

  return (
    <ul className="nav-icons">
      <li className="nav-icons__search" onClick={props.onOpenSearch}>
        {searchIcon}
      </li>
      <li>{cartIcon}</li>
      <li className="nav-icons__hamburger" onClick={props.onToggleMenu}>
        {props.onToggleIcon ? closeIcon : hamburgerIcon}
      </li>
    </ul>
  );
};

export default NavIcons;
