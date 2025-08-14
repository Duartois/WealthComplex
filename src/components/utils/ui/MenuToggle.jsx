import React from "react";
import PropTypes from "prop-types";
import { motion as Motion } from "framer-motion";

const MenuToggle = React.forwardRef(({ isOpen, toggle }, ref) => {
  const transition = { duration: 0.35, ease: [0.41, 0, 0.06, 1] };
  return (
    <button
      ref={ref}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={toggle}
      className="md:hidden p-2 ml-4 text-primary-60 relative z-[1001]"
    >
      <span className="relative block w-6 h-6">
        <Motion.span
          className="absolute left-0 top-1 w-6 h-[2px] bg-current"
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          transition={transition}
        />
        <Motion.span
          className="absolute left-0 top-1/2 w-6 h-[2px] bg-current"
          style={{ marginTop: "-1px" }}
          initial={false}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={transition}
        />
        <Motion.span
          className="absolute left-0 bottom-1 w-6 h-[2px] bg-current"
          initial={false}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          transition={transition}
        />
      </span>
    </button>
  );
});

MenuToggle.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

MenuToggle.displayName = "MenuToggle";

export default MenuToggle;