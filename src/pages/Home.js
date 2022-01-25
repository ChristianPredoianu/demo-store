import { useEffect, useState, useMemo } from 'react';

import HeroSlider from '../components/swiper/HeroSlider';
import CategoryCard from '../components/UI/CategoryCard';
import Products from '../components/products/Products';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import electronicsImg from '../assets/images/electronics.jpg';
import womensImg from '../assets/images/womens-clothing.jpg';
import menImg from '../assets/images/mens-clothing.jpg';
import jewleryImg from '../assets/images/jewlery.jpg';

import useApi from '../hooks/useApi';
import useGsapScrollReveal from '../hooks/useGsapScrollReveal';

import classes from './Home.module.scss';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const { productsData, isLoadingData, error } = useApi(
    'https://fakestoreapi.com/products'
  );
  const { addToRefs, scrollRevealAnimation } = useGsapScrollReveal();

  const imgArray = useMemo(
    () => [menImg, jewleryImg, electronicsImg, womensImg],
    []
  );

  let categoryCard;

  if (categories) {
    categoryCard = categories.map((category, index) => (
      <div key={index} ref={addToRefs}>
        <CategoryCard category={category} />
      </div>
    ));
  }

  useEffect(() => {
    if (!isLoadingData) {
      let categories,
        uniqueCategories,
        categoriesArray = [];
      //New array with just the categories
      categories = productsData.map((a) => a.category);
      //Make an array with unique categories
      uniqueCategories = [...new Set(categories)];
      uniqueCategories.forEach((category) => {
        categoriesArray.push({ category: category });
      });
      //Push images for every category since the given API does not include img for category
      categoriesArray.forEach((category, index) => {
        const img = imgArray[index];
        category.categoryImg = img;
      });
      setCategories(categoriesArray);
    }
  }, [isLoadingData, productsData, imgArray]);

  useEffect(() => {
    if (categories) scrollRevealAnimation();
  }, [categories, scrollRevealAnimation]);

  return (
    <>
      <div className="container">
        <section className={classes.hero}>
          <HeroSlider productsData={productsData} />
        </section>
        {isLoadingData && <LoadingSpinner />}
        {!isLoadingData && (
          <section className={classes.categories}>{categoryCard} </section>
        )}
        <section>
          <h3 className={classes['products-heading']}>Products Overview</h3>
          <Products products={productsData} />
        </section>
      </div>
    </>
  );
};

export default Home;
