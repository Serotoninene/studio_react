import React, { useState } from "react";
import { motion } from "framer-motion";

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
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: accOpen ? "100%" : "0",
            opacity: accOpen ? 1 : 0,
          }}
          transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          {content.competitions.map((competition, id) => (
            <div key={id * 10} className="grid">
              <p className="awardName">{competition.name}</p>
              <div className="project-reward">
                {competition.projects.map((p, id) => (
                  <div className="flex justify-between" key={id}>
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
  return (
    <div id="Awards" data-scroll-section>
      <h3>Awards</h3>
      {awards.map((award) => (
        <LineAward key={awards.id} content={award} />
      ))}
    </div>
  );
}
