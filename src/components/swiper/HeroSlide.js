import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import SwiperContent from './SwiperContent';

import './HeroSlide.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="hero-swiper"
    >
      <SwiperSlide>
        <SwiperContent
          headingPrimary={'Women Collection 2022'}
          headingSecondary={'New Season'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          headingPrimary={'Men collection 2022'}
          headingSecondary={'New Arrivals'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          headingPrimary={'Men New Season 2022'}
          headingSecondary={'Jackets'}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlide;
