'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const targetId = hash.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 10); 

      return () => clearTimeout(timer);
    }
  }, [pathname]); 

  return null;
}
