import { createTheme } from "@material-ui/core";
const Red = "#EC5B53";
const DarkRed = "#dc3545";
const DarkPurple = "#080827";
const LightPurple = "#002D5B";
const Grey = "#77797B";
const theme = createTheme({
  palette: {
    primary: {
      dark: DarkRed,
      main: Red,
    },
    secondary: {
      main: DarkPurple,
      light: LightPurple,
    },
  },
  typography: {
    h1: {},
  },
});
theme.typography.h1 = {
  color: theme.palette.secondary.light,
  fontSize: "4rem",
  fontFamily: "Roboto Slab",
  fontWeight: "500",
  letterSpacing: "2.5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
};
theme.typography.h2 = {
  color: theme.palette.secondary.light,
  fontSize: "2.5rem",
  fontFamily: "Roboto Slab",
  fontWeight: "400",
  letterSpacing: "2.5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.7rem",
  },
};
theme.typography.h3 = {
  color: theme.palette.secondary.main,
  fontSize: "2.5rem",
  fontFamily: "Roboto Slab",
  fontWeight: "600",
  textTransform: "uppercase",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
  },
};
theme.typography.h4 = {
  color: theme.palette.secondary.main,
  fontSize: "2.3rem",
  fontFamily: "Roboto Slab",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h5 = {
  color: theme.palette.secondary.light,
  fontSize: ".9rem",
  fontFamily: "Roboto Slab",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: ".85rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".8rem",
  },
};
theme.typography.h6 = {
  color: theme.palette.secondary.main,
  fontSize: "3rem",
  opacity: 0.9,
  fontFamily: "Arimo",
  fontWeight: "600",
  letterSpacing: "2px",
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
};
/////////////////////////////////////////////////
theme.typography.subtitle1 = {
  color: LightPurple,
  opacity: "0.6",
  fontFamily: "Roboto Slab",
  fontWeight: "500",
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
};
theme.typography.subtitle2 = {
  color: LightPurple,
  fontFamily: "Roboto Slab",
  opacity: ".8",
  fontWeight: "700",
  fontSize: "1.5rem",
};
/////////////////////////////////////////////////
theme.typography.body1 = {
  color: Grey,
  fontSize: ".95rem",
  fontFamily: "Roboto slab",
  lineHeight: "1.7",
  [theme.breakpoints.down("sm")]: {
    fontSize: ".95rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: ".85rem",
  },
};
export default theme;
