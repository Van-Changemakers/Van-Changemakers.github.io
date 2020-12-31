import React from 'react';

import WeSite from '../../wesite.js';

import DialogueManager from '../dialogue-manager.js';

import '../../wesite.scss';

import Resources from '../../../assets/resources.js';

export default function HighlightsDialogue ({ pageContext }) {

  const { index } = pageContext;

  return <WeSite><DialogueManager data={Resources} index={index} urlRoot="organizations" /></WeSite>
}

