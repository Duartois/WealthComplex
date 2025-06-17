import React from "react"
import { motion, AnimatePresence } from "framer-motion";
import { navbarLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { mobileNavbarVariants } from "../constants/motion";
import Proptypes from "prop-types";

const Path = motion.path;

const MenuToggle = ({ toggle, isOpen }) => (
    <button
        className="absolute right-0 top-0 m-4 text-gray-90"
        onClick={toggle}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
        >
            <Path
                initial={false}
                animate={{ d: isOpen ? "M3 17L17 3" : "M4 6h16" }}
                d={isOpen ? "M3 17L17 3" : "M4 6h16"}
                transition={{ duration: 0.3 }}
            />
            <Path
                initial={false}
                animate={{ opacity: isOpen ? 0 : 1 }}
                opacity={isOpen ? 0 : 1}
                d="M4 12h16"
                transition={{ duration: 0.2 }}
            />
            <Path
                initial={false}
                animate={{ d: isOpen ? "M3 3L17 17" : "M4 18h16" }}
                d={isOpen ? "M3 3L17 17" : "M4 18h16"}
                transition={{ duration: 0.3 }}
            />
        </svg>
    </button>
);

const MobileNavbar = React.forwardRef(({ setToggleMenu, activeSection }, ref) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setToggleMenu((prev) => !prev);
    };

    return (
        <motion.div
            ref={ref}
            className="fixed right-0 top-0 z-[100000] h-dvh w-full max-w-72 bg-ice backdrop-blur-lg px-4 py-[50px] shadow-lg"
            variants={mobileNavbarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <nav className="flex h-full flex-col justify-between gap-y-4" style={{ right: '0px', opacity: '1' }}>
                <ul className="flex w-full flex-col gap-y-5">
                    {navbarLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            custom={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                to={link.path}
                                className={`link text-lg ${activeSection === link.id ? "text-primary-50" : ""}`}
                                onClick={toggleMenu}
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
                <Link
                    to={'/contact'}
                    className="btn-primary"
                    onClick={toggleMenu}
                >
                    Contact
                </Link>
                <div className="mt-10 flex items-center justify-around gap-4 text-primary-50">
                    <a href="https://github.com/Duartois" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.instagram.com/matheus.duarteg/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/in/matheusduartegoncalves/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </nav>
        </motion.div>
    );
});

MobileNavbar.propTypes = {
    setToggleMenu: Proptypes.func,
    activeSection: Proptypes.string
};

MobileNavbar.displayName = "MobileNavbar";

export default MobileNavbar;
