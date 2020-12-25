import React from 'react';
import './Select.css';

export const Select = ({ label, value, onChange, options }) => {
  const htmlFor = `${label}-${Math.random()}`

  return(
    <div className={'select'}>
      <label
        htmlFor={ htmlFor }
        className={'select__label'}
      > { label } </label>
      <select
        id={ htmlFor }
        value={ value }
        onChange={ onChange }
        className={'select__item'}
      >
        { options.map((option, index) => (
            <option
              value={ option.value }
              key={ option.value + index }
            >
              { option.text }
            </option>
          )) }
      </select>
    </div>
  )
}
