import { makeStyles } from "@material-ui/core";
import theme from "../../../UI/Theme";

export const useStyle = makeStyles({
  AboutHomeContainer: {
    padding: "7rem 0",
    minHeight: "38rem",
    [theme.breakpoints.down("md")]: {
      padding: "4rem 3rem",
      boxSizing: "border-box",
      minHeight: "42rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3.5rem 1rem",
    },
  },
  Bars: {
    marginBottom: "1.8rem",
  },
  progressContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },
  Block: {
    marginTop: ".5rem",
    border: ".5px solid #DCDCDC",
    borderRadius: "2px",
    width: "8rem",
    padding: ".5rem 0",
    [theme.breakpoints.down("md")]: {
      margin: ".5rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: ".5rem 2rem",
    },
  },
  Block1: {
    color: "#DCDCDC",
    opacity: 1,
    fontWeight: "500",
    marginBottom: ".7rem",
  },
  Block2: {
    color: "#777",
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: ".75rem",
  },
});
