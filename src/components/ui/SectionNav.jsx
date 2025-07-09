import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", theme: "dark" },
  { id: "Services", label: "Services", theme: "light" },
  { id: "About", label: "About", theme: "light" },     
  { id: "Skills", label: "Skills", theme: "light" }, 
  { id: "Projects", label: "Projects", theme: "dark" },
  { id: "CTA", label: "Contact", theme: "dark" },
];

const SectionNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      const positions = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });

      const index = positions.findIndex((top) => top > 120);
      const newIndex = index === -1 ? sections.length - 1 : Math.max(index - 1, 0);
      setActiveIndex(newIndex);
      setTheme(sections[newIndex].theme);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
              <motion.button
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center w-5 h-5 rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
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
                    <motion.span
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
              </motion.button>

              {/* Tooltip flutuante */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
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
                    {label}
                  </motion.div>
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
