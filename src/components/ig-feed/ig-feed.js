import React from 'react';
import './ig-feed.scss';

import feed from '../../assets/feed';

import { Link } from 'react-router-dom';

export default function IgFeed ({wrap = false}) {

  return (
    <section className="wgs-ig">
      <h1 className="wgs-section-title">Social Media</h1>
      <div className={`wgs-section-horizontal-row ${wrap ? 'wrap' : ''}`}>
        {feed.map(post => (
          <a className="wgs-ig-post" key={post.title} tabIndex="0" href={post.url} target="_blank" rel="noreferrer noopener">
            <img className="wgs-ig-post-image" src={post.header} alt="Post in Instagram Feed" />
            <div className="wgs-ig-post-info">
              <h1>{post.title}</h1>
              <p>View on {post.platform} →</p>
            </div>
          </a>
        ))}
      </div>
      {wrap ? '' : <Link className="link" to="/socialmedia">View All →</Link>}
    </section>
  );
}