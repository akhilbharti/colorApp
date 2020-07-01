import React from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'

function PaletteList(props){
  const { palettes} = props
  const platteRoute = palettes.map(palette=>{
    return <MiniPalette {...palette}/>
  })
return <div>{platteRoute}</div>
}

export default PaletteList