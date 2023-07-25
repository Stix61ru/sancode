import React from 'react';
import Debounce from '../../components/Debounce/Debounce';

import './Main.css';

function Main ()  {
  
    return (
      <div className="MainS">
        <p>Начните вводить фамилию сотрудника</p>
        <Debounce/>
      </div>
    );
  }


export default Main;