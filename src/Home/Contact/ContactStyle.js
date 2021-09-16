import { makeStyles } from "@material-ui/core";
// import ContactBackground from "../../UI/Images/ContactBackground.jpg";
import theme from "../../UI/Theme";
export const useStyle = makeStyles({
  contactHome: {
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    minHeight: "34rem",
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
    height: "19rem",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "9rem",
    },
  },
});
