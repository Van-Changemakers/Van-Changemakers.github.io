import React, { useEffect } from 'react';
import Dialogue from './dialogue';

import './dialogue-manager.scss';

import { useParams } from 'react-router-dom';

import Skyline from '../../assets/skyline.jpg';

export default function DialogueManager ({ data }) {

  const { index } = useParams();

  // eslint-disable-next-line
  const isFirstEntry = index == 0;
  // eslint-disable-next-line
  const isLastEntry = index + 1 == data.length;

  useEffect(() => {

    let scrollView = document.querySelector('.dm-scroll-container');

    if (!isFirstEntry) scrollView.scrollLeft = window.innerWidth;

    scrollView.addEventListener('scroll', handleScroll);

    return () => {
      scrollView.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className="dm-scroll-parent">
      <div className="dm-scroll-container" style={{backgroundImage: `linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url(${Skyline})`}}>
        {(!isFirstEntry) ? <Dialogue data={data[index - 1]} key={index - 1} /> : <></>}
        <Dialogue data={data[index]} key={index} />
        {(!isLastEntry) ? <Dialogue data={data[2]} key={index + 1} /> : <></>}
      </div>
    </div>
  )

}

function handleScroll (event) {
  let scrollView = event.target;
  let scrollViewBox = scrollView.getBoundingClientRect();
  let dialogues = scrollView.querySelectorAll('.wgs-dialogue');
  let dialoguesArray = Array.from(dialogues);

  scrollView.addEventListener('scroll', () => {
    dialoguesArray.forEach((dialogue, index) => {
      let pos = scrollViewBox.width * index;
      let offset = Math.abs(scrollView.scrollLeft - pos);
      dialogue.style.transform = `scale(${1 - Math.min(0.5, offset / scrollViewBox.width)})`;
    });
  });
}