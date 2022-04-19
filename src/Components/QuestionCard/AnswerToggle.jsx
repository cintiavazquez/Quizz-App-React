import { ButtonShowHide } from './Button/Button.styled';
import React, { useState, useEffect } from 'react';
import { AnswerToggleContainer } from './AnswerToggle.styled';

export default function AnswerToggle({ text }) {
  const [showAnswer, setShowAnswer] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, [showAnswer]);
  useEffect(() => {}, [showAnswer]);

  return (
    <AnswerToggleContainer>
      <ButtonShowHide
        onClick={() => {
          setShowAnswer(!showAnswer);

          setVisible(!visible);
        }}
      >
        {showAnswer ? 'Show answer' : 'Hide answer'}
      </ButtonShowHide>

      <p>{visible ? text : ''}</p>
    </AnswerToggleContainer>
  );
}
