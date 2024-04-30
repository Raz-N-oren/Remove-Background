import React, { useState } from 'react';
import './Background.css';
import close_x from '../assets/close.png';
import logo from '../assets/logo.png';
import banner from '../assets/banner.png';
import DownloadImg from './Download_img';
import NoBg from './No_bg';

const Background = () => {

  const [selected_tab, setSelected_tab] = useState(true);

  const onChooseTabClicked = () => {
    setSelected_tab(!selected_tab);
  }

  return (
    <div className='background_main'>
        <img className='close_x' src={close_x} alt='close'/>
        <div className='title'>העלאת תמונה כדי להסיר את הרקע</div>

        <button className='upload_btn'>העלאת תמונה</button>
        <div className='upload_txt'>פורמטים נתמכים png, jpeg.</div>

        <div className="middle_div">

          <div className='right_div'>
              <div className="right_div_inner">
                <DownloadImg title='תמונה חינם' subtitle='תצוגה מקדימה של תמונה 612*408' top='false' btn_txt="הורד" last_title="איכות טובה עד 0.25 מגה פיקסל"></DownloadImg>
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
            <button className='taknon_btn'> תקנון החברה</button>
            <div className='taknon_txt'>על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן וחלים עליו מדיניות הפרטיות ותנאי השירות שלנו</div>
            </div>

          </div>
        </div>

        <div className="footer_container">

          <img className='footer_logo' src={logo} alt='logo'/>
          <img className='footer_banner' src={banner} alt='banner'/>
        </div>
    
    </div>
  )
}

export default Background;