import { motion } from "framer-motion";

export const AnimatedCaret = ({ open }) => {
  return (
    <span className="inline-flex items-center justify-center w-4 h-1 top-[3px] relative">
      <motion.span
        className="absolute w-[9px] h-[2px] text-center bg-current rounded"
        initial={false}
        animate={{
          rotate: open ? -45 : 45,
          y: -2.5,
          x: open ? -3 : -3, // sempre afastado
        }}
        transition={{ duration: 0.35, ease: [0.41, 0, 0.06, 1] }}
      />
      <motion.span
        className="absolute w-[9px] h-[2px] bg-current rounded"
        initial={false}
        animate={{
          rotate: open ? 45 : -45,
          y: -2.5,
          x: open ? 3 : 3, // sempre afastado
        }}
        transition={{ duration: 0.35, ease: [0.41, 0, 0.06, 1] }}
      />
    </span>
  );
};