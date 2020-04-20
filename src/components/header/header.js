import React from 'react';
import './header.scss';
import Logo from '../../assets/we_logo_white.png';
import Skyline from '../../assets/skyline.jpg';

export default function Header () {
  return (
    <>
      <div className="wgs-header-links">
        <a href="#calendar">Calendar</a>
        <a href="#fundraisers">Fundraisers</a>
        <a href="#resources">Resources</a>
        <a href="#social_media">Social Media</a>
      </div>
      <header className="wgs-header" style={{backgroundImage: `linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url(${Skyline})`}}>
        <div className="wgs-header-title-box">
          <img src={Logo} alt="We" />
          <h1>Changemakers</h1>
        </div>
        <h3>Temporary Title</h3>
      </header>
    </>
  )
}