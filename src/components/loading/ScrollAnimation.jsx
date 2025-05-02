import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const ScrollAnimation = ({ children, delay = 0.2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //loop the animation

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset animation when out of view
    }
  }, [controls, isInView]);

  const variants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: { duration: 1, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
