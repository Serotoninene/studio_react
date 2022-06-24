import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Assets
import video from "../../Assets/Videos/Timelapse-sequence-3-FINAL.mp4";

export default function Header() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const boxVariants = {
    out: {},
    in: {
      transition: {
        duration: 0.6,
        delayChildren: 1,
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setIsIntroDone(true);
    }, 5000);
  });

  const iconVariants = {
    out: {
      opacity: 0,
      y: 100,
    },
    in: (isIntroDone) => ({
      width: isIntroDone ? "60%" : "100%",
      opacity: 1,
      y: 0,
      transition: { ease: [0.6, 0.05, -0.01, 0.9], delayChildren: 0.5 },
    }),
  };

  return (
    <div data-scroll-section>
      <motion.div
        id="Header"
        className="relative"
        variants={boxVariants}
        initial="out"
        animate="in"
        key="header"
        custom={isIntroDone}
      >
        <motion.h1 layout variants={iconVariants} key="headerTitle">
          <span>Studio,</span>{" "}
        </motion.h1>
        <div className="videoContainer relative">
          <motion.p variants={iconVariants} className="absolute">
            Brand, Strategy, <br /> Identity, Packaging,
            <br /> Form, Communications.
          </motion.p>
          <motion.div variants={iconVariants}>
            <video
              src={video}
              variants={boxVariants}
              loop
              muted
              playsInline
              autoPlay
              preload="metadata"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
