import React, { useState, useEffect } from "react";
import ColorBox from "./colorBox";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paletteClr: {
    height: "90%",
  },
  goback: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      width: "100px",
      cursor: "pointer",
      height: "30px",
      position: "absolute",
      display: "inline - block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      border: "none",
      fontSize: "1rem",
      lineHeight: "30px",
      color: "white",
      textTransform: "uppercase",
      textDecoration: "none",
      opacity: "1",
    },
  },
});

function SingleColor({ ...props }) {
  const { colorId, palette } = props;
  const [shades, setShades] = useState([]);
  const [format, setFormat] = useState("hex");

  function gatherShades(palette, colorId) {
    let tempShades = [];
    const allColors = palette.colors;

    for (let key in allColors) {
      tempShades.push(
        ...allColors[key].filter((color) => color.id === colorId)
      );
    }
    tempShades = tempShades.slice(1);
    setShades(tempShades);
  }

  useEffect(() => {
    gatherShades(palette, colorId);
  }, [colorId, palette]);

  const changeFormat = (val) => {
    setFormat(val);
  };
  const colorBoxes = shades.map((color) => {
    return (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
        showAllColor={false}
      />
    );
  });
  const classes = styles();
  return (
    <div className={classes.palette}>
      <Navbar changeFormat={changeFormat} />
      <div className={classes.paletteClr}>
        {colorBoxes}
        <div className={classes.goback}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColor;
