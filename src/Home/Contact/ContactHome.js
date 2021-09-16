import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import ReadMore from "../../Components/ReadMore";
import Wrapper from "../../UI/Utilities/Wrapper";
import { useStyle } from "./ContactStyle";
import ContactVector from "../../UI/Images/ContactVector.svg";
import AnimateComponent from "../../UI/Animating/AnimateComponent";
import { Link } from "react-router-dom";
export default function ContactHome({ setValue }) {
  const classes = useStyle();
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  const ContactButton = (
    <Grid item style={{ marginTop: "2rem" }}>
      <ReadMore component={Link} to="/contact" onClick={() => setValue(3)}>
        Contact Us
      </ReadMore>
    </Grid>
  );
  return (
    <Grid container className={classes.contactHome} alignItems="center">
      <Wrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid
            container
            item
            lg={6}
            alignItems="center"
            className="AnimateContactHome"
          >
            <AnimateComponent top={500} type="r" className="AnimateContactHome">
              <Grid item style={{ margin: matchMd ? "1rem auto 3rem" : "0" }}>
                <Typography variant="h2" className={classes.contactText}>
                  If Not Now, When?
                </Typography>
                <Typography variant="h2" className={classes.contactText}>
                  Let's Work Together!
                </Typography>
                {matchMd ? null : ContactButton}
              </Grid>
            </AnimateComponent>
          </Grid>
          <AnimateComponent top={500} type="l" className="AnimateContactHome">
            <Grid
              container
              item
              lg={6}
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <img
                src={ContactVector}
                alt="contact me"
                className={classes.vector}
              />
              {matchMd ? ContactButton : null}
            </Grid>
          </AnimateComponent>
        </Grid>
      </Wrapper>
    </Grid>
  );
}
