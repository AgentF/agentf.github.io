import { useState, useEffect } from 'react';
import 'intersection-observer';

export const useNearScreen = elementRef => {
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    });
    observer.observe(elementRef.current);
  }, [elementRef]);

  return [isNearScreen];
};
