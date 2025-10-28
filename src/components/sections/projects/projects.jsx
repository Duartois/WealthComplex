import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { motion as Motion, AnimatePresence } from "framer-motion";
import "./projects.scss";
import { project01, project02, project03, project04, project05, project06 } from "../../../constants/assets";

const projects = [
  { id: 1, title: "WealthComplex Invest", category: "Automated investing", img: project01, link: "https://www.wealthcomplex.com/en-ca/invest" },
  { id: 2, title: "WealthComplex Cash", category: "Save & spend", img: project02, link: "https://www.wealthcomplex.com/en-ca/cash" },
  { id: 3, title: "WealthComplex Tax", category: "File for free", img: project03, link: "https://www.wealthcomplex.com/en-ca/tax" },
  { id: 4, title: "WealthComplex Crypto", category: "Regulated trading", img: project04, link: "https://www.wealthcomplex.com/en-ca/crypto" },
  { id: 5, title: "Private Credit", category: "Alternative investments", img: project05, link: "https://www.wealthcomplex.com/en-ca/private-credit" },
  { id: 6, title: "Stories & Magazine", category: "Money inspiration", img: project06, link: "https://www.wealthcomplex.com/en-ca/magazine" },
];

const Projects = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const section = sectionRef.current;

    // Mobile check
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile || !cursor || !section) return;

    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    const speed = 0.15;

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const showCursor = () => {
      document.body.classList.add("cursor-active");
      cursor.style.display = "block";
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      document.body.classList.remove("cursor-active");
      cursor.style.opacity = "0";
      cursor.style.display = "none";
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseenter", showCursor, { passive: true });
    section.addEventListener("mouseleave", hideCursor, { passive: true });
    animate();

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", showCursor);
      section.removeEventListener("mouseleave", hideCursor);
      cursor.style.opacity = "0";
      cursor.classList.add("hidden");
    };
  }, []);


  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-section min-h-screen py-24 px-4 sm:px-6 bg-[#282A3E] text-secondary relative"
    >
      <div className="w-full max-w-[1440px] mx-auto mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative w-full h-full rounded-tr-[48px] overflow-hidden hidden md:block">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <Motion.img
                key={projects[activeIndex].id}
                src={projects[activeIndex].img}
                alt={projects[activeIndex].title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-h2 text-secondary-50 tracking-wide">{t('projects.title')}</h2>
            <span className="text-md text-white">{projects.length}</span>
          </div>

          <Motion.hr
            className="border-t border-white/40 mb-6 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
          />

          <ul className="divide-y divide-white/20">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <li key={project.id}>
                  <a
                    href={project.link}
                    className="flex justify-between items-center py-4 cursor-pointer group"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className="flex items-center gap-x-2">
                      <div className="relative flex items-center gap-x-2">
                        <Motion.span
                          initial={false}
                          animate={{
                            x: isActive ? 0 : -12,
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1.2 : 1,
                          }}
                          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                          className="text-white inline-block"
                        >
                          →
                        </Motion.span>
                        <Motion.h4
                          initial={false}
                          animate={{
                            x: isActive ? 0 : -10,
                            opacity: 1,
                            scale: isActive ? 1.05 : 1,
                          }}
                          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                          className={`text-md font-medium tracking-wide ${isActive ? 'text-white' : 'text-secondary-50'}`}
                        >
                          {project.title}
                        </Motion.h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2 transition-all duration-300">
                      {isActive && <span className="w-3 h-3 bg-white rounded-full"></span>}
                      <p className="text-sm text-secondary-50 group-hover:text-white transition-colors">
                        {project.category}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {typeof window !== 'undefined' && window.innerWidth >= 768 && (
        <div id="custom-cursor" className="cursor"></div>
      )}
    </section>
  );
};

export default Projects;