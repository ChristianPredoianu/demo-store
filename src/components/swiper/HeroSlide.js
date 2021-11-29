import { Swiper, SwiperSlide } from 'swiper/react';
import CtaBtn from '../UI/CtaBtn';
import SwiperCore, { Autoplay } from 'swiper';
import './HeroSlide.scss';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="hero-swiper"
    >
      <SwiperSlide>
        <div className="slide-container">
          <div className="cta-wrapper">
            <h1 className="swiper-heading-primary">Men collection 2022</h1>
            <h2 className="swiper-heading-secondary">New Arrivals</h2>
            <CtaBtn>Shop Now</CtaBtn>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <div className="cta-wrapper">
            <h1 className="swiper-heading-primary">Women Collection 2022</h1>
            <h2 className="swiper-heading-secondary">New Season</h2>
            <CtaBtn>Shop Now</CtaBtn>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <div className="cta-wrapper">
            <h1 className="swiper-heading-primary">Men New Season</h1>
            <h2 className="swiper-heading-secondary">Jackets</h2>
            <CtaBtn>Shop Now</CtaBtn>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlide;
