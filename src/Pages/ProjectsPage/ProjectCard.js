import { Card, Grid, Typography } from "@material-ui/core";
import ReadMore from "../../Components/ReadMore";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useStyle } from "./ProjectsStyle";
export default function ProjectCard({ imgSrc, title, description, link }) {
  const classes = useStyle();
  return (
    <Card className={`${classes.Card} ${classes.animateScale}`}>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid container className={classes.imgContainer}>
          <img src={imgSrc} alt="project img" className={classes.CardImg} />
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="subtitle2" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: "auto" }}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ReadMore>
              <HiOutlineExternalLink /> View Project
            </ReadMore>
          </a>
        </Grid>
      </Grid>
    </Card>
  );
}
