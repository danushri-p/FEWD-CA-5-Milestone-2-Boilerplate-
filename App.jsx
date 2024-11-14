import React, { useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import Darkbutton from './components/Darkbutton';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Function to handle when an option is clicked
  const optionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question or complete the quiz if last question is reached
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className="app-container">
      <h3>Score: {score}</h3>
      {!isQuizCompleted ? (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
        </>
      ) : (
        <Result
          score={score}
          len={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
