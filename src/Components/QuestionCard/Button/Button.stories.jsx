import React from 'react';
import ButtonShowHide from './ButtonShowHide';

export default {
  title: 'Components/Button/ButtonShowHide',
  component: ButtonShowHide,
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

export const Default = () => <ButtonShowHide />;

//export const Default = () => <QuestionCard {...props} />;
