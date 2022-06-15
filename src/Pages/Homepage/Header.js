import React from "react";
import { motion } from "framer-motion";
// Assets
import video from "../../Assets/Videos/Timelapse-sequence-3-FINAL.mp4";

export default function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 5,
      },
    },
  };

  return (
    <motion.div
      id="Header"
      className=""
      data-scroll-section
      variants={container}
      key="header"
    >
      <h1
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ ease: "easeOut" }}
        key="headerTitle"
      >
        Studio,
      </h1>

      <div className="videoContainer relative">
        <motion.p
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut" }}
          className="absolute"
        >
          Brand, Strategy, <br /> Identity, Packaging,
          <br /> Form, Communications.
        </motion.p>
        <video src={video} loop muted playsInline autoPlay preload="metadata" />
      </div>
    </motion.div>
  );
}
