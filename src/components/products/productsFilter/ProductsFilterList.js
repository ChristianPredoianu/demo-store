import ProductsFilterBtn from './ProductsFilterBtn';
import classes from './ProductsFilterList.module.scss';

const ProductsFilterList = (props) => {
  let categoriesArray = [];

  if (props.productsData !== null) {
    let categories, uniqueCategories;
    //New array with just the categories
    categories = props.productsData.map((a) => a.category);
    //Make an array with unique categories
    uniqueCategories = [...new Set(categories)];
    uniqueCategories.forEach((category) =>
      categoriesArray.push({ category: category })
    );
    categoriesArray.unshift({ category: 'all' });
  }

  const filterBtn = categoriesArray.map((category, index) => (
    <ProductsFilterBtn
      key={index}
      category={category}
      onClickedCategory={props.onClickedCategory}
      closeFilter={props.closeFilter}
      index={index}
    />
  ));

  return <div className={classes['filter-list']}>{filterBtn}</div>;
};

export default ProductsFilterList;
