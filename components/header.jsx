import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'
import MobileNavbar from './mobileNavbar';
import { useClickOutside, useResize, useScroll } from '../hook';
import { navbarLinks } from '../constants';
import { logo } from "../constants/assets";
import { Menu } from 'lucide-react';
import { navbarVariants } from '../constants/motion';



const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const mobileNavbarRef = React.useRef(null); 
    const { resizedX } = useResize({ targetX: 768});
    const { scrolledY } = useScroll({ targetY: 100 });

    useClickOutside(mobileNavbarRef, () => setToggleMenu(false));

    React.useEffect(() => {
        if (resizedX) {
            setToggleMenu(false);
        }
    }, [resizedX]);

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
                        {/* Logo */} 
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="h-full max-h-14 max-w-14"
                        />
                        <p className="text-base font-semibold text-gray-90">
                        MATHEUS DUARTE
                        </p>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-4">
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <Link 
                                    to={link.path} 
                                    className="link"
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
                    <button className="cursor-pointer text-gray-90 md:hidden" onClick={() => setToggleMenu(true)}>
                        <Menu />
                    </button>
                </div>
            </motion.header>
            <AnimatePresence>
                {toggleMenu && (
                <MobileNavbar
                    ref={mobileNavbarRef}
                    setToggleMenu={setToggleMenu}
                />
            )}
            </AnimatePresence>
        </>
    );
};

export default Header;