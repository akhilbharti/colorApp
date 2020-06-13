import React from 'react';
import { makeStyles, Slider, withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'green',
    outline:'none',
    border: '2px solid green',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'none',
    },
  },
  active: {},
  
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



export default function DiscreteSlider({...props}) {
  const {level, changeLevel} = props
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <PrettoSlider
        value={level}   
        onChange={changeLevel}
        aria-labelledby="discrete-slider"
        step={100}
        min={100}
        max={900}
      />
    </div>
  );
}