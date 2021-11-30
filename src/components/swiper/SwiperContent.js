import CtaBtn from '../UI/CtaBtn';

import './SwiperContent.scss';

const SwiperContent = (props) => {
  return (
    <div className="slide-container slide-container--1">
      <div className="cta-wrapper">
        <h1 className="swiper-heading-primary">{props.headingPrimary}</h1>
        <h2 className="swiper-heading-secondary">{props.headingSecondary}</h2>
        <CtaBtn>Shop Now</CtaBtn>
      </div>
    </div>
  );
};

export default SwiperContent;
