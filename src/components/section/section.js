import React from 'react';
import './section.scss';

export default function Section ({title, tiles}) {
  return (
    <section className="wgs-section">
      <h1 className="wgs-section-title">{title}</h1>
      <div className="wgs-section-horizontal-row">
        {tiles.map(tile => (
          <a href={tile.url} target="_blank" rel="noopener noreferrer" key={tile.title} tabindex="0">
            <div className="wgs-tile">
              <img className="wgs-tile-icon" src={tile.icon} alt="Icon" />
              <div className="wgs-tile-body">
                <h2>{tile.title}</h2>
                <p>{tile.tagline}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}