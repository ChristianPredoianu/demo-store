import ItemsCount from '../cart/ItemsCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import classes from './NavIcons.module.scss';

const NavIcons = (props) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />,
    cartIcon = <FontAwesomeIcon icon={faShoppingCart} />,
    hamburgerIcon = <FontAwesomeIcon icon={faBars} />,
    closeIcon = <FontAwesomeIcon icon={faTimes} />;

  return (
    <ul className={classes['nav-icons']}>
      <li className={classes['nav-icons__search']} onClick={props.onOpenSearch}>
        {searchIcon}
      </li>
      <li
        className={classes['nav-icons__cart']}
        onMouseEnter={props.onShowCart}
        onClick={props.onShowCart}
      >
        {cartIcon}
      </li>
      <ItemsCount />
      <li
        className={classes['nav-icons__hamburger']}
        onClick={props.onToggleMenu}
      >
        {props.onToggleIcon ? closeIcon : hamburgerIcon}
      </li>
    </ul>
  );
};

export default NavIcons;
