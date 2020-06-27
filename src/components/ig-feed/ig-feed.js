import React from 'react';
import './ig-feed.scss';

import feed from '../../assets/feed';

import Button from '../elements/button/button';

export default function IgFeed () {

  return (
    <section className="wgs-ig">
      <h1 className="wgs-section-title">Social Media <Button>Follow Us on Instagram</Button><Button>Subscribe to our YouTube</Button></h1>
      <div className="wgs-section-horizontal-row">
        {feed.map(post => (
          <a className="wgs-ig-post" key={post.title} tabindex="0" href={post.url} target="_blank" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={post.header} alt="Post in Instagram Feed" />
            <div class="wgs-ig-post-info">
              <h1>{post.title}</h1>
              <p>View on Instagram →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}