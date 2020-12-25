import React, { useState } from "react";
import './Quiz.css';

export const Quiz = () => {
  const [quiz, setQuiz] = useState([]);

  return (
    <div className={'quiz'}>
      <h1 className={'quiz__title'}>Quiz</h1>
    </div>
  );
}
