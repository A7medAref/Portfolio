import { makeStyles } from "@material-ui/core";
import theme from "../../UI/Theme";

export const useStyle = makeStyles({
  Toolbar: {
    backgroundColor: "#fefefe",
    padding: "4px 6rem",
    [theme.breakpoints.down("md")]: {
      padding: "3px 4rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3px 2rem",
    },
  },
  Tabs: {
    marginLeft: "auto",
    position: "relative",
  },
  Tab: {
    boxSizing: "border-box",
    minWidth: "7rem",
    color: "black",
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: "17px",
    marginRight: "1rem",
    textTransform: "capitalize",
    "&:hover": {
      transition: "color .4s",
      opacity: "1",
      color: theme.palette.primary.main,
    },
  },
  selectedTab: {
    color: theme.palette.primary.dark,
  },
  contactTab: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "50px",
    minHeight: "fit-content",
    height: "fit-content",
    position: "relative",
    opacity: "1",
    margin: "auto 0 auto 1.5rem",
    transition: "background .3s",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  contactTabSelected: {
    backgroundColor: theme.palette.primary.dark,
  },
  Logo: {
    color: theme.palette.secondary.light,
    letterSpacing: "5px",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Roboto Slab",
    fontSize: "2rem",
    userSelect: "none",
    "&:hover > div": {
      transform: "rotate(370deg)",
    },
    "& > div": {
      color: theme.palette.primary.main,
      display: "inline-block",
      transition: "transform 1s",
      transform: "rotate(-15deg)",
    },
  },

  ////////////////////
  menuItem: {
    opacity: ".7",
    "&:hover": {
      opacity: 0.9,
    },
  },
  selectedOne: { opacity: 1 },
  SwipeableDrawer: {
    backgroundColor: theme.palette.primary.main,
  },
  menuIcon: {
    marginLeft: "auto",
    fontSize: "2em",
    color: theme.palette.primary.dark,
  },
  menuCard: {
    [theme.breakpoints.down("md")]: { minWidth: "20rem", width: "30%" },
    [theme.breakpoints.down("xs")]: { minWidth: "85vw" },
  },
  menuCardItems: {
    color: "white",
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: "1rem",
    opacity: ".7",
  },
  selectedMenuItem: { opacity: "1 !important" },
});
