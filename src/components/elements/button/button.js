import React from 'react';
import './button.scss';

export default function Button ({ disabled, children }) {
  return (
    <button className="wgs-button" disabled={disabled}>
      <span className="wgs-button-inner">
        {children}
      </span>
    </button>
  )
}