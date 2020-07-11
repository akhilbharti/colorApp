import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import {styles} from './styles/colorBoxStyles'


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
