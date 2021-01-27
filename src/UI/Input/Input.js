import React from 'react';
import classes from './Input.module.css';


const isInvalid = (valid, touched, shouldValidate) => {
  return !valid && shouldValidate && touched
}

export const Input = ({ type, label, value, onChange, error, valid, touched, shouldValidate}) => {
  const inputType = type || 'text';
  const cls = [classes.input__wrapper];
  const htmlFor = `${inputType}-${Math.random()}`;

  if(isInvalid( valid, touched, shouldValidate)) {
    cls.push(classes.input__wrapper_invalid);
  }

  return(
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={inputType}
        value={value}
        onChange={onChange}
        className={classes.input__input}
      />

      {
        isInvalid( valid, touched, shouldValidate)
          ? <span className={classes.input__span}>
            { error  || 'Введите верное значение'}
        </span>
          : null
      }
    </div>
  )
}
