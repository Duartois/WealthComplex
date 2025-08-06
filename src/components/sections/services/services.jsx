import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const LuckyBlock = lazy(() => import('../../utils/luckyblock/luckyBlock.jsx'));

const Services = () => {
  return (
    <motion.section id="services" className="services-section py-10  md:py-20 lg:py-32">
      <div className="container bg-ice relative flex flex-col items-center justify-center h-full">

        <div className="w-full max-w-6xl">
          <div className="bg-services rounded-2xl p-0 text-secondary flex flex-col lg:flex-row items-center justify-between lg:gap-12 shadow-lg min-h-[600px]">

            {/* Bloco de texto */}
            <div className="services-card relative flex flex-col items-start text-left">
              <div>
                <p className="uppercase text-md font-normal text-secondary-50">
                  get in touch
                </p>
              </div>
              <h2 className="text-h2 md:text-h1 ws-balance">
                Feels kinda alive, right?
              </h2>
              <p className="text-services-description md:text-lg max-w-[500px] mb-6">
               Dynamic interfaces respond, adapt, and evolve in real time. They’re changing the web, making it more interactive and engaging.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make a free request
                </a>
                <a
                  href="/learn-more"
                  className="btn-secondary-white"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Bloco de mídia (vídeo, LuckyBlock ou imagem) */}
            <div className="services-three flex-1 relative w-full min-h-[500px] overflow-hidden">
              <div className=" absolute inset-0 scale-100 pointer-events-none z-10">
                <Suspense fallback={null}>
                  <LuckyBlock />
                </Suspense>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};
export default Services;
