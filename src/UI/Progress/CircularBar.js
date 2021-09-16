import { Grid, makeStyles, Typography } from "@material-ui/core";
import theme from "../Theme";
const useStyle = makeStyles({
  main: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "3.5px solid #eee",
    borderLeft: `3.5px solid ${theme.palette.primary.dark}`,
    animation: "$rotate 1s linear infinite",
    [theme.breakpoints.down("xs")]: {
      width: "80px",
      height: "80px",
    },
  },
  Logo: {
    animation: "$anti 1s linear infinite",
    color: theme.palette.secondary.light,
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "1.2rem",
    userSelect: "none",
    "& > div": {
      color: theme.palette.primary.main,
      display: "inline-block",
      transform: "rotate(-12deg)",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  "@keyframes anti": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(-360deg)",
    },
  },
});
export default function CircularBar() {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.main}
      justifyContent="center"
      alignItems="center"
    >
      <span className={classes.Logo}>
        A<div>r</div>ef
      </span>
    </Grid>
  );
}
