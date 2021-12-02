import useApi from '../hooks/useApi';
import HeroSlide from '../components/swiper/HeroSlide';
import CategoryCard from '../components/UI/CategoryCard';
import Products from '../components/products/Products';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import electronicsImg from '../assets/images/electronics.jpg';
import womensImg from '../assets/images/womens-clothing.jpg';
import menImg from '../assets/images/mens-clothing.jpg';
import jewleryImg from '../assets/images/jewlery.jpg';

import './Home.scss';

const Home = () => {
  const { productsData, isLoadingData, error } = useApi(
    'https://fakestoreapi.com/products'
  );

  const imgArray = [menImg, jewleryImg, electronicsImg, womensImg];
  let categories,
    uniqueCategories,
    categoriesArray = [];

  if (!isLoadingData) {
    //New array with just the categories
    categories = productsData.map((a) => a.category);
    //Make an array with unique categories
    uniqueCategories = [...new Set(categories)];
    uniqueCategories.forEach((category) =>
      categoriesArray.push({ category: category })
    );
    //Push images for every category since the given API does not include img for category
    categoriesArray.forEach((category, index) => {
      const img = imgArray[index];
      category.categoryImg = img;
    });
  }

  const categoryCards = categoriesArray.map((category, index) => (
    <CategoryCard key={index} category={category} />
  ));

  return (
    <>
      <div className="hero">
        <div className="container">
          <HeroSlide />
        </div>
      </div>
      <div className="container">
        {isLoadingData && <LoadingSpinner />}
        {!isLoadingData && (
          <>
            <section className="categories">{categoryCards}</section>
            <section className="products">
              <h3 className="products-heading">Products Overview</h3>
              <Products products={productsData} />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
