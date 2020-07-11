import React from "react";
import {styles} from './styles/miniPaletteStyles'
function MiniPalette(props) {
  const { colors, paletteName, emoji } = props;

  const handleClick = () => {
    props.goToPalette(props.id);
  };
  const classes = styles();
  const minimap = colors.map((color) => (
    <div
      key={color.name}
      className={classes.minicolor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{minimap}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
