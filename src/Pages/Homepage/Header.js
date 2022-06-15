import React from "react";
import { motion } from "framer-motion";
// Assets
import video from "../../Assets/Videos/Timelapse-sequence-3-FINAL.mp4";

export default function Header() {
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

  const iconVariants = {
    out: {
      opacity: 0,
      y: 100,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  return (
    <motion.div
      id="Header"
      className="relative"
      data-scroll-section
      variants={boxVariants}
      initial="out"
      animate="in"
      key="header"
    >
      <motion.h1 variants={iconVariants} key="headerTitle">
        Studio,
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
  );
}
