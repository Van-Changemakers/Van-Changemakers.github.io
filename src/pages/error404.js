import React from 'react';

import { useLocation } from 'react-router-dom';

export default function Error404 () {

  let location = useLocation();

  return (
    <main className="wgs-main" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
      <h1 style={{fontSize: '4rem', margin: '0'}}>404</h1>
      <p>No page for <code>{location.pathname}</code></p>
    </main>
  );
}