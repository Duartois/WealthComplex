import { motion as Motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const LuckyBlock = lazy(() => import('../../utils/luckyblock/luckyBlock.jsx'));

const Services = () => {
  const { t } = useTranslation();
  return (
    <Motion.section id="services" className="services-section py-10  md:py-20 lg:py-32">
      <div className="container bg-ice relative flex flex-col items-center justify-center h-full">

        <div className="w-full max-w-6xl">
          <div className="bg-services rounded-2xl p-0 text-secondary flex flex-col lg:flex-row items-center justify-between lg:gap-12 shadow-lg min-h-[600px]">

            {/* Bloco de texto */}
            <div className="services-card relative flex flex-col md:items-start text-center md:text-start">
              <div>
                <p className="uppercase text-md font-normal  text-secondary-50">
                  {t('services.subtitle')}
                </p>
              </div>
              <h2 className="text-h2 md:text-h1 text-center md:text-start ws-balance">
                {t('services.title')}
              </h2>
              <p className="text-services-description md:text-lg text-center md:text-start max-w-[500px] mb-6">
               {t('services.description')}
              </p>
              <div className="flex flex-col items-center md:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  {t('services.cta')}
                </Link>
              </div>
            </div>

            {/* Bloco de mídia (vídeo, LuckyBlock ou imagem) */}
            <div className="services-three flex-1 relative w-full min-h-[500px] overflow-hidden">
              <div className=" absolute inset-0 pointer-events-none z-10">
                <Suspense fallback={null}>
                  <LuckyBlock />
                </Suspense>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Motion.section>
  );
};
export default Services;