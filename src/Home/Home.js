import Hero from "./Hero/Hero";
import AboutHome from "./About/About";
import ContactHome from "./Contact/ContactHome";
import ProjectsHome from "./Projects/Project";
export default function Home({ setValue }) {
  return (
    <>
      <Hero />
      <AboutHome setValue={setValue} />
      <ProjectsHome setValue={setValue} />
      <ContactHome setValue={setValue} />
    </>
  );
}
