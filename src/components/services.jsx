import { motion } from 'framer-motion';
import SectionTitle from './sectionTitle';

const Services = () => {
  return (
    <motion.section
      id="services"
      className='mt-24'>
      <div className="container relative flex flex-col items-center items-center gap-y-6 md:top-[60px]">
        <SectionTitle title="SERVICES" subtitle="What I Offer" />

        <div className="w-full md:max-w-5xl md:scale-100">
          <div className="bg-gradient-to-br from-[#47667b] to-[#f8f4c4] rounded-2xl p-8 text-white flex flex-col lg:flex-row items-center gap-8 shadow-lg min-h-[500px]">
            {/* Texto */}
            <div className="w-full lg:w-1/2">
              <p className="uppercase text-sm tracking-widest mb-2">
                One Dev. Many Flows Presents
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-h3 leading-tight mb-4">
                Feels Kinda Alive, Right?
              </h2>
              <p className="text-sm md:text-lg mb-6">
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
            <div className="w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl bg-black opacity-60 flex items-center justify-center">
              <span className="text-white text-sm">Mídia aqui</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;