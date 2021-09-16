import { makeStyles } from "@material-ui/core";
import theme from "../../UI/Theme";

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
    marginBottom: "1.2rem",
  },
  progressContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },
});
