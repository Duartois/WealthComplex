import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MobileNavbar from '../mobileNavbar/mobileNavbar';
import { useClickOutside, useResize, useScroll } from '../../hook';
import { navbarLinks } from '../../constants';
import { logo } from "../../constants/assets";
import { Menu } from 'lucide-react';
import { navbarVariants } from '../../constants/motion';

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("");
    const mobileNavbarRef = React.useRef(null);
    const { resizedX } = useResize({ targetX: 768 });
    const { scrolledY } = useScroll({ targetY: 50 });
    const location = useLocation();
    const headerRef = React.useRef();

    useClickOutside(mobileNavbarRef, () => setToggleMenu(false));


    React.useLayoutEffect(() => {
        const h = headerRef.current?.offsetHeight || 80;
        document.documentElement.style.setProperty('--header-h', `${h}px`);
    }, []);

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
                const y = element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
                setActiveSection(id);
            }
        }
    }, [location]);



    return (
        <>
            <motion.header
                className="fixed z-[100] w-full bg-ice"
                variants={navbarVariants}
                initial={['default', 'slideStart']}
                animate={[scrolledY ? 'active' : 'default']}
                transition={{ duration: 0.3 }}
                ref={headerRef}
            >
                <div className="container h-full flex items-center justify-between py-2 md:py-4">
                    {/* Esquerda: Logo + Nav */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-8 mt-2">
                        {/* Logo */}
                        <Link to={'/'}>
                            <motion.img
                                src={logo}
                                alt="Matheus Duarte Logo"
                                className="h-8 w-auto object-contain"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />
                        </Link>

                        {/* Links */}
                        <nav className="hidden md:block mt-2">
                            <ul className="flex gap-x-6 ">
                                {navbarLinks.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            to={link.path}
                                            onClick={(e) => {
                                                if (location.hash === link.path) {
                                                    e.preventDefault();
                                                    const element = document.querySelector(link.path);
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: "smooth" });
                                                        setActiveSection(link.id);
                                                    }
                                                } else {
                                                    setActiveSection(link.id);
                                                }
                                            }}
                                            className={`text-base font-medium text-primary hover-underline-animation left ${activeSection === link.id && activeSection !== "" ? "active" : ""
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Direita: Botão + Menu mobile */}
                    <div className="flex flex-col items-end mt-1">
                        <Link
                            to={'/contact'}
                            className="btn-primary-header hidden md:inline-flex"
                        >
                            Contact
                        </Link>
                        <button
                            className="cursor-pointer text-primary md:hidden mt-1"
                            onClick={() => setToggleMenu(true)}
                        >
                            <Menu />
                        </button>
                    </div>
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
