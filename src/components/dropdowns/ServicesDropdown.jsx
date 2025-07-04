import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const ServicesDropdown = () => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-12 gap-y-16 gap-x-12 px-10 py-10 bg-white rounded-3xl shadow-xl border border-gray-100 text-gray-900 text-[15px]"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">Frontend</span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">React + Tailwind</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Framer Motion</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Three.js / WebGL</a></li>
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">Backend</span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Node + Express</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">MongoDB / Mongoose</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Stripe + Auth</a></li>
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">Infra & Delivery</span>
        <ul className="mt-4 space-y-2">
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Vercel / Render</a></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">S3 Upload</a> <span className="ml-2 text-xs bg-[#e4e9d3] px-2 py-0.5 rounded-full">New</span></li>
          <li><a className="text-xl hover:text-primary transition-colors" href="#">Painéis Admin</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
