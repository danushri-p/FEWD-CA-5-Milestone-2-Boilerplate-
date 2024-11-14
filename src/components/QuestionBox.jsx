import React, { useState } from 'react';
import QuestionChoice from './QuestionChoice';

const QuestionBox = ({ questions, query, selectchoice }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const highlightHandler = () => {
    setIsHighlighted(!isHighlighted); 
  };

  return (
    <>
      <div>
        <h1>Kalvium Quiz</h1>
      </div>
      <div className="questionbox">
        <h1>
          Question: {query + 1} out of {questions.length}
        </h1>
        <h2 style={{ color: isHighlighted ? 'red' : 'blue' }}>
          {questions[query].text}
        </h2>

        <QuestionChoice
          options={questions[query].options}
          selectchoice={selectchoice}
        />

        <button className="btn" onClick={highlightHandler}>
          {isHighlighted ? 'Remove Highlight' : 'Highlight'}
        </button>
      </div>
    </>
  );
};

export default QuestionBox;