import React from 'react';

import WeSite from '../components/wesite.js';

import IgFeed from '../components/ig-feed/ig-feed';

import InstagramLogo from '../assets/icons/instagram.jpeg';
import YoutubeLogo from '../assets/icons/youtube.png'

export default function SocialMedia () {
  return (
    <>
      <WeSite />
      <main className="wgs-main" style={{'padding-top': '64px'}}>
        <h1 className="wgs-section-title">Accounts</h1>
        <div className="wgs-section-horizontal-row small">
          <a className="wgs-ig-post" key="Instagram" tabIndex="0" href="https://www.instagram.com/van.changemakers/" target="_blank" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={InstagramLogo} alt="" />
            <div className="wgs-ig-post-info">
              <h1>Instagram</h1>
              <p>@van.changemakers →</p>
            </div>
          </a>
          <a className="wgs-ig-post" key="YouTube" tabIndex="0" href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={YoutubeLogo} alt="" />
            <div className="wgs-ig-post-info">
              <h1>YouTube</h1>
              <p>Coming Soon →</p>
            </div>
          </a>
        </div>
        <IgFeed wrap></IgFeed>
      </main>
    </>
  );
}