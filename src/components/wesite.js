import React from 'react';
import './wesite.scss';

import Header from './header/header';
import Section from './section/section';
import IgFeed from './ig-feed/ig-feed';

import EmailRepsIcon from '../assets/email_reps.svg';

export default function WeSite () {
  return (
    <>
      <Header />
      <main className="wgs-main">
        <IgFeed></IgFeed>
        <Section title="Resources" tiles={[{title: "Email Reps", icon: EmailRepsIcon, body: "Easily find and connect with your representatives in all levels of government.", url: "https://jamesbmadden.github.io/email-mp"}]} />
      </main>
    </>
  );
}