import { useEffect } from 'react';

import classes from './About.module.scss';

import useGsapScrollReveal from '../hooks/useGsapScrollReveal';

import clothesImg from '../assets/images/clothes.jpg';
import clothesImg2 from '../assets/images/clothes2.jpg';

const About = () => {
  const { addToRefs, scrollRevealAnimation } = useGsapScrollReveal();
  useEffect(() => {
    scrollRevealAnimation();
  }, [scrollRevealAnimation]);
  return (
    <>
      <section>
        <div className={classes['img-wrapper']}>
          <h1 className={classes['about-heading']}>About</h1>
        </div>
      </section>
      <div className="container">
        <section className={classes['story-section']} ref={addToRefs}>
          <div className={classes['story']}>
            <h2 className={classes['story__heading']}>Our Story</h2>
            <p className={classes['story__paragraph']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. <br />
              <br />
              Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non
              neque ut enim dapibus tincidunt vitae nec augue. Suspendisse
              potenti. Proin ut est diam. Donec condimentum euismod tortor, eget
              facilisis diam faucibus et. Morbi a tempor elit. Donec gravida
              lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula
              magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in
              vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam
              erat volutpat.
              <br />
              <br /> Donec iaculis lectus a arcu facilisis, eu sodales lectus
              sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo
              eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis
              ut commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula. Any questions? Let us know in store at 8th
              floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716
              6879
            </p>
          </div>
          <div className={classes['story-img-wrapper']}>
            <img
              src={clothesImg}
              alt="clothes"
              className={classes['story-img-wrapper__img']}
            />
          </div>
        </section>
        <section className={classes['mission-section']} ref={addToRefs}>
          <div className={classes['story']}>
            <h2 className={classes['story__heading']}>Our mission</h2>
            <p className={classes['story__paragraph']}>
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
              rhoncus dignissim risus, sed consectetur erat. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nullam maximus mauris sit amet odio convallis, in
              pharetra magna gravida. Praesent sed nunc fermentum mi molestie
              tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas,
              luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat
              odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in,
              porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec
              venenatis nulla lobortis. Proin at gravida ante. Mauris auctor
              purus at lacus maximus euismod. Pellentesque vulputate massa ut
              nisl hendrerit, eget elementum libero iaculis.
            </p>

            <blockquote className={classes['story__quote']}>
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </blockquote>
            <p className={classes['story__quote-author']}>- Steve Jobs</p>
          </div>
          {/*      <div className={classes['story-quote']}>
            <blockquote>
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </blockquote>
            <p className={classes['story-quote__author']}>- Steve Jobs</p>
          </div> */}

          <div className={classes['story-img-wrapper']}>
            <img src={clothesImg2} alt="clothes" />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
