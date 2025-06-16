import { useState, useRef } from "react";
import { about } from "../constants/assets";
import SectionTitle from "./sectionTitle";
import { useClickOutside } from "../hook";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutContent = (
    <blockquote className="relative pl-6 border-l-4 border-primary text-primary-50 italic fancy-quote whitespace-pre-wrap">
      <h4 className="text-h5 text-primary mb-4 z-20">
        Matheus Duarte G.
      </h4>
      <p className="text-sm md:text-lg font-normal text-primary-50">
        As a skilled web developer and designer, I've honed my craft since 2022, focusing on delivering top-notch digital solutions. My expertise lies in managing end-to-end website development projects, from inception to delivery. I specialize in creating user-friendly websites tailored to specific needs, ensuring seamless functionality across platforms and industries. With a broad skill set and commitment to quality, I aim to be a valuable addition to any web development team.
      </p>
    </blockquote>
  );
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setShowModal(false));

  return (
    <section id="about" className="mt-24">
      <div className="container relative flex flex-col items-center gap-y-9 py-12 md:py-24 h-full">
        <SectionTitle
          title="About Me"
          subtitle="A brief introduction about myself."
        />
        <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left Side */}
          <div className="flex w-full justify-center md:justify-start md:w-5/12">
            <img
              src={about}
              alt="Matheus Duarte"
              className="aspect-square w-3/4 md:w-full max-w-[450px] rounded-xl"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center gap-y-7 text-center md:w-1/2 md:items-end md:text-start">
            {/* Mobile: botão para abrir modal */}
            <button
              onClick={() => setShowModal(true)}
              className="md:hidden btn-primary w-fit text-lg font-semibold"
            >
              see more
            </button>

            {/* Desktop: conteúdo direto */}
            <div className="hidden md:block w-full h-full text-left">{aboutContent}</div>
          </div>
        </div>
      </div>

      {/* Modal para mobile */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4 md:hidden">
          <div ref={modalRef} className="bg-white text-gray-90 rounded-xl p-4 w-[80%] max-w-sm relative shadow-lg z-10">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-primary"
            >
              &times;
            </button>
            <div className="fancy-quote modal-quote relative pl-6 border-l-4 border-primary text-primary-50 italic whitespace-pre-wrap z-0">
              {aboutContent.props.children}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
