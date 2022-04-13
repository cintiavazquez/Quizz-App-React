import styled from 'styled-components';
import Tags from './Tags/Tags';
import { TagContainer } from './Tags/Tags.styled';
import Button from './Button/Button';

import Bookmark from './Bookmark/Bookmark';
import { CardContainer } from './QuestionCard.styled';

export default function QuestionCard() {
  return (
    <CardContainer>
      <h3>Question</h3>
      <Bookmark />
      <div className="question__wrap js-questionwrap">
        <p>Is this question 1?"</p>
        <Button />
        <p>Velit ducimus officia quos cum modi obcaecati dolor.</p>
      </div>
      <TagContainer>
        <Tags name="tag1" />
        <Tags name="tag2" />
        <Tags name="tag3" />
        <Tags name="tag4" />
      </TagContainer>
    </CardContainer>
  );
}
