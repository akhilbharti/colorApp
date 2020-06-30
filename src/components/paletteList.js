import React from 'react'
import {Link} from 'react-router-dom'

function PaletteList(props){
  const { palettes} = props
  const platteRoute = palettes.map(palette=>{
    return <Link key={palette.id} to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
  })
return <div>{platteRoute}</div>
}

export default PaletteList