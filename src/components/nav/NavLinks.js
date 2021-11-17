import { Link } from 'react-router-dom';
import './NavLinks.scss';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li className="nav-links__link" onClick={props.onCloseMobileMenu}>
        <Link to="/"> Home</Link>
      </li>
      <li className="nav-links__link" onClick={props.onCloseMobileMenu}>
        <Link to="/Shop"> Shop</Link>
      </li>
      <li className="nav-links__link" onClick={props.onCloseMobileMenu}>
        <Link to="/About"> About</Link>
      </li>
      <li className="nav-links__link" onClick={props.onCloseMobileMenu}>
        <Link to="/Contact"> Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
