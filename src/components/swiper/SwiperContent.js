import CtaBtn from '../UI/CtaBtn';
import img1 from '../../assets/images/man1.jpg';

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
        <img src={img1} alt="" />
        <CtaBtn>Shop Now</CtaBtn>
      </div>
    </div>
  );
};

export default SwiperContent;
