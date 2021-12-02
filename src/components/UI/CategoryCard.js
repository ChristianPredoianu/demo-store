import Card from './Card';

import './CategoryCard.scss';

const CategoryCard = (props) => {
  const cardHeading =
    props.category.category.charAt(0).toUpperCase() +
    props.category.category.slice(1);

  return (
    <Card>
      <div className="card-wrapper">
        <h5 className="card-wrapper__heading">{cardHeading}</h5>
        <h6 className="card-wrapper__subheading">Spring 2022</h6>
        <img
          src={props.category.categoryImg}
          alt="category"
          className="card-wrapper__img"
        />
      </div>
    </Card>
  );
};

export default CategoryCard;
