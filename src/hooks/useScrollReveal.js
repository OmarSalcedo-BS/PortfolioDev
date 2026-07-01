import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal({ threshold = 0.18, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}