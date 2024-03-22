import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="image of a chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quotes" />
          <p className='p__opensans'>serving delectable feasts fit for kings and queens.</p>
        </div>
        <p className='p__opensans'>Where every dish tells a story worthy of the Seven Kingdoms.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
