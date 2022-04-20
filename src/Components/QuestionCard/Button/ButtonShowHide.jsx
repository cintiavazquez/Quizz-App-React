import React from 'react';
import { ButtonShowHideStyled } from './Button.styled';
import { useState } from 'react';

export default function ButtonShowHide({ onToggleVisible }) {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <ButtonShowHideStyled
      onClick={() => {
        setShowAnswer(!showAnswer);

        onToggleVisible();
      }}
    >
      {showAnswer ? 'Show answer' : 'Hide answer'}
    </ButtonShowHideStyled>
  );
}
