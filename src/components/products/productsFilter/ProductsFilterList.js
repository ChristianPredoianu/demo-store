import './ProductsFilterList.scss';

const ProductsFilterList = (props) => {
  console.log(props);

  const test = () => {
    console.log('dsadsa');
  };
  return (
    <div className="filter-list">
      <button
        className="filter-list__item"
        onClick={() => props.onClickedCategory('all')}
      >
        All
      </button>
      <button
        className="filter-list__item"
        onClick={() => props.onClickedCategory("men's clothing")}
      >
        Mens
      </button>
      <button
        className="filter-list__item"
        onClick={() => props.onClickedCategory("women's clothing")}
      >
        Womens
      </button>
      <button
        className="filter-list__item"
        onClick={() => props.onClickedCategory('jewlery')}
      >
        Jewlery
      </button>
      <button
        className="filter-list__item"
        onClick={() => props.onClickedCategory('electronics')}
      >
        Electronics
      </button>
    </div>
  );
};

export default ProductsFilterList;
