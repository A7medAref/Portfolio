import {
  Grid,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import theme from "../../UI/Theme";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
const useStyle = makeStyles({
  Footer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "1rem 5rem",
    color: "#eee",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "1rem .5rem",
    },
  },
  ButtonIcon: {
    minWidth: "1rem",
    color: "#ddd",
    minHeight: "1rem",
    height: "2.5rem",
    width: "2.5rem",
    fontSize: "1.7rem",
    fontWeight: "bold",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },

  disableA: {
    color: "white",
    textDecoration: "none",
    "&:not(:first-child)": {
      marginLeft: "1.2rem",
    },
  },
});
export default function Footer() {
  const classes = useStyle();
  const Theme = useTheme();
  const matchSm = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      justifyContent="space-between"
      className={`${classes.Footer} footerAbsolute`}
      alignItems="center"
      direction={matchSm ? "column" : undefined}
    >
      <Grid
        item
        style={{
          margin: matchSm ? "0 0 1rem" : undefined,
          fontSize: matchSm ? ".9rem" : undefined,
        }}
      >
        Copyright &#169;2021 All rights reserved
      </Grid>
      <Grid container style={{ width: "fit-content" }}>
        <Grid item>
          <a
            className={classes.disableA}
            href="https://github.com/A7medAref"
            target="_blank"
            rel="noreferrer"
          >
            <Button className={classes.ButtonIcon} disableRipple>
              <AiFillGithub />
            </Button>
          </a>
          <a
            className={classes.disableA}
            href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ahmedmostafa992001@gmail.com`}
            target="_blank"
            rel="noreferrer"
          >
            <Button className={classes.ButtonIcon} disableRipple>
              <FiMail />
            </Button>
          </a>
          <a
            className={classes.disableA}
            href="https://www.linkedin.com/in/ahmed-aref-9a8a25215/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className={classes.ButtonIcon}
              disableRipple
              style={{ fontSize: "1.6rem" }}
            >
              in
            </Button>
          </a>
          <a
            className={classes.disableA}
            href="https://www.facebook.com/ahmad.mostafaaref.7/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className={classes.ButtonIcon} disableRipple>
              <FaFacebook />
            </Button>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
