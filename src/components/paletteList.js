import React from "react";
import MiniPalette from "./miniPalette";
import {styles} from './styles/paletteListStyles'
import { Link } from "react-router-dom";

function PaletteList(props) {
  const { palettes, history } = props;
  const classes = styles();
  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">create new palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              {...palette}
              goToPalette={goToPalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteList;
