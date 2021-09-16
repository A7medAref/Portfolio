import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import ReadMore from "../../Components/ReadMore";
import Wrapper from "../../UI/Utilities/Wrapper";
import gear from "../../UI/Images/gear.svg";
import AnimateComponent from "../../UI/Animating/AnimateComponent";
import { useStyle } from "./ProjectStyle";
import { Link } from "react-router-dom";
export default function ProjectsHome({ setValue }) {
  const classes = useStyle();
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  const ContactButton = (
    <Grid item style={{ marginTop: "2rem" }}>
      <ReadMore component={Link} to="/projects" onClick={() => setValue(2)}>
        Have a look
      </ReadMore>
    </Grid>
  );
  return (
    <Grid container className={classes.contactHome} alignItems="center">
      <Wrapper>
        <Grid container direction="row-reverse">
          <Grid
            container
            item
            lg={6}
            justifyContent="flex-end"
            alignItems="center"
            className="AnimateProjectHome"
          >
            <AnimateComponent
              top={-130}
              type="l"
              className="AnimateProjectHome"
            >
              <Grid item style={{ margin: matchMd ? "1rem auto 3rem" : "0" }}>
                <Typography variant="h2" className={classes.contactText}>
                  My latest projects
                </Typography>
                <Typography variant="h2" className={classes.contactText}>
                  What are you waiting for!
                </Typography>
                {matchMd ? null : ContactButton}
              </Grid>
            </AnimateComponent>
          </Grid>
          <AnimateComponent top={-0} type="r" className="AnimateProjectHome">
            <Grid
              container
              item
              lg={6}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={gear} alt="contact me" className={classes.vector} />
              {matchMd ? ContactButton : null}
            </Grid>
          </AnimateComponent>
        </Grid>
      </Wrapper>
    </Grid>
  );
}
