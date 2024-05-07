import React, { useRef, useState } from 'react';
import './Background.css';
import close_x from '../assets/close.png';
import logo from '../assets/logo.png';
import banner from '../assets/banner.png';
import DownloadImg from './Download_img';
import NoBg from './No_bg';
import Popup from './Popup';
import EulaPopup from './Eula_popup';
import axios from 'axios';

const Background = () => {

  const [selected_tab, setSelected_tab] = useState(true);
  const [show_popup, setShow_popup] = useState(false);
  const [show_eula_popup, setShow_eula_popup] = useState(false);

  const inputElement = useRef();

  const onChooseTabClicked = () => {
    setSelected_tab(!selected_tab);
  }

  const show_popup_func = () => { 
    setShow_popup(true);
  }

  const close_popup_func = () => { 
    setShow_popup(false);
  }

  const show_eula = () => {
    setShow_eula_popup(true);
  }

  const close_eula = () => {
    setShow_eula_popup(false);
  }

  const focusInput = () => {
    inputElement.current.click();
  }

  const uploaded_file = (e) => {
    let fileInfo = e.target.files[0];
    
    axios.get('http://localhost:5100/upload_file').then(res=>{

    })
  }

  return (
    <div className='background_main'>
        <img className='close_x' src={close_x} alt='close'/>
        <div className='title'>העלאת תמונה כדי להסיר את הרקע</div>

        <button className='upload_btn' onClick={focusInput}>העלאת תמונה</button>
        <input type="file" ref={inputElement} className='input_file' onChange={uploaded_file}/>
        <div className='upload_txt'>פורמטים נתמכים png, jpeg.</div>

        <div className="middle_div">

          <div className='right_div'>
              <div className="right_div_inner">
                <DownloadImg show_popup_func={show_popup_func}  title='תמונה חינם' subtitle='תצוגה מקדימה של תמונה 612*408' top='false' btn_txt="הורד" last_title="איכות טובה עד 0.25 מגה פיקסל"></DownloadImg>
                <DownloadImg title='Pro' subtitle='תמונה מלאה 1280*1920' top='true' btn_txt=" HD הורד " last_title="האיכות הטובה ביותר עד 25 מגה פיקסל"></DownloadImg>
              </div>
          </div>
          <div className='left_div'>
            <div className="tabs_container">
              <div className={"tab" + (selected_tab ? ' selected_tab' : '')} onClick={onChooseTabClicked}>בלי רקע</div>
              <div className={"tab" + (!selected_tab ? ' selected_tab' : '')} onClick={onChooseTabClicked}>מקורי</div>
            </div>
            <div className="left_div_inner">
              { selected_tab ?<NoBg title="No background"></NoBg>:
              <NoBg title="Original"></NoBg>}

            </div>
            <div className="left_div_footer">
            <button onClick={show_eula} className='taknon_btn'> תקנון החברה</button>
            <div className='taknon_txt'>על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן וחלים עליו מדיניות הפרטיות ותנאי השירות שלנו</div>
            </div>

          </div>
        </div>

        <div className="footer_container">

          <img className='footer_logo' src={logo} alt='logo'/>
          <img className='footer_banner' src={banner} alt='banner'/>
        </div>

        {show_popup ?
          <><div className="layout"></div>
          <Popup close_popup_func={close_popup_func}></Popup></> :<></>
        }

        {show_eula_popup ?
          <><div className="layout"></div>
          <EulaPopup close_eula={close_eula}></EulaPopup></> :<></>
        }

    </div>
  )
}

export default Background;