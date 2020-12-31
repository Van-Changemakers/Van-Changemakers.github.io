import React, { useEffect } from 'react';
import Dialogue from './dialogue';

import './dialogue-manager.scss';

import { Link, navigate } from 'gatsby';

import Skyline from '../../assets/skyline.jpg';

export default function DialogueManager ({ data, urlRoot, index }) {

  index = Number(index);

  /*const isFirstEntry = index === 0;
  const isLastEntry = index + 1 === data.length;*/

  useEffect(() => {

    let scrollView = document.querySelector('.dm-scroll-container');

    scrollView.scrollLeft = index * window.innerWidth;

    scrollView.addEventListener('scroll', handleScroll);

    return () => {
      scrollView.removeEventListener('scroll', handleScroll);
    }
  });

  function handleScroll (event) {
    let scrollView = event.target;
    let scrollViewBox = scrollView.getBoundingClientRect();
    let dialogues = scrollView.querySelectorAll('.wgs-dialogue');
    /*let dialoguesArray = Array.from(dialogues);
    dialoguesArray.forEach((dialogue, index) => {
      let pos = scrollViewBox.width * index;
      let offset = Math.abs(scrollView.scrollLeft - pos);
      //dialogue.style.transform = `scale(${1 - Math.min(0.1, offset / scrollViewBox.width)})`;
    });*/
    if (scrollView.scrollLeft % scrollViewBox.width === 0) {
      let scrolledIndex = scrollView.scrollLeft / window.innerWidth;
      let newIndex = Number(dialogues[scrolledIndex].getAttribute('data-index'));
      if (newIndex !== index) {
        console.log('changing page to ', newIndex);
        console.log('index is set to ', index);
        console.log('scroll position is ', scrollView.scrollLeft);
        console.log('\n\n\n');
        navigate(`/${urlRoot}/${newIndex}`);
      }
    }
  }

  return (
    <div className="dm-scroll-parent">
      <div className="dm-scroll-container" style={{backgroundImage: `linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url(${Skyline})`}}>
        {data.map((dialogue, index) => {
          return <Dialogue data={dialogue} key={index} index={index} />
        })}
      </div>
      <div className="wgs-dialogue-fab-bar">

        <button className="wgs-fab wgs-fab-small wgs-dialogue-sharebutton" onClick={() => {
          if (navigator.share) {
            navigator.share({
              url: document.location.href,
              title: `${data[index].title} | Vancouver Changemakers`
            });
          }
        }}><span className="wgs-fab-inner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
        </span><mwc-ripple></mwc-ripple></button>

        <button className="wgs-fab wgs-fab-small" onClick={() => {
          document.querySelector('.dm-scroll-container').scrollTo({
            top: 0,
            left: document.querySelector('.dm-scroll-container').scrollLeft - window.innerWidth,
            behavior: 'smooth'
          });
        }}><span className="wgs-fab-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </span><mwc-ripple></mwc-ripple></button>

        <button className="wgs-fab wgs-fab-big" onClick={() => {
          document.querySelector(`.wgs-dialogue[data-index="${index}"]`).scrollTo({
            top: window.innerHeight - 176,
            left: 0,
            behavior: 'smooth'
          });
        }}><span className="wgs-fab-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
          <span className="wgs-fab-text">Open</span>
        </span><mwc-ripple primary></mwc-ripple></button>

        <button className="wgs-fab wgs-fab-small" onClick={() => {
          document.querySelector('.dm-scroll-container').scrollTo({
            top: 0,
            left: document.querySelector('.dm-scroll-container').scrollLeft + window.innerWidth,
            behavior: 'smooth'
          });
        }}><span className="wgs-fab-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </span><mwc-ripple></mwc-ripple></button>
      </div>
    </div>
  )

}