import { makeStyles } from "@material-ui/core";
import theme from "../Theme";

const useStyle = makeStyles({
  wrapper: {
    margin: "0 10vw",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: "0 5vw",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
});
export default function Wrapper({ children }) {
  const classes = useStyle();
  return <div className={classes.wrapper}>{children}</div>;
}
