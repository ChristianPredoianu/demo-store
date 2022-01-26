import classes from './ProductsFilterBtn.module.scss';

const ProductsFilterBtn = (props) => {
  const category =
    props.category.category.charAt(0).toUpperCase() +
    props.category.category.slice(1);

  const onClickedCategoryHandler = () => {
    props.onClickedCategory(props.category.category);
    props.closeFilter();
  };

  return (
    <button
      className={classes['filter-btn']}
      onClick={onClickedCategoryHandler}
    >
      {category}
    </button>
  );
};

export default ProductsFilterBtn;
