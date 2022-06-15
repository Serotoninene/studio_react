import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const control = useAnimation();
  const parentVariants = {
    closed: {
      y: "-100vw",
    },
    open: {
      y: 0,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childrenVariants = {
    closed: {
      opacity: 0,
      scaleY: 0.1,
    },
    open: {
      opacity: 1,
      scaleY: 1,
    },
  };

  useEffect(() => {
    if (isMenuOpen) {
      control.start("open");
    } else {
      control.start("closed");
    }
  }, [isMenuOpen]);

  return (
    <>
      <div id="Navbar" className="fixed ">
        <p
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          Menu
        </p>
      </div>

      <motion.div
        className="menu fixed flex-column justify-between"
        variants={parentVariants}
        initial="closed"
        animate={control}
      >
        <div
          className="closeTag fixed"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Close
        </div>
        <div className="links flex">
          <motion.a animate={{}} variants={childrenVariants}>
            Works,{" "}
          </motion.a>{" "}
          <motion.a variants={childrenVariants}>Studio, </motion.a>{" "}
          <motion.a variants={childrenVariants}>Journal, </motion.a>{" "}
          <motion.a variants={childrenVariants}>Contact</motion.a>{" "}
        </div>
        <motion.div variants={childrenVariants} className="footer grid">
          <p className="section flex align-end">l'heure qu'il est</p>
          <div className="section">
            <p>insta, facebook, twitter</p>
            <p>adresse@mail.com</p>
            <p>studio</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
