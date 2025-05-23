import React from "react"
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { navbarLinks } from "../constants";
import { Link } from "react-router-dom";
import { mobileNavbarVariants } from "../constants/motion";
import Proptypes from "prop-types";

const MobileNavbar = React.forwardRef(({setToggleMenu}, ref) => {
    return (
        <motion.div 
            ref={ref} 
            className="fixed right-0 top-0 z-[100000] h-dvh w-full max-w-72 bg-white px-4 py-[50px] shadow-lg"
            variants={mobileNavbarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <button className="absolute right-0 top-0 m-4 text-gray-90" onClick={() => setToggleMenu(false)}>
                <X />
            </button>
            <nav className="flex h-full flex-col justify-between gap-y-4" style={{ right: '0px', opacity: '1' }}>
                <ul className="flex w-full flex-col gap-y-5">
                    {navbarLinks.map((link,index) => {
                        return (
                            <li key={index}>
                                <Link to={link.path} className="link text-lg">
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <Link
                    to={'/contact'}
                    className="btn-primary"
                >
                    Contact
                </Link>
            </nav>
        </motion.div>
    );
});

MobileNavbar.propTypes = {
    setToggleMenu: Proptypes.func, 
};

MobileNavbar.displayName = "MobileNavbar";

export default MobileNavbar;