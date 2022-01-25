import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGsapScrollReveal = () => {
  gsap.registerPlugin(ScrollTrigger);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = useCallback((el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  const scrollRevealAnimation = () => {
    revealRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            markers: true,
            start: 'top center+=100',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  };

  return { addToRefs, scrollRevealAnimation };
};

export default useGsapScrollReveal;
