import React, { useState } from "react";
import ColorBox from "./colorBox";
import Navbar from "./navbar";
import Footer from "./footer";
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
});

function Palette({ ...props }) {
  const { colors, paletteName, emoji, id } = props.palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (event, newlevel) => {
    setLevel(newlevel);
  };

  const changeFormat = (val) => {
    setFormat(val);
  };
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      id={color.id}
      paletteId={id}
      showLink
    />
  ));
  const classes = styles();
  return (
    <div className={classes.palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
        showAllColor
      />
      {/* navbar will be added here */}
      <div className={classes.paletteClr}>
        {colorBoxes}
        {/* different color boxes will go here */}
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
      {/* eventually footer will be added here */}
    </div>
  );
}

export default Palette;
