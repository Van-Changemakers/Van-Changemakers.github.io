import React from 'react';
import WeSite from './src/components/wesite.js';

import './src/index.css';

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <WeSite {...props}>{element}</WeSite>
}