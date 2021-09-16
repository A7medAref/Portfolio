import { makeStyles } from "@material-ui/core";
import theme from "../UI/Theme";

const useStyle = makeStyles({
  main: {
    boxSizing: "border-box",
    width: "100%",
    height: "1.2rem",
    padding: "4px",
    borderRadius: "20rem",
    border: "solid 1px #aaa",
  },
  rest: {
    backgroundColor: "#E8E8E8",
    height: "100%",
    borderRadius: "50px",
    width: "100%",
  },
  progress: {
    background: `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.primary.dark})`,
    height: "100%",
    borderRadius: "50px",
    animation: "$myEffect 2s",
  },
  "@keyframes myEffect": {
    "0%": {
      width: 0,
    },
    "100%": {
      width: undefined,
    },
  },
});

export default function Progress({ width }) {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <div className={classes.rest}>
        <div className={classes.progress} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}
