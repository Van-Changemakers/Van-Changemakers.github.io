import React from 'react';

import WeSite from '../components/wesite.js';

import Header from '../components/header/header';
import Section from '../components/section/section';
import IgFeed from '../components/ig-feed/ig-feed';
import Footer from '../components/footer/footer';

import Resources from '../assets/resources';

export default function Home () {
  return (
    <>
      {/*<WeSite />*/}
      <Header />
      <main className="wgs-main">
        <IgFeed></IgFeed>
        <Section title="Organizations" tiles={Resources} />
      </main>
      <Footer />
    </>
  );
}