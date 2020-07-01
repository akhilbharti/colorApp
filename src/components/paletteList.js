import React from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'
import { makeStyles } from '@material-ui/styles'

const styles= makeStyles({
  root:{
    backgroundColor:"blue",
    height:"100%",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center"
    },
  container:{
    width:"50%",
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"column",
    flexWrap:"wrap",
  },
  nav:{
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    color:"white"
  },
  palettes:{
    boxSizing:"border-box",
    width:"100%",
    display:"grid",
    gridTemplateColumns:"repeat(3, 30%)",
    gridGap:"5%"
  }
})

function PaletteList(props){
  const { palettes} = props
  const classes = styles()
  const platteRoute = palettes.map(palette=>{
    return <MiniPalette {...palette}/>
  })
return( 
  <div className={classes.root}>
    <div className={classes.container}>
      <nav className={classes.nav}>
        <h1>React Colors</h1>
      </nav>
      <div className={classes.palettes}>
      {platteRoute}
      </div>
    </div>
  </div>)
}

export default PaletteList