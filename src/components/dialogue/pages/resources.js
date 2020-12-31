import React from 'react';
import DialogueManager from '../dialogue-manager.js';

import '../../wesite.scss';

import Resources from '../../../assets/resources.js';

export default function HighlightsDialogue ({ pageContext }) {

  const { index } = pageContext;

  return <DialogueManager data={Resources} index={index} urlRoot="organizations" />
}

