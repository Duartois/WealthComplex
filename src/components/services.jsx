import { motion } from 'framer-motion';
import SectionTitle from './sectionTitle';
import LuckyBlock from './luckyBlock';

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-10"
    >
      <div className="container relative flex flex-col items-center gap-4 h-full">

        <SectionTitle title="SERVICES" subtitle="What I Offer" />

        <div className="w-full md:max-w-5xl md:scale-100">
          <div className="bg-gradient-to-br from-[#6c788e] to-[#cfd5e1] rounded-2xl px-12 pt-4 lg:py-0 text-white flex flex-col lg:flex-row items-center md:gap-8 shadow-lg h-[450px] md:min-h-[500px]">
            {/* Texto */}
            <div className="w-[250px] sm:w-[350px] lg:w-1/2">
              <p className="uppercase text-extra-sm tracking-widest mb-2">
                One Dev. Many Flows Presents
              </p>
              <h2 className="text-xxl md:text-4xl font-bold text-h3 leading-tight mb-4">
                Feels Kinda Alive, Right?
              </h2>
              <p className="text-extra-sm md:text-lg mb-6">
                Dynamic interfaces respond, adapt, and evolve in real time. They’re changing the web, making it more interactive and engaging.
              </p>
              <a
                href="/en-ca/presents"
                className="inline-block btn-secondary font-bold w-fit"
              >
                Learn More
              </a>
            </div>

            {/* Placeholder de vídeo ou imagem */}
            <div className="w-full lg:w-1/2 h-60 lg:h-96 relative overflow-visible">
              <div className="absolute inset-0 z-20 pointer-events-none md:h-[30vh] lg:h-[60vh] top-[-30px] md:top-[-100px] lg:top-0 xl:top-[-100px]">
                <LuckyBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;