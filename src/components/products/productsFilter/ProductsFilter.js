import { useState, useEffect } from 'react';

import useScreenWidth from '../../../hooks/useScreenWidth';
import ProductsFilterList from './ProductsFilterList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import classes from './ProductsFilter.module.scss';

const ProductsFilter = (props) => {
  const [isFilterOpen, setIsFilterOpen] = useState();
  const { screenWidth } = useScreenWidth();

  const filterIcon = <FontAwesomeIcon icon={faFilter} />;

  const toggleFilterHandler = () => setIsFilterOpen(!isFilterOpen),
    closeFilterHandler = () => setIsFilterOpen(false);

  useEffect(() => {
    if (screenWidth < 640) {
      setIsFilterOpen(false);
    }
  }, [screenWidth]);

  return (
    <section className={classes['products-filter']}>
      <button
        className={classes['filter-btn-toggler']}
        onClick={toggleFilterHandler}
      >
        {filterIcon} <span>Filter</span>
      </button>

      {(isFilterOpen || screenWidth > 640) && (
        <ProductsFilterList
          onClickedCategory={props.onFilteredProducts}
          productsData={props.productsData}
          closeFilter={closeFilterHandler}
        />
      )}
    </section>
  );
};

export default ProductsFilter;
