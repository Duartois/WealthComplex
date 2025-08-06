import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import AboutDropdown from '../../utils/dropdowns/AboutDropdown';
import ServicesDropdown from '../../utils/dropdowns/ServicesDropdown';
import ResourcesDropdown from '../../utils/dropdowns/ResourcesDropdown';
import { AnimatedCaret } from "../../utils/ui/AnimatedCaret";

const mobileNavbarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "100%", transition: { duration: 0.2 } },
};

const drawerVariants = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "100%", transition: { duration: 0.2 } },
};

// === MENU TOGGLE inline ===
const MenuToggle = ({ toggle, isOpen }) => {
    const Path = ({ d }) => (
        <motion.path
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    );

    return (
        <button
            className="absolute right-4 top-4 z-50 p-2"
            onClick={toggle}
            aria-label="Toggle menu"
        >
            <svg width="24" height="24" viewBox="0 0 24 24">
                <Path d={isOpen ? "M3 3L21 21" : "M3 6h18"} />
                {!isOpen && <Path d="M3 12h18" />}
                <Path d={isOpen ? "M3 21L21 3" : "M3 18h18"} />
            </svg>
        </button>
    );
};
const MobileNavbar = React.forwardRef(({ setToggleMenu }, ref) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const [activeDrawer, setActiveDrawer] = React.useState(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setToggleMenu((prev) => !prev);
    };

    const goBack = () => setActiveDrawer(null);

    const drawerContent = {
        about: <AboutDropdown />,
        services: <ServicesDropdown />,
        projects: <ResourcesDropdown />,
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="main-drawer"
                ref={ref}
                className="fixed inset-0 z-[100000] h-screen w-full bg-ice px-6 py-10 overflow-y-auto"
                variants={mobileNavbarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />

                {!activeDrawer && (
                    <nav className="flex flex-col gap-6 mt-10">
                        {["about", "services", "projects"].map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveDrawer((prev) => (prev === key ? null : key))}
                                className="flex items-center justify-between text-left text-lg font-medium text-primary w-full"
                            >
                                <span className="capitalize">{key}</span>
                                <AnimatedCaret open={activeDrawer === key} />
                            </button>
                        ))}
                        <Link
                            to={"/contact"}
                            className="btn-primary mt-4"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                        <div className="mt-10 flex flex-col gap-3 text-primary text-sm">
                            <a href="https://github.com/Duartois" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.instagram.com/matheus.duarteg/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/in/matheusduartegoncalves/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </nav>
                )}

                <AnimatePresence mode="wait">
                    {activeDrawer !== null && (
                        <motion.div
                            key={activeDrawer}
                            className="absolute inset-0 z-10 bg-white px-6 py-8"
                            variants={drawerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <button
                                onClick={goBack}
                                className="text-sm font-medium text-primary underline mb-6"
                            >
                                ← Back
                            </button>
                            {drawerContent[activeDrawer]}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
});

MobileNavbar.propTypes = {
    setToggleMenu: Proptypes.func,
};

MobileNavbar.displayName = "MobileNavbar";

export default MobileNavbar;
