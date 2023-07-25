import React from 'react';
import Button from '../../components/Button/Button';
import "./Header.css";


function Header ()  {
  
    return (
      <div className="HeaderS">
       <h1>Выдача направлений в ЛПУ</h1>
        <span className='spa'>
        <Button caption='Главная'/><Button caption='Сотрудники'/><Button caption='ЛПУ'/></span>
      </div>
    );
  }


export default Header;