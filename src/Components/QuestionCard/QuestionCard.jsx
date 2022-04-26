import styled from 'styled-components';
// import Tags from './Tags/Tags';
import { TagContainer } from './Tags/Tags.styled';
import { TagElement } from './Tags/TagElement.styled';
import Bookmark from './Bookmark/Bookmark';
import { CardContainer } from './QuestionCard.styled';
import AnswerToggle from './AnswerToggle';
import { useState } from 'react';

export default function QuestionCard({
  question,
  answer,
  difficulty,
  category,
}) {
  const [bookmarked, setBookmarked] = useState(false);

  function toggleBookmarked() {
    return setBookmarked(!bookmarked);
  }
  return (
    <CardContainer isBookmarked="{bookmarked}">
      <h3>Question</h3>
      <Bookmark
        onToggleBookmarked={toggleBookmarked}
        Bookmarkstatus={bookmarked}
      />

      <p>{question}</p>

      <AnswerToggle text={answer}></AnswerToggle>

      <TagContainer>
        <TagElement>{difficulty}</TagElement>
        <TagElement>{category}</TagElement>
      </TagContainer>
    </CardContainer>
  );
}
