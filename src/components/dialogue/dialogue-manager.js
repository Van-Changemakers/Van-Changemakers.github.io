import React from 'react';
import Dialogue from './dialogue';

import { useParams } from 'react-router-dom';

export default function DialogueManager ({ data }) {

  const { index } = useParams();

  return (
    <Dialogue data={data[index]} />
  )

}