import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Wrapper from "../../UI/Utilities/Wrapper";
import Me from "../../UI/Images/Me.svg";
import { useStyle } from "./HeroStyle";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
export default function Hero() {
  const classes = useStyle();
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const social = (
    <Grid item className={classes.ButtonContainer}>
      <a
        href="https://github.com/A7medAref"
        target="_blank"
        rel="noreferrer"
        className={classes.disableA}
      >
        <Button className={`${classes.ButtonIcon} AnimateLeft`}>
          <AiFillGithub />
        </Button>
      </a>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ahmedmostafa992001@gmail.com`}
        target="_blank"
        rel="noreferrer"
        className={classes.disableA}
      >
        <Button className={`${classes.ButtonIcon} AnimateUpSpecific`}>
          <FiMail />
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed-aref-9a8a25215/"
        target="_blank"
        rel="noreferrer"
        className={classes.disableA}
      >
        <Button
          className={`${classes.ButtonIcon} AnimateRight`}
          style={{ fontSize: "1.6rem" }}
        >
          in
        </Button>
      </a>
    </Grid>
  );

  return (
    <Grid container className={classes.HeroBody}>
      <Wrapper>
        <Grid container style={{ width: "100%", height: "100%" }}>
          <Grid
            container
            className={classes.Hero1}
            item
            lg={6}
            direction="column"
            justifyContent="center"
            alignItems={matchMd ? "center" : undefined}
          >
            <Grid item className={classes.cirParent}>
              <div className={classes.cir}></div>
              <Typography
                variant="subtitle1"
                className={`${classes.EditSub} AnimateUpSpecific`}
              >
                Get Every Single Solution
              </Typography>
            </Grid>
            <Grid item className="AnimateUp">
              <Typography variant="h2" gutterBottom>
                Hi, I am
              </Typography>
              <Typography variant="h1">Ahmed M. Aref</Typography>
              <Typography variant="subtitle1">
                Full Stack Web Developer
              </Typography>
            </Grid>
            {matchMd ? null : social}
          </Grid>
          <Grid container item justifyContent="center" sm={12} lg={6}>
            <img
              src={Me}
              alt="ahmed aref"
              className={`${classes.Me} AnimateUpSpecific`}
            ></img>
          </Grid>
          {matchMd ? (
            <Grid container justifyContent="center">
              {social}
            </Grid>
          ) : null}
        </Grid>
      </Wrapper>
    </Grid>
  );
}
