import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../utils/ui/LanguageSwitcher';
import { motion as Motion, AnimatePresence } from "framer-motion";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import AboutDropdown from '../../utils/dropdowns/AboutDropdown';
import ServicesDropdown from '../../utils/dropdowns/ServicesDropdown';
import ResourcesDropdown from '../../utils/dropdowns/ResourcesDropdown';
import { AnimatedCaret } from "../../utils/ui/AnimatedCaret";
import MenuToggle from '../../utils/ui/MenuToggle';
import { navbarLinks } from '../../../constants';

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

const MobileNavbar = React.forwardRef(({ setToggleMenu }, ref) => {
    const { t } = useTranslation();
    const [activeDrawer, setActiveDrawer] = React.useState(null);
    const [showClose, setShowClose] = React.useState(false);

    React.useEffect(() => {
        setShowClose(true);
    }, []);
    const closeMenu = () => setToggleMenu(false);

    const goBack = () => setActiveDrawer(null);

    const drawerContent = {
        about: <AboutDropdown />,
        services: <ServicesDropdown />,
        projects: <ResourcesDropdown />,
    };

    return (
        <AnimatePresence mode="wait">
            <Motion.div
                key="main-drawer"
                ref={ref}
                className="inset-0 z-[100000] h-screen w-full bg-ice px-6 py-10 overflow-y-auto relative"
                variants={mobileNavbarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="absolute right-4 top-4 p-2 text-primary"
                >
                    <span className="relative block w-6 h-6">
                        <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-current rotate-45"></span>
                        <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-current -rotate-45"></span>
                    </span>
                </button>
                <MenuToggle
                    isOpen={showClose}
                    toggle={closeMenu}
                    className="absolute right-4 top-4 p-2 text-primary"
                />
                {!activeDrawer && (
                    <nav className="flex flex-col gap-6 mt-10">
                        {navbarLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setActiveDrawer((prev) => (prev === link.id ? null : link.id))}
                                className="flex items-center justify-between text-left text-lg font-medium text-primary w-full"
                            >
                                <span className="capitalize">{t(`nav.${link.id}`)}</span>
                                <AnimatedCaret open={activeDrawer === link.id} />
                            </button>
                        ))}
                        <LanguageSwitcher />
                        <Link
                            to={"/contact"}
                            className="btn-primary mt-4"
                            onClick={closeMenu}
                        >
                            {t('nav.contact')}
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
                        <Motion.div
                            key={activeDrawer}
                            className="absolute inset-x-0 top-0 z-10 min-h-full bg-white px-6 py-8"
                            variants={drawerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <button
                                onClick={goBack}
                                className="text-sm font-medium text-primary underline mb-6"
                            >
                                ← {t('nav.back')}
                            </button>
                            {drawerContent[activeDrawer]}
                        </Motion.div>
                    )}
                </AnimatePresence>
            </Motion.div>
        </AnimatePresence>
    );
});

MobileNavbar.propTypes = {
    setToggleMenu: Proptypes.func,
};

MobileNavbar.displayName = "MobileNavbar";

export default MobileNavbar;