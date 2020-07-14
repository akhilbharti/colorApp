import React from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    height: "25%",
    width: "20%",
    cursor: "pointer",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    margin: "0 auto",
  },
});
export default function DraggableColorBox(props) {
  const classes = styles();
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  );
}
