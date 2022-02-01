import { NavLink } from 'react-router-dom';
import classes from './NavLinks.module.scss';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-links']}>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          Home
        </NavLink>
      </li>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <NavLink
          to="/Shop"
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          Shop
        </NavLink>
      </li>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          About
        </NavLink>
      </li>
      <li
        className={classes['nav-links__link']}
        onClick={props.onCloseMobileMenu}
      >
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
