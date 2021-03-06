import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Components
import LinePeople from "../../Components/LinePeople";
// Assets
import images from "../../Assets/images";

const peopleContent = [
  {
    id: 0,
    title: "Ryan Marx",
    description: "Executive Creative Director & Managing Director",
    accordion: [
      "Ryan Marx. No relation to history’s famous Marx’s, however if you combine the irreverence of Groucho, the deep thinking of Karl and the timeless hair of Richard there’s a strange connection.",
      "As our owner, design leader and creative director, his role is to push the studio towards greatness and keep the imagination flowing. Ryan is internationally renowned for his conceptual thinking and design craftsmanship, which means global briefs, a clutch of design awards and people wanting to pick his brain.",
      "In his down time Ryan is probably still thinking about font kerning and the Pushpin manifesto. However, his true relaxing place is where family time, fishing and beer meet in a beautiful symbiotic union.",
    ],
    phoneNum: "021 683 040",
    mail: "ryan@marxdesign.co.nz",
    photo: images.ryan,
  },
  {
    id: 1,
    title: "Janine Bickerton",
    description: "General Manager",
    accordion: [
      "Every design agency needs a Janine, but you can’t have her, she’s ours! With 25 years of industry experience Janine balances the pragmatism and strategic thinking required to manage a studio with a passion for exceptional design and its environmental impact.",
      "Working closely with the Sustainable Business Network and other industry partners to rethink plastic packaging in Aotearoa. Janine also brings the essential category, consumer and business insights required to ensure our work delivers amazing results for clients.  Alongside driving the growth of the business Janine also gets a lot of satisfaction from seeing the Marx team develop and grow their skills.",
      "Ok, we’ll stop skiting. Downtime for Janine is focussed on good books, culinary creativity and entertaining with friends.",
    ],
    phoneNum: "021 934 295",
    mail: "janine@marxdesign.co.nz",
    photo: images.janine,
  },
  {
    id: 2,
    title: "Tristan O'Shannessy",
    description: "Creative Director",
    accordion: [
      "Tristan is one of those annoying breed of designers who excel at both the creative thinking and fine tuning elements of the process, making him an essential part of the Marx team. His long career in brand and packaging includes work with some of New Zealand’s most celebrated brands, there’s a high chance his design work is sitting somewhere in your house right now. Go on, take a look.",
      "His role as creative director is to oversee, scrutinise and gently push for more while ensuring projects are commercially relevant. No pressure, Tristan. Leisure time revolves around family with a healthy dose of garden pottering.",
    ],
    photo: images.tristan,
  },
  {
    id: 3,
    title: "Prudence Marx",
    description: "Office Manager",
    photo: images.prudence,
  },
];

export function FollowingPortrait({ hovered, photoDisplayed }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // The function that will set the mousePosition state (works inside the eventListener below)
  const onMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.screenY,
    });
  };

  // Triggering the hover animation, that follows the mouse
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mousePosition]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        top: mousePosition.y,
        left: mousePosition.x,
        opacity: hovered ? 1 : 0,
      }}
      transition={{ ease: "easeOut" }}
      className="portraits"
      style={{ backgroundImage: `url(${photoDisplayed})` }}
    ></motion.div>
  );
}

export default function People({}) {
  const [hovered, setHovered] = useState(false);
  // state keeping track of which photo must be shown
  const [photoDisplayed, setPhotoDisplayed] = useState(images.ryan);

  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
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
        id="People"
        ref={ref}
        key="People"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        variants={homepageFramesVariant}
        initial="hidden"
        animate={control}
      >
        <h3>People</h3>
        <div className="lineContainer">
          {peopleContent.map((person) => (
            <motion.div variants={childrenVariants} key={person.id}>
              <LinePeople
                content={person}
                setPhotoDisplayed={setPhotoDisplayed}
              />
            </motion.div>
          ))}
        </div>

        <FollowingPortrait hovered={hovered} photoDisplayed={photoDisplayed} />
      </motion.div>
    </div>
  );
}
