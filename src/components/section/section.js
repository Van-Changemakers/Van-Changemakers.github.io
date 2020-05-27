import React, { useState } from 'react';
import './section.scss';

import Dialogue from '../dialogue/dialogue';

export default function Section ({title, tiles}) {

  const [openDialogue, setOpenDialogue] = useState(null);

  return (
    <>
      <section className="wgs-section">
        <h1 className="wgs-section-title">{title}</h1>
        <div className="wgs-section-horizontal-row">
          {tiles.map(tile => (
            <div className="wgs-tile" key={tile.title} tabindex="0" onClick={() => setOpenDialogue(tile)}>
              <img className="wgs-tile-icon" src={tile.icon} alt="Icon" />
              <div className="wgs-tile-body">
                <h2>{tile.title}</h2>
                <p>{tile.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {openDialogue !== null ? <Dialogue data={openDialogue} /> : <></>}
    </>
  );
}