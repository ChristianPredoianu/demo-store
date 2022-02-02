import { useNavigate } from 'react-router-dom';
import Card from './Card';

import classes from './CategoryCard.module.scss';

const CategoryCard = (props) => {
  const navigate = useNavigate();

  const cardHeading =
    props.category.category.charAt(0).toUpperCase() +
    props.category.category.slice(1);

  const goToShopHandler = () => {
    navigate('/shop', { state: props.category.category });
  };

  return (
    <Card>
      <div className={classes['card-wrapper']} onClick={goToShopHandler}>
        <h5 className={classes['card-wrapper__heading']}>{cardHeading}</h5>
        <h6 className={classes['card-wrapper__subheading']}>Spring 2022</h6>
        <img src={props.category.categoryImg} alt="category" />
      </div>
    </Card>
  );
};

export default CategoryCard;
