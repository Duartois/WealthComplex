import { Link } from "react-router-dom";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import { Send } from "lucide-react";
import { arrow01, arrow02 } from "../constants/assets";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import Spline from "@splinetool/react-spline";
import LuckyBlock from "./luckyBlock";

const Hero = () => {
  const { scrollY } = useScroll();

  // Transforma o scrollY global (em pixels) em valores visuais
  const rawScale = useTransform(scrollY, [0, 300], [1, 0.94]);
  const rawPadding = useTransform(scrollY, [0, 300], [120, 60]);

  // Anima suavemente com mola
  const scale = useSpring(rawScale, { stiffness: 120, damping: 20 });
  const paddingY = useSpring(rawPadding, { stiffness: 120, damping: 20 });

  return (
    <motion.section
      id="home"
      style={{ scale, paddingTop: paddingY, paddingBottom: paddingY }}
      className="flex items-center bg-bege md:bg-gradient-to-l from-[#47667b] via-[#d5e0b5] to-[#f8f4c4] rounded-b-2xl w:1/2 md:w:full"
    >
      <div className="container flex flex-col-reverse items-center md:justify-between md:flex-row h-[400px] es:h-[420px] sm:h-[400px] md:h-[800px]">
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center text-center max-w-[600px] w-full md:w-1/2 md:items-start md:text-start md:h-[400px]"
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
            <h1 className="es:text-h3 text-xxl font-Supabold text-green-90">
              Hi, I’m{" "}
              <span className="text-inherit es:text-h3 text-xxl font-bold text-secondary">
                Matheus Duarte
              </span>
            </h1>
            <h2 className="es:text-h2 text-xxl text-green-90">
              I’m{" "}
              <span className="text-primary-50 es:text-h2 text-xxl typewriter-wrapper">
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
            <h3 className="es:text-h1 text-xxl font-Supabold text-green-90 mb-1">
              Do you need some help?
            </h3>
            <p className="text-lg es:text-xl font-normal text-primary-50 mb-1">
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
          <div className="relative w-full h-[35vh] md:h-[600px] top-[50px]">
            <div className="absolute inset-0 z-20 pointer-events-none lg:scale-100">
              <LuckyBlock
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;