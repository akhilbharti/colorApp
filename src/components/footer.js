import React from "react";
import { makeStyles } from "@material-ui/styles";

const styles= makeStyles({
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "1rem",
  }
})
export default function Footer(props) {
  const { paletteName, emoji } = props;
  const classes= styles()
  return (
    <footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
