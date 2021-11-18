import { useRef } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const searchInputEl = useRef(null);

  const searchTermHandler = () => {
    console.log(searchInputEl.current.value);
  };

  return (
    <div className="search">
      <FontAwesomeIcon
        icon={faTimes}
        className="search__close-icon"
        onClick={props.onClose}
      />
      <div className="search-input">
        <label htmlFor="Search"></label>
        <input
          type="text"
          placeholder="Search"
          ref={searchInputEl}
          className="search-input__input"
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={searchTermHandler}
          className="search-input__search-icon"
        />
      </div>
    </div>
  );
};

export default Search;