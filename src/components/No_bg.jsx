import React, { useRef } from 'react';
import './No_bg.css';
import wed from '../assets/wed.jpg';
import warning from '../assets/warning.png'

const NoBg = (props) => {

    const inputElement = useRef();

    const onChooseColorClicked = () => {
        inputElement.current.click();
    }

  return (
    <div className='no_bg_container'>
        {props.title === "No background" ? <><div className='no_bg_title'>אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף</div>
        <img className='warning_img' src={warning} alt="warning"/>
        <button className='background_color_button' onClick={onChooseColorClicked}>צבע רקע</button>
        <input type='color' ref={inputElement} className='input_color'/>
        </>
        : ''}

        <img className='uploaded_img' src={wed} alt="uploadImg" />
    </div>
  )
}

export default NoBg;