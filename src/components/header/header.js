import React from 'react';
import './header.scss';
import Skyline from '../../assets/skyline.jpg';

import Calendar from './calendar/calendar';

export default function Header () {
  return (
    <>
      <header className="wgs-header" style={{backgroundImage: `linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url(${Skyline})`}}>
        <div className="wgs-header-title-box">
          <h3>VANCOUVER</h3>
          <h1>Changemakers</h1>
        </div>
        <Calendar></Calendar>
      </header>
    </>
  )
}