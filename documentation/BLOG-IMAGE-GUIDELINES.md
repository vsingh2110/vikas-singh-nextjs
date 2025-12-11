# Blog Image System Guidelines - December 12, 2025

## Overview
The blog system supports 4 distinct image types, each with specific use cases and responsive behavior.

---

## 4 Image Types

### 1. Single Center Image (Biggest)
**Desktop Appearance:**
- Height: 65vh (tall, prominent)
- Width: Image centered at 65% of container width
- Background: Subtle blur effect visible on left/right empty spaces (blur-sm with scale)
- Caption: Positioned OUTSIDE box below image
- Use case: Main feature images, important visuals

**Mobile Appearance:**
- Full width, auto height (max 50vh)
- No blur background
- Caption directly below image
- Stacks naturally with content

**MDX Usage:**
```mdx
<figure>
  <img src="/path/to/image.jpg" alt="Description" />
  <figcaption>Your caption text here</figcaption>
</figure>
```

---

### 2. Two Parallel Images (Medium)
**Desktop Appearance:**
- Two images side by side
- Each image: 48% width, up to 55vh height
- Gap: 2rem between images
- Background: Clean, no blur effects
- Captions: Below each image independently
- Use case: Comparisons, before/after, dual concepts

**Mobile Appearance:**
- Stack vertically (one above the other)
- Full width each
- Max height: 40vh each
- 2rem gap between stacked images
- Captions below each image

**MDX Usage:**
```mdx
<div className="image-pair">
  <figure>
    <img src="/path/to/image1.jpg" alt="First image" />
    <figcaption>Caption for first image</figcaption>
  </figure>
  <figure>
    <img src="/path/to/image2.jpg" alt="Second image" />
    <figcaption>Caption for second image</figcaption>
  </figure>
</div>
```

---

### 3. Left Floating Image (Smallest)
**Desktop Appearance:**
- Width: 400px fixed
- Float: Left with text wrapping around right side
- Margin: 0.5rem 1.5rem 1rem 0
- Shadow: Subtle drop shadow
- Caption: Below image, visible
- Use case: Supporting visuals within text content, diagrams

**Mobile Appearance:**
- Full width (no floating)
- Stacks with content normally
- Caption below image
- No text wrap

**MDX Usage:**
```mdx
<figure className="float-left">
  <img src="/path/to/image.jpg" alt="Description" />
  <figcaption>Small caption text</figcaption>
</figure>

Your paragraph text continues here and wraps around the image in desktop view...
```

---

### 4. Right Floating Image (Smallest)
**Desktop Appearance:**
- Width: 400px fixed
- Float: Right with text wrapping around left side
- Margin: 0.5rem 0 1rem 1.5rem
- Shadow: Subtle drop shadow
- Caption: Below image, visible
- Use case: Supporting visuals within text content, examples

**Mobile Appearance:**
- Full width (no floating)
- Stacks with content normally
- Caption below image
- No text wrap

**MDX Usage:**
```mdx
<figure className="float-right">
  <img src="/path/to/image.jpg" alt="Description" />
  <figcaption>Small caption text</figcaption>
</figure>

Your paragraph text continues here and wraps around the image in desktop view...
```

---

## Size Hierarchy (Desktop)

**Largest to Smallest:**
1. Single Center Image - 65vh height, 65% width
2. Two Parallel Images - 55vh height each, 48% width each
3. Left/Right Floating - Fixed 400px width, auto height

---

## When to Use Each Type

### Use Single Center Image When:
- Showcasing a main concept or feature
- Image is the primary focus of that section
- Need maximum visual impact
- Displaying screenshots, architecture diagrams, key visuals

### Use Two Parallel Images When:
- Comparing two concepts (traditional vs modern, before vs after)
- Showing alternatives or options
- Demonstrating dual workflows
- Need balanced visual weight for two related images

### Use Left Floating Image When:
- Image supports text on the right
- Want continuous text flow
- Image is supplementary to content
- Space-efficient layout needed

### Use Right Floating Image When:
- Image supports text on the left
- Want continuous text flow
- Image is supplementary to content
- Balance left-heavy layouts

---

## Technical Implementation

**Files:**
- CSS: `app/globals.css` - Lines 38-160
- Blog Post Template: `app/blog/[lang]/[slug]/page.tsx`
- Component: `app/components/ImagePair.tsx`

**Key CSS Classes:**
- `.prose figure:not(.float-left):not(.float-right):not(.image-pair figure)` - Single center
- `.prose .image-pair` - Two parallel container
- `.prose figure.float-left` - Left floating
- `.prose figure.float-right` - Right floating

**Responsive Breakpoint:** 768px (mobile/desktop split)

---

## Current Issues

**Single Center Image Blur Background:**
- Expected: Subtle blur visible on left/right empty spaces
- Current: Blur effect not showing prominently despite correct CSS
- Settings: `blur(4px) scale(1.5) opacity(0.4)`
- Priority: Low (functional, aesthetic issue only)

---

**Last Updated:** December 12, 2025 - 11:50 PM  
**Status:** Production Ready (except minor blur visibility issue)
