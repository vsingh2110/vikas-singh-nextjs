'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleTagManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Push pageview event to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
        title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// TypeScript declaration for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
