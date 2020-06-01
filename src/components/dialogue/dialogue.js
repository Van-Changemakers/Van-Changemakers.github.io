import React from 'react';
import './dialogue.scss';

import Button from '../elements/button/button';

export default function Dialogue ({data}) {

  document.body.style.overflow = 'hidden';

  const { icon, bio, title, header, url } = data;
  return (
    <>
      <div class="wgs-dialogue-background"></div>
      <div class="wgs-dialogue">
        <div class="wgs-dialogue-header" style={{backgroundImage: `url(${header})`}} />
        <div class="wgs-dialogue-icon">
          <img src={icon} alt={`${title} Icon`} />
        </div>
        <main class="wgs-dialogue-main">
          <h1 class="wgs-dialogue-title">{title}</h1>
          <a href={url} target="_blank" rel="noopener"><Button>Visit Website</Button></a>
          <p class="wgs-dialogue-bio">{bio}</p>
        </main>
      </div>
    </>
  )
}