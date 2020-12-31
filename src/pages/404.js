import React from 'react';

import WeSite from '../components/wesite.js';

export default function Error404 () {

  return (
    <WeSite>
      <main className="wgs-main" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
        <h1 style={{fontSize: '4rem', margin: '0'}}>404</h1>
        <p>No page</p>
      </main>
    </WeSite>
  );
}