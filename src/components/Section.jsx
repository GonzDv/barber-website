import React, { useState } from 'react';
import useIntersectionObserver from './commons/useIntersectionObserver.js';
import "../styles/index.css";

const Section = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  const targetRef = useIntersectionObserver(handleIntersection);

  return (
    <div ref={targetRef} className={`section ${isVisible ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default Section;