import { PagesWrap } from './PagesWrap';
import { QuestionContentWrap } from './QuestionCard/QuestionContentWrap';
import QuestionCard from './QuestionCard/QuestionCard';
import { useState, useEffect } from 'react';
import FetchApiData from './QuestionCard/FetchApiData';
import Header from './Header/Header';
import { nanoid } from 'nanoid';

export default function HomePage() {
  const [apiLog, setApiLog] = useState([]);
  //const [listOFCards, setListOfCards] = useState([]);

  const url = 'https://opentdb.com/api.php?amount=10&category=18';

  useEffect(() => {
    FetchApiData(url, data => {
      setApiLog(data.results);

      console.log(data.results);
    });
  }, []);

  // function AddCard(NameNewInput) {
  //   setListOfCards([
  //     ...listOFCards,
  //     { name: NameNewInput, id: nanoid(), isBookmarked: false }
  //   ]);
  // }

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
                key={nanoid()}
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
