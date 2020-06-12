import React from 'react'
import './styles/colorBox.css'

function ColorBox({...props}){
const {name, background} = props
  return (
    <div className="color-box" style={{background}}>
      <div className="copy-continer">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className='copy-btn'>Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  )

}

export default ColorBox