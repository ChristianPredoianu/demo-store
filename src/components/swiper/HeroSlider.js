import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import SwiperContent from './SwiperContent';
import womanImg from '../../assets/images/women.jpg';
import menImg from '../../assets/images/man1.jpg';
import jewleryImg from '../../assets/images/jewlery-slider.jpg';

import classes from './HeroSlide.module.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      /*  onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }} */
      className={classes['hero-swiper']}
    >
      <SwiperSlide>
        <SwiperContent heading={'New Season'} img={womanImg} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent heading={'New Arrivals'} img={menImg} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent heading={'New Products'} img={jewleryImg} />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlide;
