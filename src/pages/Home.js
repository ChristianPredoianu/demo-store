import HeroSlide from '../components/swiper/HeroSlide';
import Products from '../components/products/Products';

import './Home.scss';

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <HeroSlide />
        <Products />
        <h1>dsasdsad</h1>
      </div>
    </div>
  );
};

export default Home;
