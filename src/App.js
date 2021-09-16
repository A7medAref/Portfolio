import React, { useState } from "react";
import "./UI/Utilities/Normalize.css";
import "./UI/Utilities/Animations.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import { CircularProgress, Grid } from "@material-ui/core";
import CircularBar from "./UI/Progress/CircularBar";
const About = React.lazy(() => import("./Pages/about/About"));
const ContactPage = React.lazy(() => import("./Pages/contact/contact"));
const ProjectPage = React.lazy(() =>
  import("./Pages/ProjectsPage/ProjectsPage")
);
// const WebsitePage = React.lazy(_=>import("./pages/website/website"));
function App() {
  const [value, setValue] = useState(0);
  const feedBack = (
    <Grid
      container
      style={{ height: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <CircularBar />
    </Grid>
  );
  return (
    <>
      <Header value={value} setValue={setValue} />
      <React.Suspense fallback={feedBack}>
        <Switch>
          <Route path="/" exact>
            <Home setValue={setValue} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/contact">
            <ContactPage setValue={setValue} />
          </Route>
        </Switch>
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;
