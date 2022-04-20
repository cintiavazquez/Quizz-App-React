import React, { useState } from 'react';
import { AnswerToggleContainer } from './AnswerToggle.styled';
import ButtonShowHide from './Button/ButtonShowHide';

export default function AnswerToggle({ text }) {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <AnswerToggleContainer>
      <ButtonShowHide onToggleVisible={toggleVisible} />

      <p>{visible ? text : ''}</p>
    </AnswerToggleContainer>
  );
}
