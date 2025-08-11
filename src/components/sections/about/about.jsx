import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutAvif, aboutWebp } from "../../../constants/assets";

const About = () => {
  const { t } = useTranslation();
  const title = t("about.title", { returnObjects: true });
  const sectionsData = t("about.sections", { returnObjects: true });
  const sections = Array.isArray(sectionsData) ? sectionsData : [];
  const cta = t("about.cta", { defaultValue: "Começar" });

  const imageClasses =
    "relative z-[1] w-full aspect-[4/3] rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.20)] ring-1 ring-black/5";

  return (
    <Motion.section
      id="about"
      className="bg-ice text-primary py-24 lg:py-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* Conteúdo principal: imagem + texto */}
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          {/* TEXTO */}
          <Motion.div
            className="w-full max-w-md text-center lg:w-1/2 lg:text-left"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif -tracking-[0.02em] text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95]">
              {title.part1}
              <br />
              {title.part2}
            </h2>

            <p className="mt-6 mx-auto max-w-md text-[1.0625rem] leading-relaxed text-primary/80 lg:mx-0">
              {t("about.lead", {
                defaultValue:
                  "Obtenha uma conta sem mensalidade e produtos inteligentes para crescer no longo prazo.",
              })}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-[0.95rem] font-medium text-ice shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none"
              >
                {cta}
              </a>
            </div>
          </Motion.div>

          {/* IMAGEM */}
          <Motion.div
            className="relative w-full max-w-[580px] lg:w-1/2 mx-auto"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <picture>
              <source srcSet={aboutAvif} type="image/avif" />
              <source srcSet={aboutWebp} type="image/webp" />
              <img
                src={aboutWebp}
                alt={t("about.image_alt", { defaultValue: "Prévia do produto" })}
                className={imageClasses}
              />
            </picture>
          </Motion.div>
        </div>

        {/* Features (3 colunas, borda no topo) */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((sec, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border-t border-black/10 pt-8"
              >
                <h3 className="text-[1.25rem] font-semibold leading-tight">
                  {sec.headline}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-primary/80">
                  {sec.text}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default About;
