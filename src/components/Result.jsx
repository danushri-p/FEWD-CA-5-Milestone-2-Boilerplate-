import React from 'react';

const Result = ({ score, len, restartQuiz }) => {
  const percentage = (score / len) * 100;

  return (
    <div className="result-box">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {len}</p>
      <p>{percentage > 50 ? "Great job!" : "Better luck next time!"}</p>
      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;