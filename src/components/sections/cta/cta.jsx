import { motion as Motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "./cta.scss"; // Assuming you have a separate CSS file for styles

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section id="cta" className="cta-section flex bg-hero py-[100px] px-4">
      <div className="container flex flex-col items-center justify-center text-center">
        <Motion.h2
          className="text-h1 ws-balance text-secondary-50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t('cta.title')}
        </Motion.h2>

        <Motion.p
          className="text-services-description text-secondary-50 mb-8 max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {t('cta.description')}
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link to="/contact" className="btn-primary">
            {t('cta.button')}
          </Link>
        </Motion.div>
      </div>
    </section>
  );
};

export default CTA;