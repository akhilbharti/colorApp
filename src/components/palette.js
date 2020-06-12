import React from 'react'
import ColorBox from './colorBox'
import './styles/palette.css'

function Palette({...props}){

const colorBoxes = props.colors.map(color=> (
  <ColorBox background={color.color} name={color.name}/>
))
  return <div className="Palette">
    {/* navbar will be added here */}
    <div className="palette-clr">
      {colorBoxes}
{/* different color boxes will go here */}
    </div>
    {/* eventually footer will be added here */}
    </div>
}


export default Palette