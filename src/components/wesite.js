import React from 'react';
import './wesite.scss';

import Home from '../pages/home';
import Error404 from '../pages/error404';
import SocialMedia from '../pages/socialmedia';
import Holiday from '../pages/shop'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DialogueManager from './dialogue/dialogue-manager';

import ChangemakersLogoWhite from '../assets/changemakers_logo_white.png';

import Resources from '../assets/resources';

import { Link } from 'react-router-dom';

export default function WeSite () {
  return (
    <>
      <Router>
        <div className="wgs-header-links">
          <Link to="/"><img className="wgs-home-link" src={ChangemakersLogoWhite} alt="Changemakers Logo" /></Link>
          <Link className="textlink" to="/shop">Shop</Link>
          <Link className="textlink" to="/socialmedia">Social Media</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/socialmedia">
            <SocialMedia />
          </Route>
          <Route path="/shop">
            <Holiday></Holiday>
          </Route>
          <Route path="/organizations/:index">
            <DialogueManager data={Resources} />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}