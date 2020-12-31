import React from 'react';
import './wesite.scss';

import '@material/mwc-ripple';

import 'focus-visible';

import ChangemakersLogoWhite from '../assets/changemakers_logo_white.png';

import { Link } from 'gatsby';
import { Helmet } from "react-helmet"

export default function WeSite ({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Van Changemakers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Vancouver Changemakers Site"
        />
      </Helmet>
      
      <div className="wgs-header-links">
        <Link to="/"><img className="wgs-home-link" src={ChangemakersLogoWhite} alt="Changemakers Logo" /></Link>
        <Link className="textlink" to="/shop">Shop</Link>
        <Link className="textlink" to="/socialmedia">Social Media</Link>
      </div>
      { children }
    </>
  );
}