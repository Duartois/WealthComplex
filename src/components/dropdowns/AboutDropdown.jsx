import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const AboutDropdown = () => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-12 gap-y-16 gap-x-12 px-10 py-10 bg-white rounded-3xl shadow-xl border border-gray-100 text-gray-900 text-[15px]"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">
          Stack
        </span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">JavaScript (ESNext)</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">React + Tailwind</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Three.js e WebGL</a></li>
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">
          Perfil
        </span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Dev criativo e estratégico</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Visual-first UI builder</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Freelancer em transição</a></li>
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">
          Missão
        </span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Elevar o padrão de design web</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Colaborar com equipes de produto</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Entregar projetos memoráveis</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutDropdown;
