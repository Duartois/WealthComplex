import { Link } from "react-router-dom";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import { Send } from "lucide-react";
import { arrow01, arrow02 } from "../constants/assets";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import Spline from "@splinetool/react-spline";

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
      className="flex sm:min-h-screen items-center bg-bege rounded-b-2xl"
    >
      <div className="container flex flex-col-reverse items-center justify-between gap-y-12 md:flex-row sm:top-[-100px]">
        <motion.div
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center gap-y-7 text-center md:w-1/2 md:items-start md:text-start"
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
            <h1 className="text-h4 font-Supabold text-green-90">
              Hi, I’m{" "}
              <span className="text-inherit text-h3 font-bold text-secondary">
                Matheus Duarte
              </span>
            </h1>
            <h2 className="text-h2 text-green-90">
              I’m{" "}
              <span className="text-primary-50 text-h2 typewriter-wrapper">
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
            <h3 className="text-h1 font-Supabold text-green-90">
              Do you need some help?
            </h3>
            <p className="text-lg font-normal text-primary-50">
              I'm an independent creative developer from Brasil, South America.
            </p>
          </div>
          <div className="flex justify-between gap-x-4">
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
            className="absolute bottom-[-150px] hidden -translate-y-full lg:block w-20"
          />
        </motion.div>
        
        {/* Hero Lado Direito */}
        <motion.div
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex h-full justify-end md:w-1/2"
        >
          {/* Placeholder de vídeo ou imagem */}
        <div className="w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl bg-black opacity-60 flex items-center justify-center">
              <span className="text-white text-sm">Mídia aqui</span>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;