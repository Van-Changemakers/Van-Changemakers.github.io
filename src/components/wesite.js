import React from 'react';
import './wesite.scss';

import Header from './header/header';
import Section from './section/section';
import IgFeed from './ig-feed/ig-feed';

import Resources from '../assets/resources';

export default function WeSite () {
  return (
    <>
      <Header />
      <main className="wgs-main">
        <IgFeed></IgFeed>
        <Section title="Resources" tiles={Resources} />
      </main>
    </>
  );
}