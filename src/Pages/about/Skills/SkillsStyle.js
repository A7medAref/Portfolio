import { makeStyles } from "@material-ui/core";
import theme from "../../../UI/Theme";

export const useStyle = makeStyles({
  Title: {
    padding: "1rem 3rem",
    border: `4px solid ${theme.palette.secondary.light}`,
    marginBottom: "2rem",
  },
  Title2: {
    padding: "1rem 3rem",
    border: `4px solid ${theme.palette.secondary.light}`,
    margin: "4rem 0 1.2rem",
  },

  imgType1: {
    width: "5.3rem",
  },
  imgType2: {
    width: "6.1rem",
  },
  imgType3: {
    width: "3rem",
  },
  imgType4: {
    width: "7rem",
    height: "5rem",
  },
  imgsContainer: {
    margin: "2rem 0",
    textAlign: "center",
  },

  ImgText: {
    fontFamily: "Tahoma",
    color: "#666",
    fontSize: "1.05rem",
    marginTop: ".4rem",
    fontWeight: "500",
    letterSpacing: "1.4px",
    textTransform: "uppercase",
  },

  Skills: {
    background: "rgb(225,229,232,.1)",
    minHeight: "1160px",
    padding: "5rem 0",
  },
  SkillsBlocks: {
    maxWidth: "70rem",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35rem",
    },
  },
});
