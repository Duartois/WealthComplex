import { motion as Motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const ResourcesDropdown = () => {
  const { t } = useTranslation();
  const projects = t('resourcesDropdown.projects', { returnObjects: true });
  const experiments = t('resourcesDropdown.experiments', { returnObjects: true });
  const coming = t('resourcesDropdown.coming', { returnObjects: true });
  const newLabel = t('resourcesDropdown.new');

  return (
    <Motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-12 gap-y-16 gap-x-12 px-10 py-10 bg-white rounded-3xl shadow-xl border border-gray-100 text-gray-900 text-[15px]"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">{t('resourcesDropdown.projectsTitle')}</span>
        <ul className="mt-4 space-y-2">
          {projects.map((item, i) => (
            <li key={i}><a className="text-xl hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">{t('resourcesDropdown.experimentsTitle')}</span>
        <ul className="mt-4 space-y-2">
          {experiments.map((item, i) => (
            <li key={i} className="flex items-center">
              <a className="text-xl hover:text-primary transition-colors" href="#">{item}</a>
              {i === 2 && <span className="ml-2 text-xs bg-[#e4e9d3] px-2 py-0.5 rounded-full">{newLabel}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">{t('resourcesDropdown.comingTitle')}</span>
        <ul className="mt-4 space-y-2">
          {coming.map((item, i) => (
            <li key={i}><a className="text-xl hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </Motion.div>
  );
};

export default ResourcesDropdown;