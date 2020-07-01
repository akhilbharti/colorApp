import React from 'react'
import {makeStyles} from '@material-ui/styles'

const styles = makeStyles({
  root: {
    background:"white",
    border:"3px solid black",
    borderRadius:"5px",
    padding:"0.5rem",
    position:"relative",
    overflow:"hidden",
    "&:hover":{
      cursor:"pointer"
    }
  },
  colors:{
    backgroundColor:"#dae1e4",
     borderRadius:"5px",
    height:"150px",
    width:"100%",
    overflow:"hidden"
  },
  title:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    margin:"0",
    color:"black",
    paddingTop:"0.5rem",
    fontSize:"1rem",
    position:"relative"
  },
  emoji:{
    marginLeft:"0.5rem",
    fontSize:"1.5rem",
  },
  minicolor:{
    height:"25%",
    width:"25%",
    display:"inline-block",
    margin:"0 auto",
    position:"relative",
    marginBottom:"-3.5px"
  }
})

function MiniPalette(props){
  const {colors, paletteName, emoji} = props
  const classes = styles()
  const minimap = colors.map(color=>(
    <div  key={color.name} className={classes.minicolor} style={{backgroundColor:color.color}}></div>
  ))
  return (<div className={classes.root}>
    <div className={classes.colors}>{minimap}</div>
    <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
  </div>)
}

export default MiniPalette