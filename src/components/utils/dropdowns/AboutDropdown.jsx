import { motion as Motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const AboutDropdown = () => {
  const { t } = useTranslation();
  const stack = t('aboutDropdown.stack', { returnObjects: true });
  const profile = t('aboutDropdown.profile', { returnObjects: true });
  const mission = t('aboutDropdown.mission', { returnObjects: true });

  return (
    <Motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-12 gap-y-16 gap-x-12 px-10 py-10 bg-white rounded-3xl shadow-xl border border-gray-100 text-gray-900 text-[15px]"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">
          {t('aboutDropdown.stackTitle')}
        </span>
        <ul className="mt-4 space-y-2">
          {stack.map((item, i) => (
            <li key={i}><a className="text-xl hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">
          {t('aboutDropdown.profileTitle')}
        </span>
        <ul className="mt-4 space-y-2">
          {profile.map((item, i) => (
            <li key={i}><a className="text-xl hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-4">
        <span className="text-sm md:text-base uppercase tracking-wide text-primary-50 font-semibold">
          {t('aboutDropdown.missionTitle')}
        </span>
        <ul className="mt-4 space-y-2">
          {mission.map((item, i) => (
            <li key={i}><a className="text-xl hover:text-primary transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </Motion.div>
  );
};

export default AboutDropdown;
