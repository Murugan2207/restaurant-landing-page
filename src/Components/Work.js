import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: 'Pick Meals',
      text: 'Craft your perfect dining experience with PickMeals. Explore a variety of carefully curated dishes, each designed to elevate your taste buds and satisfy your cravings.',
    },
    {
      image: ChooseMeals,
      title: 'Pick Meals',
      text: 'Indulge in the art of choice with ChooseMeals. Elevate your dining experience by handpicking from our exquisite selection, where every option is a culinary masterpiece.',
    },
    {
      image: DeliveryMeals,
      title: 'Pick Meals',
      text: 'Enjoy convenience at your doorstep with DeliveryMeals. Savor the ease of having your favorite dishes brought right to you, making every meal a delightful experience.',
    },
  ];
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
        Unlocking the Mechanism: A sneak peek into the functionality, demystifying how it works.
        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoData.map((data) => (
          <div className='work-section-info'>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt='Info boxes'></img>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
