import { Grid, Typography } from "@material-ui/core";
import { useStyle } from "./SkillsStyle";
import Html from "../../../UI/Images/html5.svg";
import css from "../../../UI/Images/css3.png";
import js from "../../../UI/Images/javascript.jpg";
import sass from "../../../UI/Images/sass.png";
import react from "../../../UI/Images/react.png";
import MU from "../../../UI/Images/materialUI.png";
import git from "../../../UI/Images/git.png";
import node from "../../../UI/Images/nodejs.png";
import mongodb from "../../../UI/Images/mongodb.png";
import algorithms from "../../../UI/Images/algorithms.svg";
import clouds from "../../../UI/Images/clouds.svg";
import PS from "../../../UI/Images/problemSolving.svg";
import TS from "../../../UI/Images/Typescript.png";
import c from "../../../UI/Images/c++.png";
import docker from "../../../UI/Images/docker.png";
import py from "../../../UI/Images/python.png";
import AnimateAbout from "../../../UI/Animating/AnimateAbout";
const usingNow = [
  [Html, "Html5", "1"],
  [css, "Css3", "1"],
  [sass, "Sass", "2"],
  [js, "Javascript", "1"],
  [react, "React", "2"],
  [MU, "Material-Ui", "2"],
  [node, "Node", "1"],
  [mongodb, "Mongodb", "3"],
];
const learning = [
  [algorithms, "algorithms", "2"],
  [docker, "docer", "4"],
  [clouds, "clouds", "1"],
  [TS, "typescript", "1"],
];
const other = [
  [c, "C++", "1"],
  [PS, "Problem Solving", "1"],
  [git, "Git", "1"],
  [py, "python", "1"],
];

export default function Skills() {
  const classes = useStyle();
  const Data = (e, i) => (
    <Grid
      key={i}
      container
      item
      md={3}
      sm={6}
      direction="column"
      className={classes.imgsContainer}
      justifyContent="space-between"
    >
      <Grid item>
        <img src={e[0]} alt={e[1]} className={classes[`imgType${e[2]}`]} />
      </Grid>
      <Grid item className={classes.ImgText}>
        {e[1]}
      </Grid>
    </Grid>
  );
  ////////////////////////////
  return (
    <div className={`AnimateSkillAbout ${classes.Skills}`}>
      <AnimateAbout className="AnimateSkillAbout" top={200} type="u">
        <Grid container className={classes.SkillsBlocks}>
          <Grid container justifyContent="center">
            <Typography variant="subtitle2" className={classes.Title}>
              USING NOW
            </Typography>
          </Grid>
          {usingNow.map(Data)}
          <Grid container justifyContent="center">
            <Typography variant="subtitle2" className={classes.Title2}>
              LEARNING
            </Typography>
          </Grid>
          {learning.map(Data)}
          <Grid container justifyContent="center">
            <Typography variant="subtitle2" className={classes.Title2}>
              OTHER SKILLS
            </Typography>
          </Grid>
          {other.map(Data)}
        </Grid>
      </AnimateAbout>
    </div>
  );
}
