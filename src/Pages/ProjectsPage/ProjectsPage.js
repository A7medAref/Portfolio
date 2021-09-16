import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectCard from "./ProjectCard";
import data from "./ProjectsData";
import { useStyle } from "./ProjectsStyle";
export default function ProjectPage() {
  const classes = useStyle();
  const [Data, setData] = useState([data[0]]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (counter < data.length) {
        setData([...Data, data[counter]]);
        setCounter((pre) => pre + 1);
      }
    }, 150);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  useEffect(() => {
    window.scrollBy(0, -1000);
  }, []);
  return (
    <Grid container className={classes.ProjectPage}>
      <Grid container justifyContent="center" style={{ height: "fit-content" }}>
        <Typography variant="h2" className={classes.PageTitie}>
          My Latest <span>Works</span>
        </Typography>
      </Grid>
      <Grid container style={{ minHeight: "75rem" }}>
        {Data.map((e, i) => (
          <Grid
            item
            container
            lg={4}
            md={6}
            key={i}
            justifyContent="center"
            style={{ marginTop: "4rem" }}
          >
            <ProjectCard
              imgSrc={e.imgSrc}
              title={e.title}
              description={e.description}
              link={e.link}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
