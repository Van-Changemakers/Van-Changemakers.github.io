import React from 'react';
import './section.scss';

export default function Section ({title, tiles}) {
  return (
    <section class="wgs-section">
      <h1 class="wgs-section-title">{title}</h1>
      <div class="wgs-section-horizontal-row">
        {tiles.map(tile => (
          <a href={tile.url} target="_blank" rel="noopener noreferrer">
            <div class="wgs-tile">
              <img class="wgs-tile-icon" src={tile.icon} alt="Icon" />
              <div class="wgs-tile-body">
                <h2>{tile.title}</h2>
                <p>{tile.body}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}