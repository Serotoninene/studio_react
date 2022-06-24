import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import images from "../../Assets/images";

export default function Sustainability({ homepageFramesVariant }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ rootMargin: "-300px", triggerOnce: true });

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
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div data-scroll-section>
      <motion.div
        ref={ref}
        key="Sustainability"
        id="Sustainability"
        className="grid"
        variants={homepageFramesVariant}
        initial="hidden"
        animate={control}
      >
        <motion.div
          variants={childrenVariants}
          className="contentImage section"
        >
          <img
            src={images.manuel}
            className="img-fluid"
            alt="woman walking in front of stairs"
          />
        </motion.div>
        <div className="contentText section">
          <motion.h2 variants={childrenVariants}>
            Working with brands in the packaging and product space,
            sustainability is incredibly important to us.
          </motion.h2>
          <motion.div variants={childrenVariants}>
            <p>
              We guide brands to make choices that put the environment first and
              aim to eliminate waste in everything we design.{" "}
            </p>
            <p>
              Our approach to sustainable packaging is to recommend our clients
              consider both the life cycle and “end of life” when choosing
              packaging. We believe a circular economy for all plastics is vital
              to stop the damaging effects of plastic pollution. When plastics
              are kept out of the environment and in the economy via high value
              recycling & reuse it’s the best possible outcome for all of us.
            </p>
            <p>
              Elimination of unnecessary packaging and innovating with smart
              design is something we’re extremely well versed in. Choosing to
              use products that can be safely reused, recycled or composted, by
              understanding how local infrastructure supports the solution.
              Clear on-pack communications on how to best disassemble, recycle
              or reuse packaging are our collective responsibility to keep
              products circulating and out of landfill.
            </p>

            <a>Download our open source packaging stewardship briefing form</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
