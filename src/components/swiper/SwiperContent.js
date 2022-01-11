import CtaBtn from '../UI/CtaBtn';

import classes from './SwiperContent.module.scss';

const SwiperContent = (props) => {
  return (
    <div className={classes['slide-container']}>
      <div className={classes['cta-wrapper']}>
        <h1 className={classes['swiper-heading-primary']}>
          {props.headingPrimary}
        </h1>
        <h2 className={classes['swiper-heading-secondary']}>
          {props.headingSecondary}
        </h2>

        <img src={props.img} alt="category" className={classes.img} />
        <div className={classes['cta-btn']}>
          <CtaBtn>Shop Now</CtaBtn>
        </div>
      </div>
    </div>
  );
};

export default SwiperContent;
