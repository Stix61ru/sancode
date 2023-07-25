import React from 'react';
import './Button.css';

function Button (props)  {
  
    return (
        <button className="c-button">{props.caption}</button>
      
    );
  }


export default Button;