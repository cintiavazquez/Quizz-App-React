import React from 'react';
import { BookmarkEmpty } from './BookmarkEmpty';
import { BookmarkFilled } from './BookmarkFilled';

export default {
  title: 'Components/Bookmark',
  component: Bookmark,
  decorators: [
    Story => {
      return (
        <div style={{ padding: '3em', maxWidth: '400px' }}>
          <Story />
        </div>
      );
    },
  ],
};

// const props = {
//   isBookmarked: true,
// };

export const NotBookmarked = () => <BookmarkEmpty />;

export const IsBookmarked = () => <BookmarkFilled />;
