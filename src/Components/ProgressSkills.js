/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Progress from "./Progress";
export default function ProgressSkills({ title, progress, className }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const clearProgress = setInterval(() => {
      setCounter((preCounter) => {
        if (preCounter * 1 >= progress * 1) {
          clearInterval(clearProgress);
          return preCounter;
        }
        return preCounter + 1;
      });
      if (counter * 1 === progress * 1) clearInterval(clearProgress);
    }, 15);
  }, []);
  return (
    <Grid container direction="column" className={className}>
      <Typography variant="h5" gutterBottom>
        {title} {counter}%
      </Typography>
      <Progress width={progress}></Progress>
    </Grid>
  );
}
