import React, { useState } from 'react'
import classes from './QuizCreator.module.css';
import Button from "../../UI/Button/Button";
import {createControl, validate, validateForm} from "../../form/formFramework";
import {Input} from "../../UI/Input/Input";
import { Auxiliary } from '../../hocs/Auxiliary/Auxiliary';
import {Select} from "../../UI/Select/Select";


//создаем опции для input
const createOptionControl = (number) => {
  return createControl({
    label: `Вариант ${number}`,
    error: 'Значение не может быть пустым',
    id: number,
  }, { required: true })
}

//создаем контролы формы, для определения валидности
const createFormControls = () => ({
    question: createControl({
      label: 'Введите вопрос',
      error: 'Вопрос не может быть пустым',
    }, { required: true }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  });

export const QuizCreator = () => {

  const [state, setState] = useState({
    quiz: [],
    rightAnswerId: 1,
    formControls: createFormControls(),
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const onChangeHandler = (value, controlName) => {
    const formControlsTemp = {...state.formControls};
    const control = formControlsTemp[controlName];

    control.touched = true;
    control.value = value;
    control.validate = validate(control.value, control.validation);
    setState(prevValue => ({...prevValue, formControlsTemp}));
  }

  const selectChangeHandler = (evt) => {
    setState(prevValue => ({...prevValue, rightAnswerId: +evt.target.value}))
  }

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

  const select = <Select
    label='Выберите правильный ответ'
    value={state.rightAnswerId}
    onChange={selectChangeHandler}
    options={[
      {text: 1, value: 1},
      {text: 2, value: 2},
      {text: 3, value: 3},
      {text: 4, value: 4},
    ]}
  />;

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

          {select}
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
