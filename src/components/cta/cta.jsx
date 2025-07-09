import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./cta.scss"; // Assuming you have a separate CSS file for styles

const CTA = () => {
  return (
    <section id="cta" className="cta-section flex bg-hero py-[100px] px-4">
      <div className="container flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-h1 ws-balance text-secondary-50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let’s build the web you imagine
        </motion.h2>

        <motion.p
          className="text-services-description text-secondary-50 mb-8 max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          From immersive landing pages a la Three.js to full-stack platforms with APIs, Stripe, and Mongo — I craft digital experiences with performance, polish, and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link to="/contact" className="btn-primary">
            Start your project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
