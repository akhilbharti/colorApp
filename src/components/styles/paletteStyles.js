import { makeStyles } from "@material-ui/styles";

export const styles = makeStyles({
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