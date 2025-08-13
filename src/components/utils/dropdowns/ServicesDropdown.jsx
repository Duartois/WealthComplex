import { motion as Motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const ServicesDropdown = () => {
  const { t } = useTranslation();
  const frontend = t('servicesDropdown.frontend', { returnObjects: true });
  const backend = t('servicesDropdown.backend', { returnObjects: true });
  const infra = t('servicesDropdown.infra', { returnObjects: true });
  const newLabel = t('servicesDropdown.new');

  return (
    <Motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-full grid grid-cols-12 gap-y-8 md:gap-y-16 gap-x-0 md:gap-x-12 px-6 py-8 md:px-10 md:py-10 bg-white rounded-3xl shadow-xl border border-gray-100 text-gray-900 text-[15px]"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">{t('servicesDropdown.frontendTitle')}</span>
        <ul className="mt-4 space-y-2">
          {frontend.map((item, i) => (
            <li key={i}><a className="block text-xl break-words hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">{t('servicesDropdown.backendTitle')}</span>
        <ul className="mt-4 space-y-2">
          {backend.map((item, i) => (
            <li key={i}><a className="block text-xl break-words hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">{t('servicesDropdown.infraTitle')}</span>
        <ul className="mt-4 space-y-2">
          {infra.map((item, i) => (
            <li key={i} className="flex items-center">
              <a className="block text-xl break-words hover:text-primary transition-colors" href="#">{item}</a>
              {i === 1 && <span className="ml-2 text-xs bg-[#d3e3e9] px-2 py-0.5 rounded-full">{newLabel}</span>}
            </li>
          ))}
        </ul>
      </div>
    </Motion.div>
  );
};

export default ServicesDropdown;