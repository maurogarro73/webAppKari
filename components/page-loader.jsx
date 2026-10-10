'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const MINIMUM_VISIBLE_TIME = 450;

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const hideLoader = () => {
      timeoutId = window.setTimeout(() => setIsVisible(false), MINIMUM_VISIBLE_TIME);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }

    return () => {
      window.removeEventListener('load', hideLoader);
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Cargando sitio"
    >
      <Image
        src="/03_logo-completo_un-color-bordo.svg"
        alt="Karina Alvarez Mendiara, abogada"
        width={230}
        height={182}
        priority
        className="brand-loader h-auto w-40 sm:w-48"
      />
    </div>
  );
}
