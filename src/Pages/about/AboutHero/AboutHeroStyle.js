import { makeStyles } from "@material-ui/core";
import theme from "../../../UI/Theme";
export const useStyle = makeStyles({
  Hero: {
    padding: "8rem 8rem 4rem",
    background: "linear-gradient(to right,#eee,#fafafa)",
    boxSizing: "border-box",
    minHeight: "40rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "7rem 5rem 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "7rem 2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "7rem .5rem 2rem",
    },
  },

  HeroImg: {
    maxWidth: "33rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "31rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "29rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
      width: "25rem",
      margin: "3rem 0",
    },
  },
  who: {
    fontFamily: "Arimo",
    color: "#aaa",
    fontSize: "1.1rem",
    lineHeight: "1.4",
    marginBottom: "6px",
    letterSpacing: "1px",
    "& > span": {
      fontWeight: "bold",
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
  Words: {
    marginTop: "3rem",
    paddingLeft: "3rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginTop: "0rem",
      paddingLeft: "0",
    },
  },
  ButtonContainer: {
    marginTop: "1.5rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
  disableA: {
    color: "white",
    textDecoration: "none",
    "&:not(:first-child)": {
      marginLeft: "1.2rem",
    },
  },
  socialButton: {
    backgroundColor: theme.palette.primary.main,
    minWidth: "1rem",
    minHeight: "1rem",
    height: "2.5rem",
    width: "2.5rem",
    fontSize: "1.7rem",
    fontWeight: "bold",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
});
