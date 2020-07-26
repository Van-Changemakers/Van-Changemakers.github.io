import React, { useEffect } from 'react';
import Dialogue from './dialogue';

import './dialogue-manager.scss';

import { useParams, useHistory } from 'react-router-dom';

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
    let dialoguesArray = Array.from(dialogues);
    dialoguesArray.forEach((dialogue, index) => {
      // let pos = scrollViewBox.width * index;
      // let offset = Math.abs(scrollView.scrollLeft - pos);
      //dialogue.style.transform = `scale(${1 - Math.min(0.25, offset / scrollViewBox.width)})`;
    });
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
        {(!isLastEntry) ? <Dialogue data={data[2]} key={index + 1} index={index + 1} /> : <></>}
      </div>
    </div>
  )

}