import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

const Hero = lazy(() => import("../components/sections/hero/hero.jsx"));
const Services = lazy(() => import("../components/sections/services/services.jsx"));
const About = lazy(() => import("../components/sections/about/about.jsx"));
const Projects = lazy(() => import("../components/sections/projects/projects.jsx"));
const CTA = lazy(() => import("../components/sections/cta/cta.jsx"));
const Skills = lazy(() => import("../components/sections/skills/skills.jsx"));

const Home = () => {
  const [showSkills, setShowSkills] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowSkills(true);
        observer.disconnect();
      }
    });
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, []);

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
      <section id="skills" ref={skillsRef}>
        {showSkills && (
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        )}
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