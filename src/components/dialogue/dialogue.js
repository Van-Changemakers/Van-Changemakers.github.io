import React, { useEffect } from 'react';
import './dialogue.scss';

import Button from '../elements/button/button';

function handleVerticalScroll (event) {
  const dialogue = event.target;
  const title = event.target.querySelector('.wgs-dialogue-title');
  const main = event.target.querySelector('.wgs-dialogue-main');

  if (dialogue.scrollTop < (window.innerHeight - 176)) {
    const percentage = dialogue.scrollTop / (window.innerHeight - 176);

    title.style.transform = `translateY(${116 * percentage}px) scale(${1 / (1 + (percentage))})`;
    main.style.overflowY = 'hidden';
  } else {
    title.style.transform = `translateY(${116}px) scale(0.5)`;
    main.style.overflowY = 'auto';
  }
}

export default function Dialogue ({data, index}) {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    document.querySelector(`.wgs-dialogue[data-index="${index}"]`).addEventListener('scroll', handleVerticalScroll);

    return () => {
      document.body.style.overflowY = 'unset';
      document.querySelector(`.wgs-dialogue[data-index="${index}"]`).removeEventListener('scroll', handleVerticalScroll);
    }
  })

  const { icon, bio, title, header, url } = data;
  return (
    <div className="wgs-dialogue" data-index={index}>
      <div className="wgs-dialogue-content" style={{backgroundImage: `url(${header})`}}>
        <div className="wgs-dialogue-header">
          <div className="wgs-dialogue-titlebox">
            <h1 className="wgs-dialogue-title">{title}</h1>
          </div>
        </div>
        <main className="wgs-dialogue-main">
          <a href={url} target="_blank" rel="noreferrer noopener"><Button>Visit Website</Button></a>
          <p className="wgs-dialogue-bio">{bio}</p>
        </main>
      </div>
      <div className="wgs-dialogue-icon">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <div className="wgs-dialogue-fab-bg"></div>
    </div>
  )
}