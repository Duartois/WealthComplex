import { useEffect, useState } from "react";
const { motion: Motion, AnimatePresence } = await import('framer-motion');
import { useTranslation } from 'react-i18next';

const sections = [
  { id: "hero", label: "home", theme: "dark" },
  { id: "services", label: "services", theme: "light" },
  { id: "about", label: "about", theme: "light" },
  { id: "skills", label: "skills", theme: "light" },
  { id: "cta", label: "contact", theme: "dark" },
];

const SectionNav = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || sectionElements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const { id } = visible[0].target;
          const index = sections.findIndex((s) => s.id === id);
          if (index !== -1) {
            setActiveIndex(index);
            setTheme(sections[index].theme);
          }
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: [0, 0.5],
     },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";
  const baseColor = isDark ? "#ffffff" : "#282A3E";
  const activeBg = isDark ? "#ffffff" : "#282A3E";

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-[80]"
      aria-label="Scroll navigation"
    >
      <ul className="flex flex-col gap-5">
        {sections.map(({ id, label }, i) => {
          const isActive = i === activeIndex;
          const isHovered = hovered === i;

          return (
            <li key={id} className="relative flex items-center">
              {/* Bullet Button */}
              <Motion.button
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center w-5 h-5 rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t(`nav.${label}`)}
              >
                <span className="sr-only">{t(`nav.${label}`)}</span>
                {/* Bullet Core */}
                <span
                  className="absolute rounded-full transition-all duration-300"
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: isActive ? activeBg : "transparent",
                    border: `2px solid ${baseColor}`,
                    boxShadow: isActive
                      ? `0 0 0 2px ${isDark ? "#fff3" : "#0002"}`
                      : "none",
                  }}
                />
                {/* Halo animado */}
                <AnimatePresence>
                  {isActive && (
                    <Motion.span
                      layoutId="bullet-halo"
                      className="absolute rounded-full"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 0.15, scale: 1.8 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ type: "spring", stiffness: 140, damping: 12 }}
                      style={{
                        width: 16,
                        height: 16,
                        backgroundColor: activeBg,
                      }}
                    />
                  )}
                </AnimatePresence>
              </Motion.button>

              {/* Tooltip flutuante */}
              <AnimatePresence>
                {isHovered && (
                  <Motion.div
                    className="absolute right-full mr-2 -translate-y-1/2 text-sm font-medium pointer-events-none"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      color: baseColor,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t(`nav.${label}`)}
                  </Motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionNav;