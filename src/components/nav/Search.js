import { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.scss';

const Search = (props) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const searchHandler = () => {
    const searchTerm = inputRef.current.value;

    navigate(`/usersearch?q=${createSearchParams(searchTerm)}`, {
      state: searchTerm,
    });
    props.onClose();
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
          ref={inputRef}
          className={classes['search-input__input']}
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={searchHandler}
          className={classes['search-input__search-icon']}
        />
      </div>
    </div>
  );
};

export default Search;
