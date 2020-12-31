import React from 'react';
import './section.scss';

import { Link } from 'gatsby';

export default function Section ({title, tiles}) {

  return (
    <>
      <section className="wgs-section">
        <h1 className="wgs-section-title">{title}</h1>
        <div className="wgs-section-horizontal-row">
          {tiles.map((tile, index)=> (
            <Link to={`/organizations/${index}`}>
              <div className="wgs-tile" key={tile.title} tabIndex="0">
                <img className="wgs-tile-icon" src={tile.icon} alt="Icon" />
                <div className="wgs-tile-body">
                  <h2>{tile.title}</h2>
                  <p>{tile.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}