import React, { useState } from 'react'
import classes from './QuizCreator.module.css';
import Button from "../../UI/Button/Button";
import {createControl} from "../../form/formFramework";
import {Input} from "../../UI/Input/Input";
import { Auxiliary } from '../../hock/Auxiliary/Auxiliary';

const createOptionControl = (number) => {
  return createControl({
    label: `Вариант ${number}`,
    error: 'Значение не может быть пустым',
    id: number,
  }, {required: true})
}

const createFormControls = () => {
  return {
    question: createControl({
      label: 'Введите вопрос',
      error: 'Вопрос не может быть пустым',
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

const onChangeHandler = (value, controlName) => {

}

export const QuizCreator = () => {

  const [state, setState] = useState({
    quiz: [],
    formControls: createFormControls(),
  });

  const renderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];

      return<Auxiliary key={controlName + index}>
        <Input
          label={control.label}
          value={control.value}
          valid={control.valid}
          shouldValidate={!!control.validations}
          touched={control.touched}
          error={control.error}
          onChange={e => onChangeHandler(e.target.value, controlName)}
        />
        { index === 0 ? <hr /> : null }
      </Auxiliary>
    });
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
  }

  const addQuestionHandler = () => {

  }

  const createQuizHandler = () => {

  }

  return (
    <div className={classes.QuizCreator}>
      <div>
        <h1>Quiz Creator</h1>

        <form onSubmit={submitHandler}>

          {renderInputs()}

          <select></select>
          <Button
            type='primary'
            onClick={addQuestionHandler}
          >
            Добавить вопрос
          </Button>
          <Button
            type='success'
            onClick={createQuizHandler}
          >
            Создать тест
          </Button>
        </form>
      </div>
    </div>
  )
}
