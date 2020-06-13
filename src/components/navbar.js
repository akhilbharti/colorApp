import React,{useState} from 'react'
import { Typography, makeStyles, AppBar,Toolbar,MenuItem,IconButton,Select } from '@material-ui/core';
import DiscreteSlider from './slider'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Navbar({...props}) {
  const { changeFormat, level, changeLevel }=props
  const classes = useStyles();
const [format, setFormat] = useState("hex")

const handleChangeSlider=(e)=>{
  setFormat(e.target.value)
  changeFormat(e.target.value)
}

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <DiscreteSlider level={level} changeLevel={changeLevel} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Select
              labelId="color-selector"
              id="color-selector"
              value={format}
              onChange={handleChangeSlider}
            >
              <MenuItem value="hex">#FFF</MenuItem>
              <MenuItem value="rgb">rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">rgba(255,255,255)</MenuItem>
            </Select>
          </div>
          <div className={classes.sectionMobile}>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar