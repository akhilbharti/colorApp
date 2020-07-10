import React,{useState, useEffect} from 'react'
import ColorBox from './colorBox'
import './styles/palette.css'
import Navbar from './navbar'
import Footer from './footer'



function SingleColor({ ...props }){
  const {colorId, palette} = props
  const [shades, setShades] = useState([])
  const [format, setFormat] = useState("hex")


  function gatherShades(palette,colorId){
    let tempShades=[]
    const allColors = palette.colors

    for(let key in allColors){
     tempShades.push(
        ...allColors[key].filter(color=> color.id === colorId)
      )
    }
    tempShades=tempShades.slice(1)
    setShades(tempShades)
  }

  useEffect(() => {
    gatherShades(palette, colorId)
  }, [colorId, palette])

  const changeFormat = (val) => {
    setFormat(val)
  }
  const colorBoxes = shades.map(color=>{
    return <ColorBox key={color.id} name={color.name} background={color[format]} showLink={false} showAllColor={false}/>
  })
  return (
    <div className="Palette">
      <Navbar  changeFormat={changeFormat} />
      <div className="palette-clr">{colorBoxes}</div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
  </div>
  )
}


export default SingleColor