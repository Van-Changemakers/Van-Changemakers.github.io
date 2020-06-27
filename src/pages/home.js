import React from 'react';

import Header from '../components/header/header';
import Section from '../components/section/section';
import IgFeed from '../components/ig-feed/ig-feed';

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