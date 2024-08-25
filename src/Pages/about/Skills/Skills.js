import { Grid, Typography } from "@material-ui/core";
import { useStyle } from "./SkillsStyle";
import react from "../../../UI/Images/react.png";
import git from "../../../UI/Images/git.png";
import node from "../../../UI/Images/nodejs.png";
import mongodb from "../../../UI/Images/mongodb.png";
import nestjs from "../../../UI/Images/nestjs.png";
import postgres from "../../../UI/Images/postgresql.png";
import redis from "../../../UI/Images/redis.png";
import elasticsearch from "../../../UI/Images/elasticsearch.png";
import k8s from "../../../UI/Images/k8s.png";
import ansible from "../../../UI/Images/ansible.svg";
import terraform from "../../../UI/Images/terraform.svg";
import githubActions from "../../../UI/Images/github-actions.png";
import distributedSystems from "../../../UI/Images/distributed-systems.png";
import systemDesign from "../../../UI/Images/system-design.png";
import databaseOptimization from "../../../UI/Images/database-optimization.png";
import devOps from "../../../UI/Images/devops.png";
import c from "../../../UI/Images/c++.png";
import docker from "../../../UI/Images/docker.png";
import ts from "../../../UI/Images/typescript.png";
import py from "../../../UI/Images/python.png";
import cloud from "../../../UI/Images/clouds.svg";
import csharp from "../../../UI/Images/csharp.svg";
import AnimateAbout from "../../../UI/Animating/AnimateAbout";
const usingNow = [
  [node, "NodeJS", "1"],
  [nestjs, "NestJS", "1"],
  [postgres, "Postgres", "1"],
  [mongodb, "Mongodb", "3"],
  [redis, "Redis", "1"],
  [elasticsearch, "Elasticsearch", "1"],
  [docker, "Docker", "4"],
  [k8s, "Kubernetes", "1"],
  [ansible, "Ansible", "1"],
  [terraform, "Terraform", "1"],
  [cloud, "Cloud Computing", "1"],
  [githubActions, "Github Actions", "1"],
];
const areasOfExpertise = [
  [distributedSystems, "Distributed Systems", "2"],
  [systemDesign, "System Design", "2"],
  [databaseOptimization, "Database Optimization", "2"],
  [devOps, "DevOps", "2"],
];
const other = [
  [csharp, "C#", "1"],
  [react, "React", "1"],
  [git, "Git", "1"],
  [py, "python", "1"],
  [ts, "Typescript", "1"],
  [c, "C++", "1"],
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
              AREAS OF EXPERTISE
            </Typography>
          </Grid>
          {areasOfExpertise.map(Data)}
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
