import React from 'react';
import './Download_img.css';
import newImage from '../assets/new.png';
import check from '../assets/check.png';

const DownloadImg = (props) => {
  return (
    <div className={'download_img_container ' + (props.top ==="false" ? 'download_img_container_border' : '')}>
        <div className={"download_img_title "+ (props.top ==="false" ? " padding_title ": '')}>{props.title} </div>

        {props.top === "true" ? <img src={newImage} alt="newImage" className='download_img'/>:<></>}

        <div className='download_img_subtitle'>{props.subtitle}</div>

        <button className='download_btn'>{props.btn_txt}</button>

        <img src={check} alt="check" className='check_img' />

        <div className='last_title'>{props.last_title}</div>
    </div>
  )
}

export default DownloadImg;