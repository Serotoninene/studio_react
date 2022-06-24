import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // Handler to call on window resize
  const handleResize = () => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const debouncedHandleResize = useMemo(() => debounce(handleResize, 300), []);

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", debouncedHandleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => {
      debouncedHandleResize.cancel();
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
