import React from 'react'
import './Footer.css'

import Instagram from '../../Assets/icon_instagram.svg';
import Facebook from '../../Assets/icon_facebook.svg';
import Twitter from '../../Assets/icon_twitter.svg';
import Mail from '../../Assets/icon_mail.svg';
import Twitch from '../../Assets/icon_twitch.svg';

const Footer = () => {
  return (
    <div className="footer-section">
        <div className="footer-section-container">
            <div className='footer-section-first'>
                <div className="footer-text">
                    Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
                </div>
                <div className="footer-text">
                    binarcarrental@gmail.com
                </div>
                <div className="footer-text">
                    081-233-334-808
                </div>
            </div>
            <div className='footer-section-second'>
                <a href="#OurServices" className="section-second-footer-text">
                    Our Services
                </a>
                <a href="#WhyUs" className="section-second-footer-text">
                    Why Us
                </a>
                <a href="#Testimonial" className="section-second-footer-text">
                    Testimonial
                </a>
                <a href="#FAQ" className="section-second-footer-text">
                    FAQ
                </a>
            </div>
            <div className='footer-section-third'>
                <div className="footer-text">
                    Connect with us
                </div>
                <div className="blue-icon">
                    <img src={Facebook} className="icon-socmed"/>
                    <img src={Instagram} className="icon-socmed"/>
                    <img src={Twitter} className="icon-socmed"/>
                    <img src={Mail} className="icon-socmed"/>
                    <img src={Twitch} className="icon-socmed"/>
                </div>
            </div>
            <div className='footer-section-fourth'>
                <div className="footer-text">
                    Copyright Binar 2022
                </div>
                <div className="blue-box">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer