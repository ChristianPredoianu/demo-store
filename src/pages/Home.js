import CtaBtn from '../components/UI/CtaBtn';
import heroImg from '../assets/images/man1.jpg';

import './Home.scss';

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-wrapper__cta">
            <h1 className="hero-wrapper__heading-primary">
              Men Collection 2021
            </h1>
            <h2 className="hero-wrapper__heading-secondary">New Arrivals</h2>
            <CtaBtn>Shop Now</CtaBtn>
          </div>
          <div className="hero-img-wrapper">
            <img src={heroImg} alt="man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
