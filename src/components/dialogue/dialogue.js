import React from 'react';
import './dialogue.scss';

export default function Dialogue ({data}) {

  document.body.style.overflow = 'hidden';

  const { icon, bio, title, header } = data;
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
          <p class="wgs-dialogue-bio">{bio}</p>
        </main>
      </div>
    </>
  )
}