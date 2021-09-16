import { makeStyles } from "@material-ui/core";
import theme from "../../UI/Theme";

export const useStyle = makeStyles({
  contactHome: {
    backgroundColor: "#F9F7F7",
    minHeight: "35rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: "4rem 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "0 .3rem 2rem",
    },
  },
  contactText: {
    fontWeight: "500",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
  },
  vector: {
    width: "30rem",
    [theme.breakpoints.down("md")]: {
      width: "25rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "18rem",
      maxWidth: "95%",
    },
  },
});
