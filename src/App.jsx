import { useState } from 'react';
import styled from 'styled-components';
import { ContentWrap } from './App.styled';
import QuestionCard from './Components/QuestionCard/QuestionCard';

function App() {
  return (
    <ContentWrap>
      <QuestionCard />
      <QuestionCard />
    </ContentWrap>
  );
}

export default App;
