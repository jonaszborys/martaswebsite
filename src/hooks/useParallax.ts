import { useEffect, useState } from 'react';

export function useParallax(ref: React.RefObject<HTMLElement | null>) {
  const [parallax, setParallax] = useState({ y: 0, scale: 1 });

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1,
      );

      setParallax({
        y: -10 + 20 * progress,
        scale: 1.05 - 0.1 * progress,
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return parallax;
}
