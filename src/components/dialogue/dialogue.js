import React, { useEffect } from 'react';
import './dialogue.scss';

import Button from '../elements/button/button';

export default function Dialogue ({data}) {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'unset';
    }
  })

  const { icon, bio, title, header, url } = data;
  return (
    <>
      <div className="wgs-dialogue-background"></div>
      <div className="wgs-dialogue">
        <div className="wgs-dialogue-content">
          <div className="wgs-dialogue-header" style={{backgroundImage: `url(${header})`}}>
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
      </div>
    </>
  )
}