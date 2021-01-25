import React from 'react';
import './ActiveQuiz.css';
import { AnswersList } from "./AnswersList/AnswersList";

export const ActiveQuiz = (props) => {

  const {
    answers,
    question,
    onAnswerClick,
    quizLength,
    answerNumber,
    stateAnswer,
  } = props;

  return (
    <div className={'active-quiz'}>

      <p className={'question'}>
        <span>
          <strong>{answerNumber + 1}.</strong> &nbsp;
          { question }
        </span>
        <small>{answerNumber + 1} из {quizLength}</small>
      </p>

      <AnswersList
        state={ stateAnswer }
        answers={ answers }
        onAnswerClick={ onAnswerClick }
      />
    </div>
  );
}
