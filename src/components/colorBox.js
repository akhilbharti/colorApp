import React from 'react'
import './styles/colorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'


function ColorBox({...props}){
const {name, background} = props
  return (
    <div className="color-box" style={{background}}>
      <div className="copy-continer">
        <div className="box-content">
          <span>{name}</span>
        </div>
      <CopyToClipboard text={background}>
        <button className='copy-btn'>Copy</button>
    </CopyToClipboard>
      </div>
      <span className="see-more">More</span>
    </div>
  )

}
export default ColorBox