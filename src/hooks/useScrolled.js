import { useState, useEffect, useRef } from 'react';

/**
 * Returns true once the page has scrolled past a threshold.
 * @param {number} threshold – scroll offset in px (default 40)
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Returns a ref to attach to an element.
 * Adds the class "visible" when the element enters the viewport.
 * @param {number} thresholdRatio – IntersectionObserver threshold (default 0.1)
 */
export function useFadeIn(thresholdRatio = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: thresholdRatio }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [thresholdRatio]);

  return ref;
}
