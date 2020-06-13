import React, {useState} from 'react'
import ColorBox from './colorBox'
import './styles/palette.css'
import Navbar from './navbar'


function Palette({...props}){
  const {colors} = props.palette
  const [level, setLevel] = useState(500)

  const changeLevel = (event, newlevel) => {
    setLevel(newlevel)
  }

const colorBoxes = colors[level].map(color=> (
  <ColorBox background={color.hex} name={color.name}/>
))

  return <div className="Palette">
    <Navbar level={level} changeLevel={changeLevel}/>
    {/* navbar will be added here */}
    <div className="palette-clr">
      {colorBoxes}
{/* different color boxes will go here */}
    </div>
    {/* eventually footer will be added here */}
    </div>
}


export default Palette