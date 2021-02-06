import React from 'react';
import './wesite.scss';
import '../index.css';

import 'focus-visible';

import ChangemakersLogoWhite from '../assets/changemakers_logo_white.png';

import { Link } from 'gatsby';
import { Helmet } from "react-helmet";

import Cart from './cart/cart.js';

export default function WeSite ({ noCart, children }) {
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
      
      <div className="wgs-header-links animated-entry">
        <Link to="/"><img className="wgs-home-link" src={ChangemakersLogoWhite} alt="Changemakers Logo" /></Link>
        <Link className="textlink" to="/shop">Shop</Link>
        <Link className="textlink" to="/socialmedia">Social Media</Link>
        <Link className="textlink" to="/about">About Us</Link>
        <div className="wgs-header-links-right">
          {!noCart ? <Cart></Cart> : <></>}
        </div>
      </div>
      { children }
    </>
  );
}