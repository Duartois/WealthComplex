import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/sections/hero/hero.jsx"));
const Services = lazy(() => import("../components/sections/services/services.jsx"));
const About = lazy(() => import("../components/sections/about/about.jsx"));
const Projects = lazy(() => import("../components/sections/projects/projects.jsx"));
const CTA = lazy(() => import("../components/sections/cta/cta.jsx"));
const Skills = lazy(() => import("../components/sections/skills/skills.jsx"));

const Home = () => {

  return (
    <main>
      <section id="hero">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
      </section>
      <section id="services">
        <Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>
      </section>
      <section id="about">
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </section>
      <section id="skills">
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
      </section>
      <section id="projects">
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </section>
      <section id="cta">
        <Suspense fallback={<div>Loading...</div>}>
          <CTA />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;