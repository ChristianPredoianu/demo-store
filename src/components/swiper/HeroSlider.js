import { useState, useEffect } from 'react';
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
  const [isAnimation, setIsAnimation] = useState(false);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setIsAnimation(true);
  }, []);

  return (
    <Swiper
      onSlideChange={() => {
        setIsAnimation(false);
        setIsAnimation(true);
      }}
      onReachEndEnd={() => {
        setIsAnimation(false);
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      className={classes['hero-swiper']}
    >
      <SwiperSlide>
        <SwiperContent
          heading={'New Season'}
          img={womanImg}
          isAnimation={isAnimation}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          heading={'New Arrivals'}
          img={menImg}
          isAnimation={isAnimation}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          heading={'New Products'}
          img={jewleryImg}
          isAnimation={isAnimation}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlide;
