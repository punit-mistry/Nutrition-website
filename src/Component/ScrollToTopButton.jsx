import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: -20,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      // Adjust the threshold (100 in this example) as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render the button conditionally based on the scroll position and location
  return isVisible && location.pathname !== "/home" ? (
    <div className="sticky bottom-0 h-20 text-right mr-10">
      <button
        className="bg-orange-600 rounded-full w-14 h-14 text-xl text-white font-bold"
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  ) : null;
};

export default ScrollToTopButton;
