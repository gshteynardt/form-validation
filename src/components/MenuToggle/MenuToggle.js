import React from "react";
import './MenuToggle.css';
import Button from "../../UI/Button/Button";

export const MenuToggle = ({ onToggle, isOpen }) => {
  const menuBtnClassName = [
    'menu-toggle',
    'fa',
  ]
    isOpen ? menuBtnClassName.push('fa-times menu-toggle_opened'): menuBtnClassName.push('fa-bars');

  return(
    <Button
      className={menuBtnClassName.join(' ')}
      onClick={onToggle}
    >

    </Button>
  );
}
