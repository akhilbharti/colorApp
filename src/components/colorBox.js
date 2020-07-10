import React, { useState, useEffect } from "react";
import "./styles/colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

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
  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.7;

  return (
    <div className="color-box" style={{ background }}>
      <div
        style={{ background }}
        className={`copy-overlay ${copied && "show"}`}
      />
      <div className={`copy-msg ${copied && "show"}`}>
        <h1>copied!</h1>
        <p className={isLightColor && "dark-text"}>{background}</p>
      </div>
      <div className="copy-continer">
        <div className="box-content">
          <span className={isDarkColor && "light-text"}>{name}</span>
        </div>
        <CopyToClipboard text={background} onCopy={changecopystate}>
          <button className={`copy-btn ${isLightColor && "dark-text"}`}>
            Copy
          </button>
        </CopyToClipboard>
      </div>
      {props.showLink && (
        <Link
          to={`/palette/${paletteId}/${id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={`see-more ${isLightColor && "dark-text"}`}>
            More
          </span>
        </Link>
      )}
    </div>
  );
}
export default ColorBox;
