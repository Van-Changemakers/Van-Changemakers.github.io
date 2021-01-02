import React from 'react';
import './header.scss';
import Skyline from '../../assets/skyline.jpg';

import Calendar from './calendar/calendar';

export default function Header ({ title = "Changemakers", subtitle = "VANCOUVER", image = Skyline, showCalendar = true}) {
  return (
    <>
      <header className={`wgs-header ${showCalendar ? 'calendar-visible' : ''}`} style={{backgroundImage: `linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url(${image})`}}>
        <div className="wgs-header-title-box">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
        </div>
        {showCalendar ? <Calendar></Calendar> : <></>}
      </header>
    </>
  )
}