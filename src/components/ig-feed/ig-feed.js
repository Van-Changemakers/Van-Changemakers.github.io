import React from 'react';
import './ig-feed.scss';

import feed from '../../assets/feed.json';

import Button from '../elements/button/button';

export default function IgFeed () {

  return (
    <section className="wgs-ig">
      <h1 className="wgs-section-title">Instagram Feed <Button>Follow Us</Button></h1>
      <div className="wgs-section-horizontal-row">
        {feed.data.map(post => (
          <div className="wgs-ig-post" key={post.id} tabindex="0">
            <img className="wgs-ig-post-image" src={post.media_url} alt="Post in Instagram Feed" />
          </div>
        ))}
      </div>
    </section>
  );
}