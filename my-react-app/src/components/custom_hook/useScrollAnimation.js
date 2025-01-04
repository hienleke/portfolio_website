import { useEffect, useRef } from "react";

const useScrollAnimation = (threshold = 0.1) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect(); // Clean up on unmount
  }, [threshold]);

  return elementsRef;
};

export default useScrollAnimation;
