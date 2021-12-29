import CtaBtn from '../UI/CtaBtn';

import classes from './SwiperContent.module.scss';

const SwiperContent = (props) => {
  return (
    <div className={classes['slide-container slide-container--1']}>
      <div className={classes['cta-wrapper']}>
        <h1 className={classes['swiper-heading-primary']}>
          {props.headingPrimary}
        </h1>
        <h2 className={classes['swiper-heading-secondary']}>
          {props.headingSecondary}
        </h2>
        <CtaBtn>Shop Now</CtaBtn>
      </div>
    </div>
  );
};

export default SwiperContent;
