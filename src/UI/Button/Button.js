import React from 'react'
import classes from './Button.module.css'

const Button = ({type, disabled, onClick, children}) => {
  const cls = [
    classes.button,
    classes[type]
  ]
 console.log(cls)
  return (
    <button
      onClick={onClick}
      className={cls.join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
