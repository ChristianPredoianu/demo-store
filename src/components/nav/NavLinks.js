import { Link } from 'react-router-dom';
import classes from './NavLinks.module.scss';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-links']}>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <Link to="/"> Home</Link>
      </li>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <Link to="/Shop"> Shop</Link>
      </li>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <Link to="/About"> About</Link>
      </li>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <Link to="/Contact"> Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
