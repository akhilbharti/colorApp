import React, { useState, useEffect } from "react";
import ColorBox from "./colorBox";
import "./styles/palette.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

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
  return (
    <div className="SingleColrPalette Palette">
      <Navbar changeFormat={changeFormat} />
      <div className="palette-clr">
        {colorBoxes}
        <div className="goback color-box">
          <Link to={`/palette/${palette.id}`} className="goback-btn">
            Go Back
          </Link>
        </div>
      </div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColor;
