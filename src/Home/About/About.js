import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import ProgressSkills from "../../Components/ProgressSkills";
import ReadMore from "../../Components/ReadMore";
import Wrapper from "../../UI/Utilities/Wrapper";
import { useStyle } from "./AboutStyle";
import { FaArrowRight } from "react-icons/fa";
import AnimateComponent from "../../UI/Animating/AnimateComponent";
import { Link } from "react-router-dom";

export default function AboutHome({ setValue }) {
  const classes = useStyle();
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  const matchXs = useMediaQuery(Theme.breakpoints.down("xs"));
  const aboutButton = (
    <Grid item style={{ margin: matchXs ? "2rem auto 0" : "1rem 0 0" }}>
      <ReadMore component={Link} to="/about" onClick={() => setValue(1)}>
        Read More <FaArrowRight style={{ marginLeft: "10px" }} />
      </ReadMore>
    </Grid>
  );
  return (
    <Grid container className={classes.AboutHomeContainer} alignItems="center">
      <Wrapper>
        <Grid
          container
          justifyContent="space-between"
          className="AnimateAboutHome"
          style={{ width: "100%" }}
          direction={matchMd ? "column" : undefined}
        >
          <Grid item container lg={5}>
            <AnimateComponent type="r" className="AnimateAboutHome">
              <Grid item>
                <Typography variant="h3" style={{ marginBottom: "2rem" }}>
                  About Myself
                </Typography>
                <Typography variant="body1">
                  I am Ahmed Aref, a Platform Engineer with expertise in backend
                  development and DevOps. I specialize in designing scalable
                  systems that handle high loads efficiently. My experience
                  includes cloud computing, container orchestration, and
                  building robust solutions to enhance system performance and
                  reliability in dynamic environments.
                </Typography>
                {matchMd ? null : aboutButton}
              </Grid>
            </AnimateComponent>
          </Grid>

          <Grid item container lg={6} className={classes.progressContainer}>
            <AnimateComponent type="l" className="AnimateAboutHome">
              <Grid item style={{ minWidth: "100%", maxWidth: "100%" }}>
                <ProgressSkills
                  progress="90"
                  title="NestJS"
                  className={classes.Bars}
                />
                <ProgressSkills
                  progress="85"
                  title="PostgreSQL"
                  className={classes.Bars}
                />
                <ProgressSkills
                  progress="85"
                  title="Docker"
                  className={classes.Bars}
                />
                <ProgressSkills
                  progress="95"
                  title="Redis"
                  className={classes.Bars}
                />
                <ProgressSkills
                  progress="90"
                  title="Ansible"
                  className={classes.Bars}
                />
                {matchMd ? aboutButton : null}
              </Grid>
            </AnimateComponent>
          </Grid>
        </Grid>
      </Wrapper>
    </Grid>
  );
}
