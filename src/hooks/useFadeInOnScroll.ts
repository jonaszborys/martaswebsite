import { useEffect } from 'react';

export function useFadeInOnScroll(baseClass: string, visibleClass: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll(`.${baseClass}`).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [baseClass, visibleClass]);
}
