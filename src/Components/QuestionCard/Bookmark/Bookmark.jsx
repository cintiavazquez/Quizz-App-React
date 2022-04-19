import { BookmarkEmpty } from './BookmarkEmpty';
import { BookmarkFilled } from './BookmarkFilled';
import styled from 'styled-components';
import { useState } from 'react';

export default function Bookmark() {
  const [visibleEmpty, setVisibleEmpty] = useState(true);
  const [visibleFilled, setVisibleFilled] = useState(false);

  return (
    <QuestionBookmark>
      <BookmarkEmpty
        alt="Bookmark me"
        Visible="{visibleEmpty}"
        onClick={() => {
          console.log('pressed');
          // setVisibleEmpty(!visibleEmpty);
        }}
      ></BookmarkEmpty>

      <BookmarkFilled
        alt="Unbookmark me"
        onClick={() => {
          console.log('pressed');
          // setVisibleFilled(!visible);
        }}
      ></BookmarkFilled>
    </QuestionBookmark>
  );
}

const QuestionBookmark = styled.aside`
  position: absolute;
  top: -15px;
  right: 5%;
`;
