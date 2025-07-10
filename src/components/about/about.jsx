import { motion } from "framer-motion";
import { about } from "../../constants/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 lg:py-36 bg-white text-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Imagem + legenda */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start"
        >
          <img
            src={about}
            alt="Matheus Duarte"
            className="w-96 h-96 object-cover rounded-full shadow-lg"
          />
          <p className="text-extra-sm text-gray-500 mt-4 tracking-wide uppercase text-center lg:text-left">
            MATHEUS DUARTE, FULL-STACK DEVELOPER, UI/UX SPECIALIST
          </p>
        </motion.div>

        {/* Texto */}
        <motion.div
          className="flex flex-col gap-y-8 lg:pr-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 text-balance leading-tight text-primary">
            Meeting your <br className="hidden md:block" />
            digital expectations
          </h2>

          <div className="space-y-6 text-primary text-services-description">
            <div>
              <h4 className="text-headline font-semibold text-primary mb-1">
                Bridging creativity and code
              </h4>
              <p>
                I’m a full-stack developer passionate about building dynamic,
                responsive, and accessible web experiences — always with a sharp
                eye for design and performance.
              </p>
            </div>

            <div>
              <h4 className="text-headline font-semibold text-primary mb-1">
                Working with impact
              </h4>
              <p>
                From landing pages to complex platforms, I build scalable
                solutions that prioritize usability, seamless API integration,
                and a refined user experience.
              </p>
            </div>

            <div>
              <h4 className="text-headline font-semibold text-primary mb-1">
                Let’s build something great
              </h4>
              <p>
                Open to new projects and collaborations. Whether it’s frontend,
                backend or UI direction — I bring dedication and polish to every
                line of code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
