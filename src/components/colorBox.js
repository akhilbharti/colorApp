import React from 'react'
import './styles/colorBox.css'

function ColorBox({...props}){

  return (
    <div className="color-box" style={{background:props.background}}>
     <span>{props.name}</span>
      <span>More</span>
    </div>
  )

}

export default ColorBox