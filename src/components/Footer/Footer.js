import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
//import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerwidth flexCenter f-container'>
        <div className='flexColStart f-left'>
          <img src="" alt="" width={120} />

          <span className='orange-Text text-designColor'> Our Vision</span>
          <span className="text-white "> 
          bytesNpixcel is a professional website design, website development,<br/>
          app development, seo and digital marketing organization that offers<br/>
          a full capacity for planning a site and internet marketing at a sensible<br/>
           cost.</span>
        </div>

        <div className='flexColstart f-right'>
          <span className='orange-Text text-designColor'>Information</span>
         
          <div className='flexCenter f-menu'>
            <span>Home</span>
            <span>About</span>
            <span>Portfolio</span>
            <span>Contact Us</span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Footer;