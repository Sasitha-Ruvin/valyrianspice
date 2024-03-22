import React from 'react';
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="Letter G" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="Spoon" className='spoon__img' />
        <p className='p__opensans'>Valyrian Spice, a restaurant inspired by the epic saga of Game of Thrones, invites diners to embark on a culinary journey through the Seven Kingdoms with its exquisitely crafted dishes </p>
        <button type='button' className='custom__button'>More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="Spoon" className='spoon__img' />
        <p className='p__opensans'>Valyrian Spice, inspired by the fantastical world of Game of Thrones, emerged in 2017 as a culinary sanctuary where patrons could indulge in a fusion of medieval-inspired dishes amidst an ambiance reminiscent of Westerosi lore. </p>
        <button type='button' className='custom__button'>More</button>
      </div>
    
    </div>
    
  </div>
);

export default AboutUs;
