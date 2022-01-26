import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGsapScrollReveal = (test) => {
  gsap.registerPlugin(ScrollTrigger);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const scrollRevealAnimation = useCallback(() => {
    console.log(revealRefs.current);
    revealRefs.current.forEach((el) => {
      const animation = gsap.fromTo(
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
            start: 'top center',
            toggleActions: 'play none none none',
          },
        }
      );
      return () => {
        animation.kill();
      };
    });
  }, []);

  return { addToRefs, scrollRevealAnimation };
};

export default useGsapScrollReveal;
