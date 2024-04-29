import React from 'react';
import './Download_img.css';

const DownloadImg = (props) => {
  return (
    <div className='download_img_container'>
        <div className='download_img_title'>{props.title}</div>
    </div>
  )
}

export default DownloadImg;