import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import ProgressSkills from "../../../Components/ProgressSkills";
import Wrapper from "../../../UI/Utilities/Wrapper";
import { useStyle } from "./StatusStyle";
import AnimateComponent from "../../../UI/Animating/AnimateAbout";

export default function Status() {
  const classes = useStyle();
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  const matchXs = useMediaQuery(Theme.breakpoints.down("xs"));
  const aboutButton = (
    <Grid
      container
      justifyContent={matchMd ? "center" : "space-between"}
      style={{ margin: matchXs ? "2rem auto 0" : "1rem 0 0" }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.Block}
      >
        <Typography variant="h4" className={classes.Block1}>
          +7
        </Typography>
        <Typography className={classes.Block2}>big projects</Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.Block}
      >
        <Typography variant="h4" className={classes.Block1}>
          +30
        </Typography>
        <Typography className={classes.Block2}>small projects</Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.Block}
      >
        <Typography variant="h4" className={classes.Block1}>
          +3
        </Typography>
        <Typography className={classes.Block2}>experience</Typography>
      </Grid>
    </Grid>
  );
  return (
    <Grid container className={classes.AboutHomeContainer} alignItems="center">
      <Wrapper>
        <Grid
          container
          justifyContent="space-between"
          className="AnimateAboutPage"
          style={{ width: "100%" }}
          direction={matchMd ? "column" : undefined}
        >
          <Grid item container lg={5}>
            <AnimateComponent top={-600} type="r" className="AnimateAboutPage">
              <Grid item>
                <Typography variant="h3" style={{ marginBottom: "1.5rem" }}>
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
                {aboutButton}
              </Grid>
            </AnimateComponent>
          </Grid>

          <Grid item container lg={6} className={classes.progressContainer}>
            <AnimateComponent top={-600} type="l" className="AnimateAboutPage">
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
              </Grid>
            </AnimateComponent>
          </Grid>
        </Grid>
      </Wrapper>
    </Grid>
  );
}
