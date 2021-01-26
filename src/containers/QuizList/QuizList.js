import React from 'react';
import './QuizList.css';
import { NavLink } from "react-router-dom";

export const QuizList = () => {

  const renderQuizes = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (<li
        className={'quiz-list__item'}
        key={index}
      >
        <NavLink
          className={'quiz-list__link'}
          to={'./quiz/' + quiz}
        >
          Тест {quiz}
        </NavLink>
      </li>)
    })
  }

  return (
    <div className={'quiz-list'}>
      <div>
        <h1 className={'quiz-list__title'}>Список тестов</h1>
        <ul className={'quiz-list__items'}>
          {renderQuizes()}
        </ul>
      </div>
    </div>
  );
};
