import './ProductsFilterList.scss';

const ProductsFilterList = (props) => {
  let categories;
  console.log(props.categories);

  if (props.categories) {
    categories = props.categories.map((category) => {
      console.log(category);
      return <li className="filter-list__item">{category}</li>;
    });
  }
  return <ul className="filter-list">{categories}</ul>;
};

export default ProductsFilterList;
