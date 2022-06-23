import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useMousePosition from "../Utilitaries/Hooks/useMousePosition";
import useDate from "../Utilitaries/Hooks/useDate";
import harpo from "../Assets/Images/hiddenMarx/Harpo-Marx.jpg";
import groucho from "../Assets/Images/hiddenMarx/Groucho-Marx.jpg";
import richard from "../Assets/Images/hiddenMarx/Richard-Marx.jpg";
import karl from "../Assets/Images/hiddenMarx/Karl-Marx.jpg";

const marxPhotos = [harpo, karl, groucho, richard];

export default function Navbar() {
  const { time, day, locale } = useDate();
  const [photoIdx, setPhotoIdx] = useState(0);
  let displayedMarx = marxPhotos[photoIdx];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHiddenPointAttracted, setIsHiddenPointAttracted] = useState(false);
  const [isHiddenPointHovered, setIsHiddenPointHovered] = useState(false);
  const [isHiddenImageRevealed, setIsHiddenImageRevealed] = useState(false);
  const hiddenPoint = useRef();
  let hiddenPointPosition =
    isHiddenPointAttracted && hiddenPoint.current.getBoundingClientRect();
  const mousePosition = useMousePosition();
  const control = useAnimation();
  const parentVariants = {
    closed: {
      y: "-100vw",
      transition: { when: "afterChildren", ease: [0.6, 0.05, -0.01, 0.9] },
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
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const childrenVariants2 = {
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const hiddenImageVariants = {
    hidden: {
      x: "-100%",
    },
    visible: (isHiddenImageRevealed) => ({
      x: isHiddenImageRevealed ? 0 : "-100%",
      transition: { when: "beforeChilren", ease: [0.6, 0.05, -0.01, 0.9] },
    }),
  };

  const hiddenTitleVariants = {
    hidden: {
      x: "-100%",
    },
    visible: (isHiddenImageRevealed) => ({
      x: isHiddenImageRevealed ? 0 : "-100%",
    }),
    transition: { ease: "ease-out", duration: 0.3 },
  };

  const handleHiddenPointEnter = () => {
    setIsHiddenPointAttracted(true);
  };

  const handleHiddenPointLeave = () => {
    setIsHiddenPointAttracted(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      control.start("open");
    } else {
      control.start("closed");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isHiddenImageRevealed) {
      if (photoIdx >= marxPhotos.length - 1) {
        setPhotoIdx(0);
      } else {
        setPhotoIdx(photoIdx + 1);
      }
    }
  }, [isHiddenImageRevealed]);

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
        className="menu fixed flex-column justify-between "
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
        {/* -------------- HIDDEN PICTURE MODAL -------------- */}
        <motion.div
          variants={hiddenImageVariants}
          initial="hidden"
          animate="visible"
          custom={isHiddenImageRevealed}
          className="hiddenPicture absolute"
          style={{ backgroundImage: ` url(${displayedMarx})` }}
        >
          <motion.h1
            variants={hiddenTitleVariants}
            initial="hidden"
            animate="visible"
            transition="transition"
            custom={isHiddenImageRevealed}
          >
            Marx
          </motion.h1>
        </motion.div>
        {/* -------------- HIDDEN POINT -------------- */}
        <div
          className="hiddenPoint-container absolute flex justify-center align-center"
          onMouseEnter={handleHiddenPointEnter}
          onMouseLeave={handleHiddenPointLeave}
        >
          <motion.div
            ref={hiddenPoint}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: isHiddenPointAttracted
                ? mousePosition.x -
                  hiddenPointPosition.x -
                  hiddenPointPosition.width / 2
                : 0,
              y: isHiddenPointAttracted
                ? mousePosition.y -
                  hiddenPointPosition.y -
                  hiddenPointPosition.height / 2
                : 0,
              scale: isHiddenPointHovered ? 2.5 : 1,
            }}
            transition={{ ease: "easeOut" }}
            onMouseEnter={() => {
              setIsHiddenPointHovered(true);
            }}
            onMouseLeave={() => {
              setIsHiddenPointHovered(false);
            }}
            onClick={() => {
              console.log(isHiddenImageRevealed);
              setIsHiddenImageRevealed(!isHiddenImageRevealed);
            }}
            className="hiddenPoint"
          ></motion.div>
        </div>
        <div className="links flex">
          <motion.a animate={{}} variants={childrenVariants}>
            Works,
          </motion.a>
          <motion.a variants={childrenVariants}>Studio, </motion.a>
          <motion.a variants={childrenVariants}>Journal, </motion.a>
          <motion.a variants={childrenVariants}>Contact</motion.a>
        </div>
        <motion.div variants={childrenVariants2} className="footer grid">
          <p className="section flex align-end">
            {time} {day} {locale.toUpperCase()}
          </p>
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
