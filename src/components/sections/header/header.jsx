import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MobileNavbar from '../mobileNavbar/mobileNavbar';
import { useClickOutside, useResize, useScroll } from '../../../hook';
import { navbarLinks } from '../../../constants';
import { logo } from "../../../constants/assets";
import { Menu } from 'lucide-react';
import { AnimatedCaret } from "../../utils/ui/AnimatedCaret";
import AboutDropdown from '../../utils/dropdowns/AboutDropdown';
import ServicesDropdown from '../../utils/dropdowns/ServicesDropdown';
import ResourcesDropdown from '../../utils/dropdowns/ResourcesDropdown';

const Header = () => {
    const [openMenu, setOpenMenu] = React.useState(null);
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);
    const { pathname } = useLocation();
    const showDesktopNav = pathname !== '/contact';

    const mobileNavbarRef = React.useRef(null);
    const dropdownRef = React.useRef(null);
    const headerRef = React.useRef(null);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
    const handleClickOutside = (e) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target) &&
            !headerRef.current.contains(e.target)
        ) {
            setOpenMenu(null);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
    useClickOutside(mobileNavbarRef, () => setToggleMenu(false));

    const { resizedX } = useResize({ targetX: 768 });
    const { scrolledY } = useScroll({ targetY: 50 });

    React.useEffect(() => {
        if (resizedX) setToggleMenu(false);
    }, [resizedX]);

    // Fecha se mouse sair da área inteira (header + dropdown)
    React.useEffect(() => {
        const handleMouseLeave = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.relatedTarget)) {
                setOpenMenu(null);
            }
        };
        const container = containerRef.current;
        container?.addEventListener("mouseleave", handleMouseLeave);
        return () => container?.removeEventListener("mouseleave", handleMouseLeave);
    }, []);

    // Fecha ao perder foco da janela (ex: inspecionar, trocar aba)
    React.useEffect(() => {
        const handleBlur = () => setOpenMenu(null);
        window.addEventListener("blur", handleBlur);
        return () => window.removeEventListener("blur", handleBlur);
    }, []);

    const handleToggleDropdown = (id) => {
        setOpenMenu(prev => (prev === id ? null : id));
    };

    const renderDropdown = () => {
        switch (openMenu) {
            case 'about':
                return <AboutDropdown />;
            case 'services':
                return <ServicesDropdown />;
            case 'projects':
                return <ResourcesDropdown />;
            default:
                return null;
        }
    };

    return (
        <>
            <div ref={containerRef}>
                <header ref={headerRef} className="fixed z-[100] w-full bg-ice shadow-sm top-0">
                    <div className="container h-full flex items-center justify-between py-2 md:py-4">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-8 mt-2">
                            <Link to="/">
                                <img src={logo} alt="Matheus Duarte Logo" className="h-8 w-auto object-contain" />
                            </Link>

                            {/* Desktop Nav */}
                            {showDesktopNav && (
                            <nav className="hidden md:block mt-2">
                                <ul className="flex gap-x-6">
                                    {navbarLinks.map((link) => (
                                        <li key={link.id} className="relative">
                                            <button
                                                onClick={(e) => {
                                                    e.currentTarget.blur(); // tira o foco do botão
                                                    if (openMenu === link.id) {
                                                        setOpenMenu(null); // fecha se for o mesmo
                                                    } else {
                                                        setOpenMenu(link.id); // abre se for diferente
                                                    }
                                                }}
                                                className={`text-base font-medium text-primary hover-underline-animation flex items-center gap-x-3 transition-colors duration-150 ${openMenu === link.id ? 'text-primary-50' : ''
                                                    }`}
                                            >
                                                {link.label}
                                                <AnimatedCaret open={openMenu === link.id} />
                                            </button>

                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            )}
                        </div>


                        <div className="flex flex-col items-end mt-1">
                            <Link to={"/contact"} className="btn-primary-header hidden md:inline-flex">Contact</Link>
                            <button className="cursor-pointer text-primary md:hidden mt-1" onClick={() => setToggleMenu(true)}>
                                <Menu />
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {openMenu && (
                            <motion.div
                                ref={dropdownRef}
                                key={openMenu}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="absolute top-full left-0 w-full bg-white shadow-xl z-[90] px-10 py-6 rounded-b-2xl border-t border-gray-100"
                            >
                                {renderDropdown()}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>
            </div>

            <AnimatePresence>
                {toggleMenu && (
                    <MobileNavbar
                        ref={mobileNavbarRef}
                        setToggleMenu={setToggleMenu}
                        activeSection=""
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
