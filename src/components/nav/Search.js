import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.scss';

const Search = (props) => {
  const searchInputEl = useRef(null);

  const searchTermHandler = () => {
    console.log(searchInputEl.current.value);
  };

  return (
    <div className={classes.search}>
      <FontAwesomeIcon
        icon={faTimes}
        className={classes['search__close-icon']}
        onClick={props.onClose}
      />
      <div className={classes['search-input']}>
        <label htmlFor="Search"></label>
        <input
          type="text"
          placeholder="Search"
          ref={searchInputEl}
          className={classes['search-input__input']}
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={searchTermHandler}
          className={classes['search-input__search-icon']}
        />
      </div>
    </div>
  );
};

export default Search;
