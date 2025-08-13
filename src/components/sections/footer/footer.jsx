import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ChevronUp, Github, Linkedin, Instagram } from "lucide-react";
import "./footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper bg-ice text-primary relative border-t border-gray-30">
      {/* Conteúdo */}
      <div className="footer-inner container mx-auto px-6 py-[80px] flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
        {/* Esquerda */}
        <div className="space-y-6 max-w-md">
          <p className="text-sm uppercase tracking-widest text-gray-80">
            © {new Date().getFullYear()} Matheus Duarte
          </p>
          <p className="text-md text-gray-90 leading-relaxed">
            {t('footer.description')}
          </p>

          {/* Socials */}
          <div className="flex gap-6 items-center pt-2">
            <a href="https://github.com/Duartois" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <nav className="footer-nav flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-3 text-lg font-medium">
          <Link to="/about" className="footer-link footer-hover-underline-animation left">{t('nav.about')}</Link>
          <Link to="/services" className="footer-link footer-hover-underline-animation left">{t('nav.services')}</Link>
          <Link to="/projects" className="footer-link footer-hover-underline-animation left">{t('nav.projects')}</Link>
          <Link to="/contact" className="footer-link footer-hover-underline-animation left">{t('nav.contact')}</Link>
        </nav>
      </div>

      {/* Scroll top */}
      <button
        className="scroll-top-btn hidden md:flex border-t-2 border-sky-950 bg-ice items-center justify-center w-12 h-12 rounded-full shadow-lg hover:bg-ice transition-colors duration-300"
        onClick={scrollToTop}
        aria-label={t('footer.scrollTop')}
      >
        <div className="scroll-circle border-t-2 border-sky-950 bg-ice flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300">
          <ChevronUp size={18} />
        </div>
      </button>
    </footer>
  );
};

export default Footer;