import React,{useState, useEffect} from 'react'
import ColorBox from './colorBox'
import './styles/palette.css'

function SingleColor({ ...props }){
  const {colorId, palette} = props
  const [shades, setShades] = useState([])

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

  const colorBoxes = shades.map(color=>{
   return <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false}/>
  })
  return (
    <div className="Palette">
      <div className="palette-clr">{colorBoxes}</div>
  </div>
  )
}


export default SingleColor