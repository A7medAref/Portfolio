import { makeStyles } from "@material-ui/core";
import theme from "../../UI/Theme";
// import theme from "../../UI/Theme";

export const useStyle = makeStyles({
  imgContainer: {},
  Card: {
    width: "268px",
    padding: "1rem",
    height: "28rem",
    backgroundColor: "#fbfbfb",
    letterSpacing: ".4px",
    wordSpacing: "2px",
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
    },
  },
  CardImg: {
    borderRadius: "3px",
    width: "100%",
    height: "150px",
  },
  title: {
    margin: "1.5rem 0 .5rem",
    color: "#111",
    letterSpacing: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.45rem",
    },
  },
  description: {
    fontWeight: "600",
  },
  ///////////////////////////////
  ProjectPage: {
    marginTop: "2rem",
    padding: "2rem 7rem 5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem .3rem 5rem",
    },
  },
  PageTitie: {
    color: theme.palette.secondary.light,
    fontWeight: "600",
    marginTop: "3rem",
    "& > span": {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  animateScale: {
    animation: "$scaleing 2s ease",
  },
  "@keyframes scaleing": {
    "0%": {
      transform: "scale(0)",
      opacity: 0.5,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
});
