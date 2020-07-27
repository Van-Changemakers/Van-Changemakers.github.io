import React, { useEffect } from 'react';
import Dialogue from './dialogue';

import './dialogue-manager.scss';

import { useParams, useHistory, Link } from 'react-router-dom';

import Skyline from '../../assets/skyline.jpg';

export default function DialogueManager ({ data }) {

  let { index } = useParams();
  index = Number(index);

  const history = useHistory();

  const isFirstEntry = index === 0;
  const isLastEntry = index + 1 === data.length;

  useEffect(() => {

    let scrollView = document.querySelector('.dm-scroll-container');

    if (!isFirstEntry) scrollView.scrollLeft = window.innerWidth;

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
      let scrolledIndex = scrollView.scrollLeft / scrollViewBox.width;
      let newIndex = Number(dialogues[scrolledIndex].getAttribute('data-index'));
      if (newIndex !== index) {
        console.log('changing page to ', newIndex);
        if (newIndex === 0) scrollView.scrollLeft = 0;
        if (newIndex !== 0) scrollView.scrollLeft = window.innerWidth;
        history.push(`/organizations/${newIndex}`);
        return;
      }
    }
  }

  return (
    <div className="dm-scroll-parent">
      <div className="dm-scroll-container" style={{backgroundImage: `linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url(${Skyline})`}}>
        {(!isFirstEntry) ? <Dialogue data={data[index - 1]} key={index - 1} index={index - 1} /> : <></>}
        <Dialogue data={data[index]} key={index} index={index} />
        {(!isLastEntry) ? <Dialogue data={data[index + 1]} key={index + 1} index={index + 1} /> : <></>}
      </div>
      <div className="wgs-dialogue-fab-bar">
        <button class="wgs-fab wgs-fab-small" onClick={() => {
          document.querySelector('.dm-scroll-container').scrollTo({
            top: 0,
            left: document.querySelector('.dm-scroll-container').scrollLeft - window.innerWidth,
            behavior: 'smooth'
          });
        }}><span class="wgs-fab-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </span><mwc-ripple></mwc-ripple></button>
        <Link to="/"><button class="wgs-fab wgs-fab-big"><span class="wgs-fab-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          <span class="wgs-fab-text">Close</span>
        </span><mwc-ripple primary></mwc-ripple></button></Link>
        <button class="wgs-fab wgs-fab-small" onClick={() => {
          document.querySelector('.dm-scroll-container').scrollTo({
            top: 0,
            left: document.querySelector('.dm-scroll-container').scrollLeft + window.innerWidth,
            behavior: 'smooth'
          });
        }}><span class="wgs-fab-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </span><mwc-ripple></mwc-ripple></button>
      </div>
    </div>
  )

}