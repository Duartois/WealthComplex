import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./skills.scss";

import { useState, useRef } from "react";

const skills = [
  {
    title: "Frontend",
    tag: "User Interface",
    theme: "light",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    title: "Backend / API",
    tag: "Server Logic",
    theme: "dark",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "REST"],
  },
  {
    title: "Visuals & 3D",
    tag: "Creative Tech",
    theme: "light",
    stack: ["Three.js", "GLSL", "Shaders", "Fallback Video"],
  },
  {
    title: "DevTools",
    tag: "Workflow",
    theme: "dark",
    stack: ["Git", "Zod", "Hook Form", "AWS S3"],
  },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section id="Skills" className="relative section-skills bg-[#E4E8F1] text-primary">
      {/* WRAPPER EXTERNO */}
      <div className="relative h-full py-14 overflow-hidden">

        {/* GRID INTERNO */}
        <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10 overflow-hidden">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col gap-6 z-30"
          >
            <h2 className="text-h2 text-primary leading-tight">
              Tools that shape <br className="hidden md:block" /> my development flow
            </h2>
            <p className="text-services-description text-gray-900">
              Every line of code is backed by tools that empower performance,
              reliability and design precision.
            </p>
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
          </motion.div>

          {/* Slider */}
          <div className="w-full relative z-10 overflow-visible md:overflow-hidden">
            <div className="relative w-full py-10 z-0">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-bullet",
                  bulletActiveClass: "swiper-bullet-active",
                  el: ".custom-swiper-pagination",
                }}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                loop
                speed={700}
                className="z-10"
              >
                {skills.map((skill, i) => {
                  const isVisible = i === activeIndex || i === (activeIndex + 1) % skills.length;
                  return (
                    <SwiperSlide key={i}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`relative z-[10] flex flex-col justify-between
        rounded-3xl px-6 sm:px-8 py-10 min-h-[340px] max-w-[100%] mx-auto
        border transition-all duration-500 ease-in-out
        ${isVisible ? "card-shadow" : ""}
        ${skill.theme === "light"
                            ? "bg-white text-primary border-gray-200"
                            : "bg-[#282A3E] text-white border-gray-800"
                          }`}
                      >
                        <div>
                          <span className="text-[11px] uppercase tracking-widest opacity-50 mb-2 inline-block">
                            {skill.tag}
                          </span>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold">{skill.title}</h3>
                            <span className="text-lg transition-transform">→</span>
                          </div>
                          <ul className="flex flex-col gap-3 text-sm font-medium">
                            {skill.stack.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 size={16} className="mt-[2px] text-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Swiper buttons */}
              <div className="absolute -left-6 sm:-left-10 top-1/2 z-20 -translate-y-1/2 cursor-pointer custom-swiper-prev text-primary hover:text-blue-600 transition-transform hidden">
                <ChevronLeft size={28} strokeWidth={2.2} />
              </div>
              <div className="absolute -right-6 sm:-right-10 top-1/2 z-20 -translate-y-1/2 cursor-pointer custom-swiper-next text-primary hover:text-blue-600 transition-transform hidden">
                <ChevronRight size={28} strokeWidth={2.2} />
              </div>

              <div className="custom-swiper-pagination mt-10 flex justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;