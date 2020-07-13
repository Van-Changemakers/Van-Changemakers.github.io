import React from 'react';
import './footer.scss';
import Logo from '../../assets/changemakers_logo.png';

export default function Footer () {
  return (
    <footer className="wgs-footer">
      <img alt="Changemakers Logo" src={Logo} />
      <div className="column">
        <h3>Contact</h3>
        <p><a className="link" href="mailto:">Email Us</a></p>
        <p>Report site issue on <a className="link" href="https://github.com/We-Changemakers/We-Changemakers.github.io/issues">GitHub</a></p>
      </div>
    </footer>
  )
}