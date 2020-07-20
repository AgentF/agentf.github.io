import { useState, useEffect } from 'react';
import 'intersection-observer';

export const useIntersectionObserver = elementRef => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(elementRef.current);
  }, [elementRef]);

  return [show];
};
