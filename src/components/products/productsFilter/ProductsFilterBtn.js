import './ProductsFilterBtn.scss';

const ProductsFilterBtn = (props) => {
  const category =
    props.category.category.charAt(0).toUpperCase() +
    props.category.category.slice(1);

  return (
    <button
      className="filter-btn"
      onClick={() => props.onClickedCategory(props.category.category)}
    >
      {category}
    </button>
  );
};

export default ProductsFilterBtn;
