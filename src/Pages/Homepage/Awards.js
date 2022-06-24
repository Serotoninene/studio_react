import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const awards = [
  {
    id: 0,
    year: "2021",
    competitions: [
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Anizdals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
      {
        name: "Best ards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    year: "2019",
    competitions: [
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    year: "2018",
    competitions: [
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    year: "2017",
    competitions: [
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
      {
        name: "Best Awards",
        projects: [
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
          {
            project: "Animals Like Us – Business Communication",
            award: "Gold",
          },
        ],
      },
    ],
  },
];

export function LineAward({ content }) {
  const [accOpen, setAccOpen] = useState(false);

  return (
    <div className="LineAward" onClick={() => setAccOpen(!accOpen)}>
      <div className="grid lineContent relative">
        <p className="year">{content.year}</p>
        <motion.div
          className="awardsContainer"
          layout
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: accOpen ? "100%" : "0",
            opacity: accOpen ? 1 : 0,
          }}
          transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          {content.competitions.map((competition, id) => (
            <div key={id} className="grid">
              <p className="awardName">{competition.name}</p>
              <div className="project-reward">
                {competition.projects.map((p, id) => (
                  <div className="flex justify-between" key={id * 10}>
                    <p>{p.project}</p>
                    <p>{p.award}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.p
          className="plus absolute"
          animate={{ opacity: accOpen ? 0 : 1 }}
        >
          +
        </motion.p>
      </div>
    </div>
  );
}

export default function Awards() {
  const control = useAnimation();
  const [ref, inView] = useInView({ rootMargin: "-300px", triggerOnce: true });
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

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div data-scroll-section>
      <motion.div
        id="Awards"
        ref={ref}
        key="Awards"
        variants={homepageFramesVariant}
        initial="hidden"
        animate={control}
      >
        <h3>Awards</h3>
        {awards.map((award, id) => (
          <motion.div variants={childrenVariants} key={id * 1000}>
            <LineAward content={award} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
