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
// Utils
import debounce from "lodash.debounce";
// Custom hook
import useWindowSize from "../../Utilitaries/Hooks/useWindowSize.js";

export default function Homepage() {
  const size = useWindowSize();
  const homepage = useRef();
  const scrollContainer = useRef();
  // We need to create a state to wait for the elements to be mounted and the
  // framer motion intro anim to be done for the smooth scroll to start
  const [locoStart, setLocoStart] = useState(false);

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0.3,
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    // document.body.style.height = `${
    //   scrollContainer.current.getBoundingClienRect().height
    // }px`;
    const scrollContainerHeight =
      scrollContainer.current.getBoundingClientRect().height;
    document.body.style.height = `${scrollContainerHeight}px`;
  }, [size]);

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

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
        ref={homepage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeIn" }}
        data-scroll-container
        onAnimationComplete={() => {
          setLocoStart(true);
        }}
      >
        <div className="scrollContainer" ref={scrollContainer}>
          <Header homepageFramesVariant={homepageFramesVariant} />
          <HomepageContent homepageFramesVariant={homepageFramesVariant} />
          <People homepageFramesVariant={homepageFramesVariant} />
          <Awards homepageFramesVariant={homepageFramesVariant} />
          <Sustainability homepageFramesVariant={homepageFramesVariant} />
          <Footer homepageFramesVariant={homepageFramesVariant} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
