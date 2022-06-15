import React, { useState } from "react";
// framer motion
import { motion } from "framer-motion";

export default function LinePeople({ content, setPhotoDisplayed }) {
  const [accOpen, setAccOpen] = useState(false);

  const childrenVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      key={content.id}
      className="LineComponent"
      variants={childrenVariants}
      onClick={() => content.accordion && setAccOpen(!accOpen)}
      style={{ cursor: content.accordion && "pointer" }}
      onMouseEnter={() => {
        setPhotoDisplayed(content.photo);
      }}
    >
      <div className="grid lineContent">
        <p className="title">{content.title}</p>
        <p className="description">{content.description}</p>
        <p className={`plus flex justify-end ${!content.accordion && "none"}`}>
          +
        </p>
      </div>
      {content.accordion && (
        <motion.div
          className="accordionContainer grid"
          initial={{ height: 0 }}
          animate={{
            height: accOpen ? "100%" : "0",
          }}
          transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <div className="contact flex align-center">
            {content.phoneNum} <br /> {content.mail}
          </div>
          <div className="bio">
            {content.accordion.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
