import Card from './Card';

import './CategoryCard.scss';

const CategoryCard = (props) => {
  return (
    <Card>
      <h5>{props.category.category}</h5>
      <img src={props.category.categoryImg} alt="category" />
    </Card>
  );
};

export default CategoryCard;
