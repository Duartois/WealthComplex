import { Link, useLocation } from "react-router-dom";
import { motion as Motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Send } from "lucide-react";
import { heroImageWebp } from "../../../constants/assets.js";
import { leftSideVariants, rightSideVariants } from "../../../constants/motion.js";
import { useResize } from "../../../hook/use-resize.jsx";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const words = t('hero.words', { returnObjects: true });
  const location = useLocation();
  const isHome = location.hash === ".home" || location.hash === "" || location.pathname === "/";

  const { resizedX } = useResize({ targetX: 768 });
  const isMobile = !resizedX;
  const scaleTransform = useTransform(scrollY, [0, 300], [1, 0.94]);
  const paddingTransform = useTransform(scrollY, [0, 300], [120, 60]);

  const scaleSpring = useSpring(scaleTransform, {
    stiffness: 120,
    damping: 20,
  });
  const paddingSpring = useSpring(paddingTransform, {
    stiffness: 120,
    damping: 20,
  });

  const scale = isHome ? scaleSpring : 0.94;
  const paddingY = isHome ? paddingSpring : 60;

  return (
    <section
      id="home"
      className="hero-section relative min-h-[100vh] w-full pointer-events-none"
    >
      <Motion.div
         style={{
          scale: isMobile ? 1 : scale,
          paddingTop: isMobile ? 60 : paddingY,
          paddingBottom: isMobile ? 60 : paddingY,
        }}
        className="relative pointer-events-auto lg:absolute inset-0 z-10 flex items-center lg:mt-36 bg-hero rounded-b-2xl overflow-hidden"
      >
        <div className="container hero-container flex flex-col items-center md:gap-16 lg:flex-row-reverse lg:justify-between">
          {/* Hero Lado Direito */}
          <Motion.div
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center text-center text-balance bottom-4 lg:top-20 h-auto lg:w-[80%] lg:items-start lg:text-start"
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
                {t('hero.presents')}
              </p>
              <h1 className="text-h1 text-wrap my-1 font-Supabold text-secondary-50">
                 {t('hero.headline')}
              </h1>
              <h2 className="text-h4 text-secondary-50 mb-2">
                {t('hero.iam')} {" "}
                <span className="text-secondary-50 text-h4 typewriter-wrapper">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1300}
                    deleteSpeed={25}
                    typeSpeed={80}
                    loop={0}
                    words={words}
                  />
                </span>
              </h2>

              <p className="text-hero-description text-balance font-normal text-secondary-50 mb-1">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-col gap-y-4 items-center md:flex-row sm:justify-between gap-x-4 pt-4">
              <Link to={"/contact"} className="btn-primary font-bold min-w-[165.27px] justify-center">{t('hero.contact')} <Send /></Link>
              <Link
                to={"/learn-more"}
                className="btn-primary-white font-bold min-w-[165.27px] justify-center"
              >
                {t('common.learnMoreAboutWork')}
              </Link>
            </div>
            <p className="text-extra-sm  text-balance font-normal text-secondary mt-8">
             {t('hero.footnote')}
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
          </Motion.div>

          {/* Hero Lado Esquerdo */}
          <Motion.div
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center w-1/2"
          >
            {/* Placeholder de vídeo ou imagem */}
            <div className="relative w-full flex justify-center items-center">
              <picture>
                <source srcSet={heroImageWebp} type="image/webp" />
                <img
                  src={heroImageWebp}
                  srcSet={`${heroImageWebp} 640w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  width="640"
                  height="972"
                  fetchPriority="high"
                  alt="Falcon silhouette"
                  className="relative flex z-[-1] bottom-10 sm:bottom-20 md:bottom-44 lg:bottom-0 lg:mt-60 lg:max-w-[800px] lg:w-[120%] lg:right-28"
                />
              </picture>
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;