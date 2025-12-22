'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function GTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Push pageview event to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      
      // Push both custom event and standard GTM format
      window.dataLayer.push({
        event: 'pageview',
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleTagManager() {
  return (
    <Suspense fallback={null}>
      <GTMTracker />
    </Suspense>
  );
}

// TypeScript declaration for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
