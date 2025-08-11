import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutAvif, aboutWebp } from "../../../constants/assets";

const About = () => {
  const { t } = useTranslation();
  const title = t("about.title", { returnObjects: true });
  const sections = t("about.sections", { returnObjects: true });
  const cta = t("about.cta", { defaultValue: "Começar" });

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
        {/* GRID ancorado à direita: IMAGEM (esq) + TEXTO (dir) */}
        <div
          className="
            grid grid-cols-1 items-center justify-between
            lg:grid-cols-[minmax(0,400px)_minmax(0,720px)]
          "
        >
          {/* IMAGEM (coluna esquerda) */}
          <Motion.div
            className="order-1 lg:order-1 relative w-full max-w-[680px] lg:ml-auto"
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
                className="relative z-[1] w-full rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.20)] ring-1 ring-black/5"
              />
            </picture>
          </Motion.div>

          {/* TEXTO (coluna direita) */}
          <Motion.div
            className="order-2 lg:order-2 text-right"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif -tracking-[0.02em] text-[clamp(2.6rem,7.6vw,5rem)] leading-[0.95]">
              {title.part1}
              <br className="hidden md:block" />
              {title.part2}
            </h2>

            <p className="mt-6 ml-auto max-w-xl text-[1.0625rem] leading-relaxed text-primary/80">
              {t("about.lead", {
                defaultValue:
                  "Obtenha uma conta sem mensalidade e produtos inteligentes para crescer no longo prazo.",
              })}
            </p>

            <div className="mt-8 flex justify-end">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-[0.95rem] font-medium text-ice shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none"
              >
                {cta}
              </a>
            </div>
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
