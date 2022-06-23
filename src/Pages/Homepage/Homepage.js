import React, { useState, useEffect, useRef } from "react";
// Components
import Header from "./Header.js";
import HomepageContent from "./HomepageContent.js";
import People from "./People.js";
import Awards from "./Awards.js";
import Sustainability from "./Sustainability.js";
import Footer from "../../Components/Footer";
// framer motion
import { AnimatePresence, motion } from "framer-motion";
// Loco
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function Homepage() {
  const scrollContainer = useRef();
  // We need to create a state to wait for the elements to be mounted and the
  // framer motion intro anim to be done for the smooth scroll to start
  const [locoStart, setLocoStart] = useState(false);
  let locoScroll = useRef();

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: false,
      multiplier: 0.8,
      lerp: 10,
      class: "is-reveal",
    });

    return () => {
      // Before the component get unmounted, we destroy the locoscroll instance
      locoScroll.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (locoStart) {
      locoScroll.current.destroy();
      locoScroll.current.init();
      locoScroll.current.update();
    }
    locoScroll.current.update();
  }, [locoStart]);

  const homepageFramesVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="pageTransition absolute"
        key="pageTransition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
      ></motion.div>
      <motion.div
        key="homepage"
        id="Homepage"
        ref={scrollContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeIn" }}
        data-scroll-container
        onAnimationComplete={() => {
          setLocoStart(true);
        }}
      >
        <Header homepageFramesVariant={homepageFramesVariant} />
        <HomepageContent homepageFramesVariant={homepageFramesVariant} />
        <People homepageFramesVariant={homepageFramesVariant} />
        <Awards homepageFramesVariant={homepageFramesVariant} />
        <Sustainability homepageFramesVariant={homepageFramesVariant} />
        <Footer homepageFramesVariant={homepageFramesVariant} />
      </motion.div>
    </AnimatePresence>
  );
}
