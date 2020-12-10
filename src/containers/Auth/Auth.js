import React, { useState } from 'react';
import classes from './Auth.module.css';
import Button from '../../UI/Button/Button';
import { Input } from "../../UI/Input/Input";

const  validateEmail = (inputEmail) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inputEmail).toLowerCase());
}

export const Auth = () => {

  const initValues = {
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      error: 'Введите корректный email',
      valid: false,
      touched: false,
      validations: {
        required: true,
        email: true,
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Password',
      error: 'Введите корректный пароль',
      valid: false,
      touched: false,
      validations: {
        required: true,
        minLength: 6,
      }
    }
  }

  const [formControls, setFormControls] = useState(initValues);

  const handlerLogin = () => {

  }

  const handlerRegister = () => {

  }

  const handlerSubmit = () => {

  }

  //определяем валидный inputs
  const validateControl = (value, validations) => {
    //валидировать control не нужно
    if(!validations) {
      return true
    }

    let isValid = true;

    if(validations.required) {
      isValid = (value.trim() !== '') && isValid;
    }

    if(validations.email) {
      isValid = validateEmail(value) && isValid;
    }

    if(validations.minLength) {
      isValid = (value.length >= validations.minLength) && isValid;
    }

    return isValid;
  }

  //обработчик событий inputs
  const onChangeHandler = (evt, controlName) => {
    const formControlsTemp = {...formControls};
    const control = formControlsTemp[controlName];

    control.value = evt.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validations);

    setFormControls(formControlsTemp);
  }

  //создаем inputs
  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      return <Input
        key={controlName + index}
        type={control.type}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        label={control.label}
        shouldValidate={!!control.validations}
        error={control.error}
        onChange={e => onChangeHandler(e, controlName)}
      />
    })
  }

  return(
    <div className={classes.auth}>
      <div>
        <h1 className={classes.auth__title}>Авторизация</h1>
        <form
          className={classes.auth__form}
          onSubmit={handlerSubmit}
        >
          {renderInputs()}
          <Button
            type="success"
            onClick={handlerLogin}
          >
            Войти
          </Button>
          <Button
            type='success'
            onClick={handlerRegister}
          >
            Авторизоваться
          </Button>
        </form>
      </div>
    </div>
  )
}
