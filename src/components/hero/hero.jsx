import { Link, useLocation } from "react-router-dom";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { arrow01, arrow02, heroImage } from "../../constants/assets";
import { leftSideVariants, rightSideVariants } from "../../constants/motion";
import LuckyBlock from "../luckyblock/luckyBlock";


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
    <section id="home" className="hero-section relative lg:min-h-screen w-full">
      <motion.div
        style={{ scale, paddingTop: paddingY, paddingBottom: paddingY }}
        className="relative lg:absolute inset-0 z-10 flex items-center lg:mt-40 bg-hero rounded-b-2xl overflow-hidden"
      >
        <div className="container hero-container flex flex-col items-center md:gap-16 lg:flex-row-reverse lg:justify-between">
          {/* Hero Lado Esquerdo */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center text-center bottom-16 lg:top-20 h-auto lg:w-[80%] lg:items-start lg:text-start"
          >
            {/* <motion.img
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            src={arrow01}
            alt="arrow"
            className="absolute right-0 hidden w-16 -translate-y-full lg:block"
          /> */}
            <div className="flex flex-col">
              <p className="uppercase text-md font-normal text-secondary-50">
                Duartois Presents
              </p>
              <h1 className="text-h1 text-wrap my-1 font-Supabold text-secondary-50">
                Bringing ideas to life frame by frame
              </h1>
              <h2 className="text-h4 text-secondary-50 mb-2">
                I’m{" "}
                <span className="text-secondary-50 text-h4 typewriter-wrapper">
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

              <p className="text-hero-description font-normal text-secondary-50 mb-1">
                Whether it’s a personal brand or a growing business, craft seamless digital experiences using the same tools behind platforms valued at $2,400M — like Netflix, Shopify, Apple, and HTC.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between gap-x-4 pt-4">
              <Link to={"/contact"} className="btn-primary font-bold min-w-[165.27px] justify-center">Contact <Send /></Link>
              <Link to={"/learn-more"} className="btn-primary-white font-bold min-w-[165.27px] justify-center">Learn More</Link>
            </div>
            <p className="text-extra-sm font-normal text-secondary mt-8">
              I'm always open to new opportunities and collaborations.
            </p>
            {/* <motion.img
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            src={arrow02}
            alt="arrow"
            className="absolute bottom-[-50px] hidden -translate-y-full lg:block w-20"
          /> */}
          </motion.div>

          {/* Hero Lado Direito */}
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center w-1/2"
          >
            {/* Placeholder de vídeo ou imagem */}
            <div className="relative w-full flex justify-center items-center">
              <img
                src={heroImage}
                alt="Falcon silhouette"
                className="hero-image
  absolute w-[100%] max-w-[500px] 
  object-contain opacity-90 z-[-1] drop-shadow-2xl
  translate-y-48 scale-[1.6]
  sm:translate-y-60 sm:scale-[1.4]
  md:w-[80%] md:max-w-[600px] md:translate-y-40 md:scale-[1.2]
  lg:w-full lg:max-w-none lg:translate-y-30 lg:scale-[1.4]
"

              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;