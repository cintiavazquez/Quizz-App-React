import { useState, useEffect } from 'react';

import { QuestionContentWrap } from './App.styled';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import FetchApiData from './Components/QuestionCard/FetchApiData';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage';
import BookmarkPage from './Components/BookmarkPage';
import CreatePage from './Components/CreatePage';
import ProfilePage from './Components/ProfilePage';
import CreateForm from './Components/Form/Form';

function App() {
  const [apiLog, setApiLog] = useState([]);
  const url = 'https://opentdb.com/api.php?amount=10&category=18';

  useEffect(() => {
    FetchApiData(url, data => {
      setApiLog(data.results);

      console.log(data.results);
    });
  }, []);

  return (
    <>
      <Header>
        <h3>Title</h3>
      </Header>
      <HomePage>
        <QuestionContentWrap>
          {apiLog.map(({ question, correct_answer, difficulty, category }) => {
            return (
              <QuestionCard
                key={question}
                question={question}
                answer={correct_answer}
                difficulty={difficulty}
                category={category}
              ></QuestionCard>
            );
          })}
        </QuestionContentWrap>
      </HomePage>
      <BookmarkPage />
      <CreatePage>
        <CreateForm />
      </CreatePage>
      <ProfilePage />

      <footer>
        <Nav></Nav>
      </footer>
    </>
  );
}

export default App;
