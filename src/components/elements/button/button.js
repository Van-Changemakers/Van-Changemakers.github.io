import React from 'react';
import './button.scss';

export default function Button ({ children }) {
  return (
    <button className="wgs-button">
      {children}
    </button>
  )
}