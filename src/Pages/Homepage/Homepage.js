import React, { useEffect, useRef } from "react";
// Components
import Header from "./Header.js";
import HomepageContent from "./HomepageContent.js";
import People from "./People.js";
import Awards from "./Awards.js";
import Sustainability from "./Sustainability.js";
import Footer from "../../Components/Footer";
// framer motion <3
import { AnimatePresence, motion } from "framer-motion";
// Loco
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function Homepage() {
  const scrollContainer = useRef();

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      multiplier: 1.5,
      class: "is-reveal",
    });

    setTimeout(() => locoScroll.update(), 100);

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="pageTransition absolute"
        key="pageTransition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut" }}
      ></motion.div>
      <motion.div
        key="homepage"
        id="Homepage"
        ref={scrollContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        data-scroll-container
      >
        <Header />
        <HomepageContent />
        <People />
        <Awards />
        <Sustainability />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
