import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const ResourcesDropdown = () => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-12 gap-y-16 gap-x-12 px-10 py-10 bg-white rounded-3xl shadow-xl border border-gray-100 text-gray-900 text-[15px]"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">Projetos</span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Portfólio animado</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Dashboard com S3</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Sistema CMS</a></li>
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">Experimentos</span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">HelloMonday Preloader</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Cropper.js com máscara</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Menu animado</a> <span className="ml-2 text-xs bg-[#e4e9d3] px-2 py-0.5 rounded-full">New</span></li>
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">Em breve</span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Clone Apple</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Stripe Checkout</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">WebGL Landing</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResourcesDropdown;
