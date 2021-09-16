import { makeStyles } from "@material-ui/core";
import theme from "../../UI/Theme";
export const useStyle = makeStyles({
  HeroBody: {
    minHeight: "40rem",
    width: "100%",
    marginTop: "4rem",
    backgroundColor: "#E1E5E8",
  },
  ButtonIcon: {
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
  disableA: {
    color: "white",
    textDecoration: "none",
    "&:not(:first-child)": {
      marginLeft: "1.2rem",
    },
  },
  ButtonContainer: {
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
  EditSub: {
    opacity: "1",
    color: theme.palette.primary.light,
    fontWeight: "300",
    fontSize: "1.3rem",
    letterSpacing: "1.5px",
    marginBottom: "3rem",
    userSelect: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  cirParent: {
    position: "relative",
  },
  cir: {
    [theme.breakpoints.up("lg")]: {
      width: "3rem",
      height: "3rem",
      opacity: ".5",
      position: "absolute",
      border: `2px solid ${theme.palette.primary.light}`,
      borderRadius: "50%",
      top: "-2rem",
      left: "-6rem",
    },
  },
  Me: {
    maxWidth: "25rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "22rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "17rem",
    },
  },
  Hero1: {
    [theme.breakpoints.down("md")]: {
      padding: "5rem 0 3rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2.5rem 0 3rem",
      textAlign: "center",
    },
  },
});
