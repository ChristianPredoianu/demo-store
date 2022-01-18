import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.scss';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const searchHandler = () => {
    navigate('/usersearch', { replace: true }, { state: searchTerm });
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
          onChange={searchTermHandler}
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
