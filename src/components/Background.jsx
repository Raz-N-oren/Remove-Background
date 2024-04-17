import React from 'react';
import './Background.css';
import close_x from '../assets/close.png';

const Background = () => {
  return (
    <div className='background_main'>
        <img className='close_x' src={close_x} />
        <div className='title'>העלאת תמונה כדי להסיר את הרקע</div>
    
    </div>
  )
}

export default Background