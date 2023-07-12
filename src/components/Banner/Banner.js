import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import './Banner.css';
const Banner = () => {
  return (
    <section
      id="home"
      className="b-wrapper"
    >
 <div className="flexCenter paddings innerWidth hero-container">
    
      <LeftBanner />
     <RightBanner />
     </div>
    </section>
  );
}

export default Banner;