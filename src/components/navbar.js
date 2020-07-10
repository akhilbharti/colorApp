import React,{useState} from 'react'
import { Typography, makeStyles, AppBar,Toolbar,MenuItem,IconButton,Select,FormControl,Snackbar,Paper} from '@material-ui/core';
import DiscreteSlider from './slider'
import {Link} from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Navbar({...props}) {
  const { changeFormat, level, changeLevel, showAllColor }=props
  const classes = useStyles();
const [format, setFormat] = useState("hex")
  const [open, setOpen] = React.useState(false);

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

const handleChangeSlider=(e)=>{
  setFormat(e.target.value)
  changeFormat(e.target.value)
  setOpen(true)
}

  return (
    <div className={classes.grow}>
      <Paper>
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
          <Link to='/'>
          <Typography className={classes.title} variant="h6" noWrap>
            React Color
          </Typography>
          </Link>
            {showAllColor &&
          <div className={classes.search}>
            <DiscreteSlider level={level} changeLevel={changeLevel} />
              </div>}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl variant="filled" className={classes.formControl}>
            <Select
              labelId="color-selector"
              id="color-selector"
              value={format}
              onChange={handleChangeSlider}
            >
              <MenuItem value="hex">HEX</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
              <MenuItem value="rgba">RGBA</MenuItem>
            </Select>
            </FormControl>
          </div>
          <div className={classes.sectionMobile}>
          </div>
        </Toolbar>
      </AppBar>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      message={<span id="message-id">Format Changed to {format.toUpperCase()}!!</span>}
        ContentProps={{ "aria-describedbody":"message-id"}}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}

export default Navbar