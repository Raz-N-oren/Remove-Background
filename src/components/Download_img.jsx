import React from 'react';
import './Download_img.css';
import newImage from '../assets/new.png'

const DownloadImg = (props) => {
  return (
    <div className='download_img_container'>
        <div className={"download_img_title "+ (props.top ==="false" ? " padding_title ": '')}>{props.title} </div>
        {props.top === "true" ? <img src={newImage} alt="newImage" className='download_img'/>:<></>}
        <div className='download_img_subtitle'>{props.subtitle}</div>
    </div>
  )
}

export default DownloadImg;