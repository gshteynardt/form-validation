import React from 'react';
import './AnswerItem.css';

export const AnswerItem = ({answer, onAnswerClick, state}) => {
  const answerItemClassName = ['answer-item'];

  if(state) {
   answerItemClassName.push(`answer-item_${state}`);
  }

  return (
    <li
      className={answerItemClassName.join(' ')}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  )
}
