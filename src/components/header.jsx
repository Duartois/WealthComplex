import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
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
    const { scrolledY } = useScroll({ targetY: 50 });
    const location = useLocation();

    useClickOutside(mobileNavbarRef, () => setToggleMenu(false));

    React.useEffect(() => {
        if (resizedX) {
            setToggleMenu(false);
        }
    }, [resizedX]);

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    const current = section.getAttribute("id");
                    if (current) {
                        setActiveSection(current);
                        break;
                    }
                }
            }
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
                const id = location.hash.replace("#", "");
                const yOffset = -80; // altura do header fixo + hero reduzido
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
                setActiveSection(id);
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
                            Matheus Duarte Co.
                        </motion.p>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-4">
                            {navbarLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.path}
                                        onClick={(e) => {
                                            if (location.hash === link.path) {
                                                e.preventDefault(); // impede o comportamento padrão
                                                const element = document.querySelector(link.path);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: "smooth" });
                                                    setActiveSection(link.id);
                                                }
                                            } else {
                                                setActiveSection(link.id);
                                            }
                                        }}
                                        className={`text-base font-medium text-primary hover-underline-animation left ${activeSection === link.id && activeSection !== "" ? "active" : ""}`}
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
