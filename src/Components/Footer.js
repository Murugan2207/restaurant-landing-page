import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
      <div className='footer-logo-container' style={{color:"#fe9e0d",fontSize:'2rem',fontWeight:'900',textDecoration:''}}>
         VAANGA  SAAPDALAM
      </div>
        <div className='footer-icons'>
          <BsTwitter />
          <SiLinkedin />
          <FaFacebook />
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Career</span>
          <span>Work</span>
        </div>
        <div className='footer-section-columns' style={{marginRight:"1rem"}}>
          <span>123-56-987</span>
          <span>contact@Vaangasaapdalam.com</span>
          <span>press@Vaangasaapdalam.com</span>
          <span>career@Vaangasaapdalam.com</span>
        </div>
        <div className='footer-section-columns'>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
