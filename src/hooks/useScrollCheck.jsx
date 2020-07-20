import { useState, useEffect } from 'react';

export const useScrollCheck = (height = window.innerHeight) => {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newScrolledPast = window.scrollY > height;
      if (scrolledPast !== newScrolledPast) {
        setScrolledPast(newScrolledPast);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [scrolledPast]);

  return scrolledPast;
};
