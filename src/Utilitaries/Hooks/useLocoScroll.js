import {
  useEffect
} from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(container) {
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      multiplier: 2,
      class: "is-reveal",
    });

    setTimeout(() => locoScroll.update(), 100);

    return () => {
      locoScroll.destroy();
    };
  }, []);
}