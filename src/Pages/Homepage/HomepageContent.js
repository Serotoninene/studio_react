import React, { useEffect, useRef } from "react";
// framer motion
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Assets
import images from "../../Assets/images";

export default function HomepageContent({ homepageFramesVariant }) {
  // const control = useAnimation();
  // const ref = useRef();
  // const [ref, inView] = useInView({ rootMargin: "-300px", triggerOnce: true });

  const childrenVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
        duration: 0.5,
      },
    },
  };

  // useEffect(() => {
  //   let isRevealed = ref.current.classList.contains("is-reveal");
  //   if (isRevealed) {
  //     console.log("prout");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  // }, [control, inView]);

  return (
    <motion.div
      // ref={ref}
      key="HomepageContent"
      id="HomepageContent"
      className="grid relative"
      // variants={homepageFramesVariant}
      // initial="hidden"
      // animate={control}
      data-scroll
      data-scroll-section
    >
      <div className="contentText section">
        <motion.h2 variants={childrenVariants}>
          We believe great design starts with an idea. A creative spark fuelled
          by a sense of curiosity that leads to a new way of finding a solution.
        </motion.h2>
        <motion.div variants={childrenVariants}>
          <p>
            Our mission is to create work that engages customers, inspires
            loyalty, and sets a new benchmark for what design can deliver. We
            ask the hard questions, push for excellence and never settle for the
            status quo. We understand the harder path can lead to the most
            exceptional thinking and powerful design work.
          </p>
          <p>
            Great design is brave, considered and often challenging. It’s the
            space where visual identity and ideas come together, to shift the
            way we think and ultimately make the world a better place.
          </p>
          <p>
            Marx specialises in all elements of design, packaging, brand
            identity and communications, guided by our innate curiosity and love
            of strategic thinking. We thrive on transforming commercial
            challenges into creative opportunities.
          </p>
          <p>
            We’re not afraid to push and pull things apart, using insights and
            design knowledge to deepen the resonance and relevance of brands. We
            love to work with businesses looking for a different take on their
            brand, to unlock the potential at the heart of their product.
          </p>
        </motion.div>
      </div>
      <motion.div className="contentImage section" variants={childrenVariants}>
        <img
          src={images.stairs}
          className="img-fluid"
          alt="woman walking in front of stairs"
        />
      </motion.div>
    </motion.div>
  );
}
