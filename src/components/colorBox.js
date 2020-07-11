import React, { useState, useEffect } from "react";
import "./styles/colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  colorBox: {
    width: "20%",
    height: (props) => (props.showLink ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyBtn: {
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
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    textTransform: "uppercase",
    textDecoration: "none",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    overflow: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      padding: "1rem",
      marginBottom: "0",
      textTransform: "uppercase",
    },
    "& p": {
      fontWeight: "100",
      fontSize: "2rem",
    },
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
    zIndex: "25",
  },
});

function ColorBox({ ...props }) {
  const [copied, setCopied] = useState(false);

  const changecopystate = () => {
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const { name, background, id, paletteId } = props;
  const classes = styles(props);

  return (
    <div className={classes.colorBox} style={{ background }}>
      <div
        style={{ background }}
        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
      />
      <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
        <h1>copied!</h1>
        <p>{background}</p>
      </div>
      <div className="copy-continer">
        <div className={classes.boxContent}>
          <span className={classes.colorName}>{name}</span>
        </div>
        <CopyToClipboard text={background} onCopy={changecopystate}>
          <button className={classes.copyBtn}>Copy</button>
        </CopyToClipboard>
      </div>
      {props.showLink && (
        <Link
          to={`/palette/${paletteId}/${id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={classes.seeMore}>More</span>
        </Link>
      )}
    </div>
  );
}
export default ColorBox;
