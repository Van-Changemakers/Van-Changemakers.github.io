import React from 'react';
import './calendar.scss';

import { Link } from 'react-router-dom';

import Highlights from '../../../assets/articles/highlights.js';

export default function Calendar () {
  return (
    <>
      <p class="wgs-header-calendar-label">LATEST HIGHLIGHTS</p>
      <div className="wgs-section-horizontal-row small wgs-header-highlights">
        {Highlights.map((highlight, index) => {
          return (<Link to={`/highlights/${index}`}>
            <div className="wgs-ig-post" key="Instagram" tabIndex="0">
              <img className="wgs-ig-post-image" src={highlight.icon} alt="" />
              <div className="wgs-ig-post-info">
                <h1>{highlight.title}</h1>
                <p>{highlight.tagline}</p>
              </div>
            </div>
          </Link>)
        })}
          {/* <a className="wgs-ig-post" key="Instagram" tabIndex="0" href="#a" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={CardSale} alt="" />
            <div className="wgs-ig-post-info">
              <h1>Holiday Sale</h1>
              <p>Fundraiser for the lookout society over the holidays</p>
            </div>
          </a>
          <a className="wgs-ig-post" key="YouTube" tabIndex="0" href="#a" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={SocialMedia} alt="" />
            <div className="wgs-ig-post-info">
              <h1>Digital Change</h1>
              <p>Social media efforts to continue changing the world during a pandemic</p>
            </div>
          </a>
          <a className="wgs-ig-post" key="YouTube" tabIndex="0" href="#a" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={FlowerSale} alt="" />
            <div className="wgs-ig-post-info">
              <h1>Flower Sale</h1>
              <p>Valentine's Day flower sale for covenant house</p>
            </div>
          </a> */}
        </div>
      {/*<div class="wgs-header-calendar">
        <div class="wgs-header-calendar-date">
          <h1>12</h1>
          <h3>December</h3>
        </div>
        <div class="wgs-header-calendar-title">Holiday Card Sale</div>
        <div class="wgs-header-calendar-location">

        </div>
      </div>*/}
    </>
  )
}