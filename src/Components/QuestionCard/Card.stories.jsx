import React from 'react';
import QuestionCard from '././QuestionCard';

export default {
  title: 'Components/QuestionCard',
  component: QuestionCard,
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

const props = {
  id: '123',
  question: 'Meine Frage',
  answer: 'Meine Antwort',
  difficulty: 'tag1',
  category: 'tag2',
};

export const Default = () => <QuestionCard {...props} />;

// export const IsBookmarked = () => <Card {...props} isBookmarked />;
