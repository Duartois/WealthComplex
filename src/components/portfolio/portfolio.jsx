import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInVariants } from "../../constants/motion"; // ajuste path se necessário
import "./portfolio.scss";

const items = [
    { id: 1, title: "Project One", img: "/img1.jpg", desc: "Description 1" },
    { id: 2, title: "Project Two", img: "/img2.jpg", desc: "Description 2" },
    { id: 3, title: "Project Three", img: "/img3.jpg", desc: "Description 3" },
];

const Single = ({ item, index }) => (
    <section className="portfolio-slide">
        <div className="slide-wrapper">
            <motion.img
                src={item.img}
                alt={item.title}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="textContainer">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </div>
        </div>
    </section>
);

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const headerOpacity = useTransform(
        scrollYProgress,
        [0, 0.04],   // Fica 0% até 4% da section entrar (ajuste esse .04 se quiser antes/depois)
        [0, 1]
    );

    const headerY = useTransform(
        scrollYProgress,
        [0, 0.04],
        [-30, 0]
    );

    const headerFadeOut = useTransform(
        scrollYProgress,
        [0.96, 1],
        [1, 0]
    );

    const finalOpacity = useTransform(
        [headerOpacity, headerFadeOut],
        ([fadeIn, fadeOut]) => fadeIn * fadeOut
    );

    const progressScaleX = useTransform(scrollYProgress, [0.15, 0.95], [0, 1]);

    return (
        <section id="portfolio" className="portfolio" ref={ref}>
            <motion.div
                className="portfolio-header"
                style={{
                    opacity: finalOpacity,
                    y: headerY,
                    zIndex: 1
                }}
            >
                <h2>Featured Works</h2>
                <motion.div
                    className="progressBar"
                    style={{
                        scaleX: progressScaleX,
                        transformOrigin: "left",
                        height: "6px",
                        borderRadius: "4px",
                        background: "linear-gradient(90deg, #3b405a 20%, #E4E8F1 80%)",
                        boxShadow: "0 2px 8px #0001",
                        transition: "all 0.4s ease-in-out",
                    }}
                />
            </motion.div>

            <div className="portfolio-static">
                {items.map((item, index) => (
                    <Single key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
