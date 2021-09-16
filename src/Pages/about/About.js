// import AboutHome from "../../Home/About/About";

import { useEffect } from "react";
import AboutHero from "./AboutHero/AboutHero";
import Status from "./LikeHome/Status";

import Skills from "./Skills/Skills";

export default function About() {
  useEffect(() => {
    window.scrollBy(0, -1000);
  }, []);
  return (
    <>
      <AboutHero />
      <Status />
      <Skills />
    </>
  );
}
