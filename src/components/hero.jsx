import { Link, useLocation } from "react-router-dom";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { arrow01, arrow02 } from "../constants/assets";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import LuckyBlock from "./luckyBlock";


const Hero = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.hash === "#home" || location.hash === "" || location.pathname === "/";


  const scale = isHome
    ? useSpring(useTransform(scrollY, [0, 300], [1, 0.94]), {
      stiffness: 120,
      damping: 20,
    })
    : 0.94;

  const paddingY = isHome
    ? useSpring(useTransform(scrollY, [0, 300], [120, 60]), {
      stiffness: 120,
      damping: 20,
    })
    : 60;


  return (
    <section id="home" className="section w-full relative">
  <motion.div
    style={{ scale, paddingTop: paddingY, paddingBottom: paddingY }}
    className="absolute inset-0 z-10 flex items-center  bg-hero rounded-b-2xl overflow-hidden"
  >
      <div className="container flex flex-col-reverse items-center md:justify-between md:flex-row h-[200px] md:h-[800px]">
        
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center text-center max-w-[600px] w-[400px] md:w-1/2 md:items-start md:text-start md:h-[400px]"
        >
          <motion.img
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            src={arrow01}
            alt="arrow"
            className="absolute right-0 hidden w-16 -translate-y-full lg:block"
          />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-normal md:hidden text-secondary-50 mb-20">
                One Dev. Many Flows Presents
              </p>
            <h1 className="exs:text-h3 text-xxl font-Supabold text-secondary-50">
              Hi, I’m{" "}
              <span className="exs:text-h3 text-xxl font-bold text-[#fcfdff] text-shadow-lg">
                Matheus Duarte
              </span>
            </h1>
            <h2 className="exs:text-h2 text-xxl text-secondary-50">
              I’m{" "}
              <span className="text-secondary-50 exs:text-h2 text-xxl typewriter-wrapper">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1300}
                  deleteSpeed={25}
                  typeSpeed={80}
                  loop={0}
                  words={[
                    "Front-End Developer",
                    "Back-End Developer",
                    "Full-Stack Developer",
                    "Web Developer",
                    "Creative Developer",
                    "Web Designer",
                  ]}
                />
              </span>
            </h2>
            <h3 className="exs:text-h1 text-xxl font-Supabold text-secondary-50 mb-1">
              Do you need some help?
            </h3>
            <p className="text-lg font-normal text-secondary-50 mb-1">
              I'm an independent creative developer from Brasil, South America.
            </p>
          </div>
          <div className="flex justify-between gap-x-4 pt-4">
            <Link to={"/contact"} className="btn-primary w-fit">
              Contact <Send />
            </Link>
            <Link to={"/learn-more"} className="btn-secondary font-bold w-fit">
              Learn More
            </Link>
          </div>
          <motion.img
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            src={arrow02}
            alt="arrow"
            className="absolute bottom-[-50px] hidden -translate-y-full lg:block w-20"
          />
        </motion.div>

        {/* Hero Lado Direito */}
        <motion.div
          variants={rightSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex h-full justify-end w-full md:w-1/2 md:h-full"
        >
          {/* Placeholder de vídeo ou imagem */}
          <div className="relative w-full h-[35vh] hidden md:block md:h-[600px] top-[50px]">
            <div className="absolute inset-0 z-20 pointer-events-none lg:scale-100">
              <LuckyBlock
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
};

export default Hero;