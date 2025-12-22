# Google Tag Manager & Analytics Implementation Guide

**Last Updated**: December 22, 2025

## Overview

This document details the Google Tag Manager (GTM) and Google Analytics 4 (GA4) implementation for the portfolio website, including the critical fix for Next.js single-page application tracking.

---

## Implementation Details

### 1. Google Tag Manager Container

**Container ID**: `GTM-KWKQK668`

**Location**: [app/layout.tsx](../app/layout.tsx)

**Implementation**:
- GTM script added using Next.js `Script` component with `strategy="afterInteractive"`
- Noscript iframe placed immediately after opening `<body>` tag
- Placed in root layout for global availability across all pages

### 2. Google Analytics 4

**Measurement ID**: `G-9YNSYJ8PLQ`

**Setup Method**: 
- Configured INSIDE GTM (not directly on page)
- Tag Type: "Google Tag" (newer unified tag)
- Trigger: "Initialization - All Pages"

---

## Critical Next.js SPA Issue & Solution

### The Problem

**Next.js uses client-side routing (SPA navigation)**:
- Initial page load: ✅ Tracked correctly
- Route changes (clicking links): ❌ NOT tracked by default
- Result: GA4 only sees homepage visits, no internal navigation

**Why**: Google Analytics only fires on full page loads, not on Next.js route changes.

### The Solution

**Component**: [app/components/GoogleTagManager.tsx](../app/components/GoogleTagManager.tsx)

**How it Works**:
1. Client-side component using `usePathname()` and `useSearchParams()`
2. Listens for route changes in Next.js App Router
3. Pushes `pageview` event to GTM `dataLayer` on every route change
4. GTM forwards these events to GA4

**Code Implementation**:
```tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleTagManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
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
```

---

## GTM Configuration Checklist

### In Google Tag Manager Dashboard

1. **Create GA4 Configuration Tag**:
   - Tag Type: Google Tag
   - Tag ID: G-9YNSYJ8PLQ
   - Trigger: Initialization - All Pages

2. **⚠️ CRITICAL: Publish the Container**
   - Click "Submit" button (top right)
   - Add version name (e.g., "Added GA4 tracking")
   - Click "Publish"
   - **Without publishing, tags won't work on live site!**

3. **Optional: Create Custom Pageview Tag** (for route changes)
   - Tag Type: Google Analytics: GA4 Event
   - Event Name: page_view
   - Trigger: Custom Event → Event name equals "pageview"

---

## Testing & Verification

### Method 1: GTM Preview Mode
1. In GTM Dashboard → Click "Preview"
2. Enter website URL
3. Verify tags fire on:
   - Initial page load
   - Route changes (clicking links)

### Method 2: Google Analytics Real-Time
1. GA4 Dashboard → Reports → Realtime
2. Open website in another tab
3. Navigate between pages
4. Should see:
   - Active users
   - Page views for each route

### Method 3: Browser DevTools
```javascript
// Check dataLayer in console
console.log(window.dataLayer);
```

---

## Data Collection Timeline

**Important Notes**:
- ✅ **Vercel Analytics**: Has historical data (installed earlier)
- ❌ **Google Analytics**: Only collects data FROM installation date forward
- **No historical data retrieval possible** - GA4 starts tracking from activation

Historical data will accumulate over time from December 22, 2025 onwards.

---

## Best Practices Followed

1. ✅ **Next.js Script Component**: Optimal loading with `afterInteractive` strategy
2. ✅ **Root Layout Placement**: GTM available on all pages
3. ✅ **SPA Route Tracking**: Custom component for Next.js navigation
4. ✅ **Type Safety**: TypeScript declarations for `window.dataLayer`
5. ✅ **Performance**: Non-blocking script loading
6. ✅ **Separation of Concerns**: GTM as container, GA4 configured inside
7. ✅ **Future Flexibility**: Easy to add more tags (FB Pixel, etc.) via GTM

---

## Troubleshooting

### Issue: No data in GA4
**Solutions**:
- Verify GTM container is published (not in draft)
- Check GTM Preview mode shows tags firing
- Wait 24-48 hours for data to appear in reports (Real-Time is instant)

### Issue: Only homepage tracked
**Solution**: 
- Verify `GoogleTagManager` component is imported in layout
- Check browser console for dataLayer events
- Ensure custom pageview trigger is set up in GTM

### Issue: Duplicate pageviews
**Cause**: Both automatic GA4 pageview + custom pageview event
**Solution**: Configure GA4 tag in GTM to NOT send automatic pageview on initialization

---

## Related Files

- [app/layout.tsx](../app/layout.tsx) - GTM initialization
- [app/components/GoogleTagManager.tsx](../app/components/GoogleTagManager.tsx) - Route tracking
- [VERCEL-DEPLOYMENT-SEO-GUIDE.md](./VERCEL-DEPLOYMENT-SEO-GUIDE.md) - Deployment guide

---

## Future Enhancements

Potential additions via GTM:
- Facebook Pixel tracking
- LinkedIn Insight Tag
- Hotjar heatmaps
- Custom conversion tracking
- E-commerce tracking (if applicable)
- Form submission tracking
- Outbound link clicks
- Download tracking
