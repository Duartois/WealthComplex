import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { About, CTA, Hero, Services, Projects } from "../components";

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
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="skills" ref={skillsRef}>
        {showSkills && (
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        )}
      </section>
      <section id="projects"><Projects /></section>
      <section id="cta"><CTA /></section>
    </main>
  );
};

export default Home;