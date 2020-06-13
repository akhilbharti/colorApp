import React, {useState} from 'react'
import ColorBox from './colorBox'
import './styles/palette.css'
import Navbar from './navbar'


function Palette({...props}){
  const {colors} = props.palette
  const [level, setLevel] = useState(500)
  const [format,setFormat] = useState("hex")

  const changeLevel = (event, newlevel) => {
    setLevel(newlevel)
  }

  const changeFormat=(val)=>{
setFormat(val)
  }
const colorBoxes = colors[level].map(color=> (
  <ColorBox background={color[format]} name={color.name}/>
))
  return <div className="Palette">
    <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat}/>
    {/* navbar will be added here */}
    <div className="palette-clr">
      {colorBoxes}
{/* different color boxes will go here */}
    </div>
    {/* eventually footer will be added here */}
    </div>
}


export default Palette