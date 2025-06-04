import { motion } from 'framer-motion';
import SectionTitle from './sectionTitle';
import LuckyBlock from './luckyBlock';

const Services = () => {
  return (
    <motion.section
      id="services">
      <div className="container relative flex flex-col items-center items-center gap-y-6 top-[80px] md:bottom-[130px]">
        <SectionTitle title="SERVICES" subtitle="What I Offer" />

        <div className="w-full md:max-w-5xl md:scale-100">
          <div className="bg-gradient-to-br from-[#47667b] to-[#f8f4c4] md:bg-gradient-to-r from-[#47667b] to-[#f8f4c4] rounded-2xl px-12 pt-4 lg:py-0 text-white flex flex-col lg:flex-row items-center md:gap-8 shadow-lg h-[450px] md:min-h-[500px] overflow-visible">
            {/* Texto */}
            <div className="w-[250px] lg:w-1/2">
              <p className="uppercase text-extra-sm tracking-widest mb-2">
                One Dev. Many Flows Presents
              </p>
              <h2 className="text-xl md:text-4xl font-bold text-h3 leading-tight mb-4">
                Feels Kinda Alive, Right?
              </h2>
              <p className="text-extra-sm md:text-lg mb-6">
                Dynamic interfaces respond, adapt, and evolve in real time. They’re changing the web, making it more interactive and engaging.
              </p>
              <a
                href="/en-ca/presents"
                className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-full transition hover:bg-gray-100"
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