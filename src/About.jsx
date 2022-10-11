import React from 'react';
import Common from './Common';
import web from './images/Hero_Img.svg';
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page" visit='/contact'
        btname='Contact Us!' imgsrc={web}
      />
    </>
  );
}

export default About;
