import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'
import MobileNavbar from './mobileNavbar';
import { useClickOutside, useResize, useScroll } from '../hook';
import { navbarLinks } from '../constants';
import { logo } from "../constants/assets";
import { Menu } from 'lucide-react';
import { navbarVariants } from '../constants/motion';



const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("");
    const mobileNavbarRef = React.useRef(null);
    const { resizedX } = useResize({ targetX: 768 });
    const { scrolledY } = useScroll({ targetY: 100 });
    const location = useLocation();
    const [hovered, setHovered] = React.useState(null);

    useClickOutside(mobileNavbarRef, () => setToggleMenu(false));

    React.useEffect(() => {
        if (resizedX) {
            setToggleMenu(false);
        }
    }, [resizedX]);

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentSection = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) {
                    currentSection = section.getAttribute("id");
                }
            });
            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    React.useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <motion.header
                className="fixed z-[1000] flex w-full items-center"
                variants={navbarVariants}
                initial={['default', 'slideStart']}
                animate={[scrolledY ? 'active' : 'default', 'slideEnd']}
                transition={{ duration: 0.3 }}
            >
                <div className="container flex h-full items-center justify-between">
                    <Link
                        to={'/'}
                        className='flex h-3/4 items-center gap-x-2'
                    >
                        <motion.p
                            className="text-logo font-bold text-primary tracking-tight"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Matheus Duarte <span className="text-base font-bold text-sm">Co.</span>
                        </motion.p>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-4">
                            {navbarLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.path}
                                        className={`text-base font-medium text-primary hover-underline-animation left ${activeSection === link.id && activeSection !==  "" ? "active" : ""}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link
                        to={'/contact'}
                        className="btn-primary hidden md:inline-flex"
                    >
                        Contact
                    </Link>
                    <button className="cursor-pointer text-primary md:hidden" onClick={() => setToggleMenu(true)}>
                        <Menu />
                    </button>
                </div>
            </motion.header>
            <AnimatePresence>
                {toggleMenu && (
                    <MobileNavbar
                        ref={mobileNavbarRef}
                        setToggleMenu={setToggleMenu}
                        activeSection={activeSection}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;