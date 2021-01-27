import React, { useState } from 'react'
import './QuizCreator.css';
import Button from "../../UI/Button/Button";
import { createControl, validate, validateForm } from "../../form/formFramework";
import { Input } from "../../UI/Input/Input";
import { Auxiliary } from '../../hocs/Auxiliary/Auxiliary';
import { Select } from "../../UI/Select/Select";


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
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  });

  const onChangeHandler = (value, controlName) => {
    const formControls = {...state.formControls};
    const control = {...formControls[controlName]};
    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);
    formControls[controlName] = control;

    setState(prevValue => ({
        ...prevValue,
        formControls,
        isFormValid: validateForm(formControls),
      })
    );
  }

  const selectChangeHandler = (evt) => {
    setState(prevValue => ({...prevValue, rightAnswerId: +evt.target.value}));
  }

  const renderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];

      return<Auxiliary key={controlName + index}>
        <Input
          label={control.label}
          value={control.value}
          valid={control.valid}
          shouldValidate={!!control.validation}
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

  const addQuestionHandler = (evt) => {
    evt.preventDefault();

    const quiz = state.quiz.concat();
    const index = quiz.length + 1;

    const { question, option1, option2, option3, option4 } = state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id},
      ]
    }

    quiz.push(questionItem);
    setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    })
  }

  const createQuizHandler = (evt) => {
    evt.preventDefault();

    console.log(state.quiz)
  }

  return (
    <div className={'quiz-creator'}>
      <div className={'quiz-creator__wrapper'}>
        <h1
          className={'quiz-creator__title'}
        >Quiz Creator</h1>

        <form
          className={'quiz-creator__form'}
          onSubmit={submitHandler}
        >

          {renderInputs()}

          {select}
          <Button
            type='primary'
            onClick={addQuestionHandler}
            disabled={!state.isFormValid}
          >
            Добавить вопрос
          </Button>
          <Button
            type='success'
            onClick={createQuizHandler}
            disabled={state.quiz === 0}
          >
            Создать тест
          </Button>
        </form>
      </div>
    </div>
  )
}
