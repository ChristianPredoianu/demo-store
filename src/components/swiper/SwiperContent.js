import classes from './SwiperContent.module.scss';
import { Link } from 'react-router-dom';

import CtaBtn from '../UI/CtaBtn';

const SwiperContent = (props) => {
  console.log(props);
  return (
    <div className={classes['slide-container']}>
      <div className={classes['cta-wrapper']}>
        <h1 className={classes['swiper-heading-primary']}>{props.heading}</h1>

        <div className={classes['cta-btn']}>
          <Link to="/Shop">
            <CtaBtn>Shop Now</CtaBtn>
          </Link>
        </div>
      </div>
      <img src={props.img} alt="category" className={classes.img} />
    </div>
  );
};

export default SwiperContent;
