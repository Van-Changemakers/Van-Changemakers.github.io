import React from 'react';
import './wesite.scss';

import ChangemakersLogoWhite from '../assets/changemakers_logo_white.png';

import { Link } from 'gatsby';

export default function WeSite ({ children }) {
  return (
    <>
      <div className="wgs-header-links">
        <Link to="/"><img className="wgs-home-link" src={ChangemakersLogoWhite} alt="Changemakers Logo" /></Link>
        <Link className="textlink" to="/shop">Shop</Link>
        <Link className="textlink" to="/socialmedia">Social Media</Link>
      </div>
      { children }
    </>
  );
}