import React from 'react';
import NavBar from './NavBar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt='Background' />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
          "Quick Bite Delights: Your Favorite Homecooked Meals Now Online!"
          </h1>
          <p className='primary-text'>
            
Welcome to "Chef's Shortcut Haven" – where our seasoned chefs handle all the nitty-gritty prep work! Say goodbye to peeling, chopping, and marinating hassles. Now you can effortlessly whip up a fresh, delicious meal in no time. Explore the joy of cooking without the time-consuming prep – your culinary adventure starts here!
          </p>
          <button className='secondary-button'>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt='Banner image' />
        </div>
      </div>
    </div>
  );
};

export default Home;
