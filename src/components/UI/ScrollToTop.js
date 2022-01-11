import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classes from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const upArrow = <FontAwesomeIcon icon={faChevronUp} />;

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={classes['scroll-to-top']} onClick={scrollToTopHandler}>
          {upArrow}
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
