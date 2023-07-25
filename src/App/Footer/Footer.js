import React from 'react';
import './Footer.css';


function Footer ()  {
  
    return (
      <div className="FooterS">
         <div>
        <input
          style={{
            width: '95%',
            fontSize: '1rem',
            padding: '0.4rem',
            marginBottom: '10px'
          }}
          placeholder="Вывод в консоль"
          onChange={e => console.log(e.target.value)}
        />
      </div>
      
      </div>
    );
  }


export default Footer;