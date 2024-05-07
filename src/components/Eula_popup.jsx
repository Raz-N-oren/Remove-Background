import React from 'react';
import './Eula_popup.css';
import close_img from '../assets/close1.png';


const EulaPopup = (props) => {

    const onCloseEulaPopupClicked = () =>{
        props.close_eula();
    }

  return (
    <div className='eula_popup_container'>
        <img className='close_img' src={close_img} alt='close' onClick={onCloseEulaPopupClicked}/>
        <div className='eula_text'>תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה תקנון החברה </div>
    </div>
  )
}

export default EulaPopup;