import React from "react";
import PropTypes from "prop-types";
import { motion as Motion } from "framer-motion";

const MenuToggle = React.forwardRef(({ isOpen, toggle, className }, ref) => {
  const transition = { duration: 0.35, ease: [0.41, 0, 0.06, 1] };
  const baseClasses = "md:hidden p-2 z-[1001]";
  const defaultClasses = "ml-4 text-primary-60";
  return (
    <button
      ref={ref}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={toggle}
      className={`${baseClasses} ${className ? className : defaultClasses}`}
    >
      <span className="relative block w-6 h-6">
        <Motion.span
          className="absolute left-0 top-1 w-6 h-[2px] bg-current"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
          transition={transition}
        />
        <Motion.span
          className="absolute left-0 top-1/2 w-6 h-[2px] bg-current"
          style={{ marginTop: "-1px" }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={transition}
        />
        <Motion.span
          className="absolute left-0 bottom-1 w-6 h-[2px] bg-current"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
          transition={transition}
        />
      </span>
    </button>
  );
});

MenuToggle.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  className: PropTypes.string,
};

MenuToggle.displayName = "MenuToggle";

export default MenuToggle;