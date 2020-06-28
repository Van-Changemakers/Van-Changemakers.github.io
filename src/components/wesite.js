import React from 'react';
import './wesite.scss';

import Home from '../pages/home';
import Error404 from '../pages/error404';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function WeSite () {
  return (
    <>
      <div className="wgs-header-links">
        <a href="#calendar">Calendar</a>
        <a href="#fundraisers">Fundraisers</a>
        <a href="#resources">Resources</a>
        <a href="#social_media">Social Media</a>
      </div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/other">
          <p>OwO EwE</p>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Router>
    </>
  );
}