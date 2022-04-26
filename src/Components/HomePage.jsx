import { PagesWrap } from './PagesWrap';
import { QuestionContentWrap } from './QuestionCard/QuestionContentWrap';
import QuestionCard from './QuestionCard/QuestionCard';
import { useState, useEffect } from 'react';
import FetchApiData from './QuestionCard/FetchApiData';
import Header from './Header/Header';

export default function HomePage() {
  const [apiLog, setApiLog] = useState([]);
  const url = 'https://opentdb.com/api.php?amount=10&category=18';

  useEffect(() => {
    FetchApiData(url, data => {
      setApiLog(data.results);

      console.log(data.results);
    });
  }, []);

  return (
    <PagesWrap>
      <QuestionContentWrap>
        {apiLog.map(({ question, correct_answer, difficulty, category }) => {
          return (
            <>
              <Header>
                <h3>Home</h3>
              </Header>
              <QuestionCard
                key={question}
                question={question}
                answer={correct_answer}
                difficulty={difficulty}
                category={category}
              ></QuestionCard>
            </>
          );
        })}
      </QuestionContentWrap>
    </PagesWrap>
  );
}
