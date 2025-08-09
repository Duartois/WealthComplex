import { motion as Motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function LoaderProgressBar({ progress = 0, loading = true }) {
  const [show, setShow] = React.useState(true);
  const [exiting, setExiting] = React.useState(false);

  React.useEffect(() => {
    if (!loading && progress >= 100) {
      setExiting(true);
      const t = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(t);
    } else {
      setShow(true);
      setExiting(false);
    }
  }, [loading, progress]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <Motion.div
        key="loader-bg"
        initial={{ x: 0 }}
        animate={exiting ? { x: "-100%" } : { x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "#E4E8F1",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: 300,
            height: 8,
            borderRadius: 6,
            background: "#ffffff",
            boxShadow: "0 2px 16px #0001",
            overflow: "hidden",
            position: "relative"
          }}
        >
          <Motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #3b405a 20%, #7f8699 80%)",
            }}
          />
        </div>
      </Motion.div>
    </AnimatePresence>
  );
}
