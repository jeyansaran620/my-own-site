import React from 'react';
import './Display.css';
const Display =({src,alter}) => {
  return (
    <div> 
    <div className="display-pic">
    <img src={src} alt={alter} />
    </div> 
    </div>
  )
}

export default Display;
