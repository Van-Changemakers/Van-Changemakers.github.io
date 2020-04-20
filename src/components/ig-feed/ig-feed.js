import React from 'react';
import './ig-feed.scss';

import feed from '../../assets/feed.json';

export default function IgFeed () {

  return (
    <section className="wgs-ig">
      <h1 className="wgs-section-title">Instagram Feed</h1>
      <div className="wgs-section-horizontal-row">
        {feed.data.map(post => (
          <div className="wgs-ig-post" key={post.id}>
            <img className="wgs-ig-post-image" src={post.media_url} alt="Post in Instagram Feed" />
            <p className="wgs-ig-post-bio">{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}