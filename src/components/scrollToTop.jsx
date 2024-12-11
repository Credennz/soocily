import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  return null; // No UI rendering, just the behavior
};

export default ScrollToTop;  // Ensure default export
