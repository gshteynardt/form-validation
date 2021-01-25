import React from 'react';
import './AnswersList.css';
import { AnswerItem } from "./AnswerItem/AnswerItem";

export const AnswersList = ({ answers, onAnswerClick, state }) => {

  const answersList = answers.map((answer, id) => <AnswerItem
    key={id}
    answer={answer}
    onAnswerClick={onAnswerClick}
    state={state ? state[answer.id] : null}
    />
  )

  return(
    <ul className={'answer-list'}>
      { answersList }
    </ul>
    )
}
