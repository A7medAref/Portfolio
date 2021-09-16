import { Button, makeStyles } from "@material-ui/core";
import theme from "../UI/Theme";
const useStyle = makeStyles({
  animateButton: {
    textTransform: "none",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    zIndex: "1",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&::before": {
      borderRadius: "inherit",
      content: `""`,
      transition: "all 1s cubic-bezier(0.5, 1.6, 0.4, 0.7)",
      position: "absolute",
      height: "100%",
      left: "0",
      top: "0",
      zIndex: "10",
      backgroundColor: theme.palette.primary.dark,
      width: "0",
    },
    "&:hover::before": {
      width: "100%",
    },
  },
});
export default function ReadMore({ children, style, component, to, onClick }) {
  const classes = useStyle();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={classes.animateButton}
      color="primary"
      style={style}
      component={component}
      to={to}
    >
      <span style={{ zIndex: "1000" }}>{children}</span>
    </Button>
  );
}
