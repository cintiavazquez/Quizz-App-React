import { BookmarkEmpty } from './BookmarkEmpty';
import { BookmarkFilled } from './BookmarkFilled';
import styled from 'styled-components';
//import { useState } from 'react';

export default function Bookmark({ onToggleBookmarked, Bookmarkstatus }) {
  // const [bookmarked, setBookmarked] = useState(true);

  return (
    <QuestionBookmark
      onClick={() => {
        onToggleBookmarked();
      }}
    >
      {Bookmarkstatus ? (
        <BookmarkFilled alt="Unbookmark me" />
      ) : (
        <BookmarkEmpty alt="Bookmark me" />
      )}
    </QuestionBookmark>
  );
}

const QuestionBookmark = styled.aside`
  position: absolute;
  top: -15px;
  right: 5%;
`;
