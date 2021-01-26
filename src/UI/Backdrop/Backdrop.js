import React from 'react';
import './Backdrop.css';

export const Backdrop = ({onClick,}) => {

  return(
    <div
      className={'backdrop'}
      onClick={onClick}
    ></div>
  );
}
