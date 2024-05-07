import React from 'react';
import './Popup.css';
import close_img from '../assets/close1.png';
import not_robot from '../assets/not_robot.png'


const Popup = (props) => {

  const onClosePopupClicked = () => {
    props.close_popup_func();
  }

  return (
    <div className='popup_container'>
        <div className="top_div"></div>

        <img src={close_img} alt="close" className='close_img' onClick={onClosePopupClicked}/>

        <div className="popup_title">אישור להורדת  תמונה</div>

        <div className="popup_subtitle">האם להוריד את התמונה?</div>

        <div className="checkbox_container">

          <input type="checkbox" />

          <div>אני לא רובוט</div>

          <img src={not_robot} alt="approve" className='not_robot_img'/>
        </div>

        <div className='btn_container'>

            <button onClick={onClosePopupClicked} className='cancel_btn'>ביטול</button>
            <button className='approve_btn'>אישור</button>

        </div>
    </div>
  )
}

export default Popup;