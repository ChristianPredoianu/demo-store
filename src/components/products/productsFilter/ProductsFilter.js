import { useState, useEffect } from 'react';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProductsFilterList from './ProductsFilterList';

import './ProductsFilter.scss';

const ProductsFilter = (props) => {
  const [isFilterOpen, setIsFilterOpen] = useState(),
    { screenWidth } = useScreenWidth(),
    filterIcon = <FontAwesomeIcon icon={faFilter} />;

  const toggleFilterHandler = () => setIsFilterOpen(!isFilterOpen);

  useEffect(() => {
    if (screenWidth < 640) {
      setIsFilterOpen(false);
    }
  }, [screenWidth]);
  console.log(props);

  return (
    <section className="products-filter">
      <button className="filter-btn" onClick={toggleFilterHandler}>
        {filterIcon} <span>Filter</span>
      </button>

      {(isFilterOpen || screenWidth > 640) && (
        <ProductsFilterList onClickedCategory={props.onFilteredProducts} />
      )}
    </section>
  );
};

export default ProductsFilter;
