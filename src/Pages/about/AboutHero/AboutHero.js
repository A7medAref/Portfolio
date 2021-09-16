import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Hidden,
} from "@material-ui/core";
import developer from "../../../UI/Images/Developer1.svg";
import { useStyle } from "./AboutHeroStyle";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function AboutHero() {
  const classes = useStyle();
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  const matchXs = useMediaQuery(Theme.breakpoints.down("xs"));
  const social = (
    <Grid item className={classes.ButtonContainer}>
      <a
        className={classes.disableA}
        href="https://www.facebook.com/ahmad.mostafaaref.7/"
        target="_blank"
        rel="noreferrer"
      >
        <Button className={`${classes.socialButton} AnimateLeft`}>
          <FaFacebook />
        </Button>
      </a>
      <a
        className={classes.disableA}
        href="https://www.instagram.com/ahmadmaref/"
        target="_blank"
        rel="noreferrer"
      >
        <Button className={`${classes.socialButton} AnimateUpSpecific`}>
          <AiFillInstagram />
        </Button>
      </a>
      <a
        className={classes.disableA}
        href="https://twitter.com/AhmedAr19181954"
        target="_blank"
        rel="noreferrer"
      >
        <Button className={`${classes.socialButton} AnimateRight`}>
          <FaTwitter />
        </Button>
      </a>
    </Grid>
  );
  return (
    <>
      <div className={classes.Hero}>
        <Grid container direction="row-reverse">
          <Grid
            item
            container
            lg={6}
            justifyContent="center"
            alignItems={matchMd ? "center" : undefined}
            direction="column"
            className={classes.Words}
          >
            <Typography variant="h6" gutterBottom className="AnimateUp">
              Ahmed Aref
            </Typography>
            <Typography
              className={`${classes.who} AnimateUpSpecific`}
              style={{ marginBottom: "20px" }}
            >
              Hello, my name is Ahmed Aref. I am a Programmer{" "}
              {matchXs ? null : <br />}
              &#38; <span>web developer</span>.
            </Typography>
            <Hidden mdDown>
              <Typography className={`${classes.who} AnimateUpSpecific`}>
                Engineer
              </Typography>
              <Typography className={`${classes.who} AnimateUpSpecific`}>
                Programmer
              </Typography>
              <Typography className={`${classes.who} AnimateUpSpecific`}>
                front-end
              </Typography>
              <Typography className={`${classes.who} AnimateUpSpecific`}>
                back-end
              </Typography>
            </Hidden>
            {matchMd ? null : social}
          </Grid>
          <Grid
            item
            container
            lg={6}
            justifyContent="flex-end"
            alignItems="center"
            direction="column"
          >
            <img
              src={developer}
              alt="background"
              className={`${classes.HeroImg} AnimateUpSpecific`}
            />
            {matchMd ? social : null}
          </Grid>
        </Grid>
        {/* /////////////////////// */}
      </div>
    </>
  );
}
