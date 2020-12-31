import React from 'react';

import WeSite from '../../wesite.js';

import DialogueManager from '../dialogue-manager.js';

import '../../wesite.scss';

import Highlights from '../../../assets/articles/highlights.js';

export default function HighlightsDialogue ({ pageContext }) {

  const { index } = pageContext;

  return <WeSite><DialogueManager data={Highlights} index={index} urlRoot="highlights" /></WeSite>
}

