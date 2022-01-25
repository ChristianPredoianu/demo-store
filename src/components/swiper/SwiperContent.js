import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import CtaBtn from '../UI/CtaBtn';

import classes from './SwiperContent.module.scss';

const SwiperContent = (props) => {
  const headingRef = useRef(),
    btnRef = useRef();

  useEffect(() => {
    if (props.isAnimation) {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      const animatedHeading = tl.from(headingRef.current, {
        x: -100,
        rotationY: 90,
        opacity: 0,
        ease: 'power2',
      });

      const animatedCta = tl.from(btnRef.current, {
        y: 100,
        rotationY: 90,
        opacity: 0,
        ease: 'power2',
      });

      return () => {
        animatedHeading.kill();
        animatedCta.kill();
      };
    }
  }, [props.isAnimation]);

  return (
    <div className={classes['slide-container']}>
      <div className={classes['cta-wrapper']}>
        {props.isAnimation && (
          <h1 className={classes['swiper-heading-primary']} ref={headingRef}>
            {props.heading}
          </h1>
        )}

        {props.isAnimation && (
          <div className={classes['cta-btn']}>
            <Link to="/Shop">
              <div ref={btnRef}>
                <CtaBtn>Shop Now</CtaBtn>
              </div>
            </Link>
          </div>
        )}
      </div>
      <img src={props.img} alt="category" className={classes.img} />
    </div>
  );
};

export default SwiperContent;
