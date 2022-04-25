import { BookmarkEmpty } from './BookmarkEmpty';
import { BookmarkFilled } from './BookmarkFilled';
import styled from 'styled-components';
import { useState } from 'react';

export default function Bookmark() {
  const [bookmarked, setBookmarked] = useState(true);
  const [visibleFilled, setVisibleFilled] = useState(false);

  return (
    <QuestionBookmark
      onClick={() => {
        setBookmarked(!bookmarked);
      }}
    >
      {bookmarked ? (
        <BookmarkEmpty alt="Bookmark me" />
      ) : (
        <BookmarkFilled alt="Unbookmark me" />
      )}
    </QuestionBookmark>
  );
}

const QuestionBookmark = styled.aside`
  position: absolute;
  top: -15px;
  right: 5%;
`;
