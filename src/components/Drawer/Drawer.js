import React from "react";
import './Drawer.css';
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизация', exact: true},
  {to: '/quiz-creator', label: 'Создать тест', exact: true},
];

export const Drawer = ({isOpen, onClose}) => {

  const renderLinks = links.map((link, index) => {
    return (
      <li
        key={index}
        className={'drawer__item'}
      >
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={'active'}
          className={'drawer__link'}
          onClick={onClose}
        >{link.label}</NavLink>
      </li>
    )
  })

  return (
    <>
      <nav className={`drawer ${isOpen || 'drawer__close'}`}>
        <ul className="drawer__items">
          {renderLinks}
        </ul>
      </nav>
      {isOpen && <Backdrop onClick={onClose} />}
    </>
  );
}
