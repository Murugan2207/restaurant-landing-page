import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt='Background for the about section' />
      </div>
      <div className='about-section-image-container'>
        <img
          src={AboutBackgroundImage}
          alt='Background  for the about section'
        />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>
          Cooking A Homemade Meal Has Become More Important Than Ever
        </h1>
        <p className='primary-text'>
        "Unleash your inner chef - because every dish is a masterpiece
        </p>
        <p className='primary-text'>
        Elevate your meals effortlessly – let us handle the prep, you enjoy the perfection. Your favorite homecooked delights, ready in minutes!
        </p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>Learn More</button>
          <button className='watch-video-button'   onClick={() => window.location.href = 'https://www.youtube.com/@VillageCookingChannel'}>
    <BsFillPlayCircleFill />
    Watch Video
</button>

        </div>
      </div>
    </div>
  );
};

export default About;
