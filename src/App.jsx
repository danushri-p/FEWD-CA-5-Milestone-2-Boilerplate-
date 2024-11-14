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
  const [feedback, setFeedback] = useState(null);

  // Function to handle when an option is clicked
  const optionClick = (isCorrect) => {
    setFeedback(isCorrect ? "Correct!" : "Incorrect");

    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question or complete the quiz if last question is reached
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback(null); // Clear feedback for the next question
      }, 1000); // Delay to show feedback
    } else {
      setTimeout(() => {
        setIsQuizCompleted(true);
      }, 1000); // Delay to show final feedback before ending quiz
    }
  };

  // Function to go back to the previous question
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setFeedback(null); // Clear feedback when going back
    }
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizCompleted(false);
    setFeedback(null);
  };

  return (
    <div>
      <h3>Score: {score}</h3>
      {!isQuizCompleted ? (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
          {feedback && <p>{feedback}</p>}
          <button onClick={previousQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>
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
