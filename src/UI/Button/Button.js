import React from 'react';
import classes from './Button.module.css';

const Button = ({type, disabled, onClick, children, className}) => {
  const cls = [
    classes.button,
    classes[type],
    className,
  ];

  return (
    <button
      onClick={onClick}
      className={cls.join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
