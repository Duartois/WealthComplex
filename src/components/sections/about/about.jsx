import { motion as Motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { aboutAvif, aboutWebp } from "../../../constants/assets";

const About = () => {
  const { t } = useTranslation();
  const title = t('about.title', { returnObjects: true });
  const sections = t('about.sections', { returnObjects: true });

  return (
    <Motion.section
      id="about"
      className="py-20 lg:py-36 bg-white text-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Imagem + legenda */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <picture>
            <source srcSet={aboutAvif} type="image/avif" />
            <source srcSet={aboutWebp} type="image/webp" />
            <img
              src={aboutWebp}
              srcSet={`${aboutWebp} 384w`}
              sizes="384px"
              width="384"
              height="384"
              alt="Matheus Duarte"
              className="w-96 h-96 object-cover rounded-full shadow-lg"
            />
          </picture>
          <p className="text-extra-sm text-gray-500 mt-4 tracking-wide uppercase text-center">
             {t('about.subtitle')}
          </p>
        </Motion.div>

        {/* Texto */}
        <Motion.div
          className="flex flex-col gap-y-8 lg:pr-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 text-balance leading-tight text-primary">
            {title.part1} <br className="hidden md:block" />
            {title.part2}
          </h2>

          <div className="space-y-6 text-primary text-services-description">
            {sections.map((sec, i) => (
              <div key={i}>
                <h3 className="text-headline font-semibold text-primary mb-1">
                  {sec.headline}
                </h3>
                <p>{sec.text}</p>
              </div>
            ))}
</div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default About;