import { useState, useEffect } from 'react';

/**
 * Custom hook to determine if the current screen is mobile
 * @param {number} breakpoint - width threshold for mobile (default 768px)
 * @returns {boolean} isMobile
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}
