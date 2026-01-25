# Best Practices & Coding Standards

**Project:** Vikas Singh Portfolio & Blog Website  
**Last Updated:** January 26, 2026  
**Purpose:** Coding standards, conventions, and best practices for consistent development

---

## 📋 TABLE OF CONTENTS

1. [Code Style & Conventions](#-code-style--conventions)
2. [Tailwind CSS Best Practices](#-tailwind-css-best-practices)
3. [Component Structure](#-component-structure)
4. [SEO Best Practices](#-seo-best-practices)
5. [Accessibility Best Practices](#-accessibility-best-practices)
6. [Performance Best Practices](#-performance-best-practices)
7. [Content Reuse & Reference Strategy](#-content-reuse--reference-strategy)

---

## 📚 CONTENT REUSE & REFERENCE STRATEGY

### **Principle: Don't Reinvent the Wheel**

When creating similar content (tutorials, guides, blog posts), always reference existing successful implementations first. Adaptation is faster and more consistent than creation from scratch.

### **Real-World Example: WHX Dubai 2026 Blog Creation**

**Scenario:** Create email tutorial for WHX Dubai 2026 event  
**Reference Used:** IRIA 2026 Email Tutorial (existing blog)  
**Time Saved:** ~4-5 hours  
**Success Rate:** 100% (structure proven with users)

#### What to Reuse (90% of content):
1. **Section Structure**
   - Reference existing article's heading order
   - Command: `Get-Content article.mdx | Select-String "^## "`
   - Copy exact sequence: Intro → Details → Tutorial → Resources → Video → PDF

2. **Tutorial Steps**
   - If process is identical, reuse all step descriptions
   - Only customize event-specific details (dates, venue, names)
   - Keep step numbers, warnings, tips identical

3. **Media Resources**
   - Images: Reuse if showing same process/steps
   - Videos: Reuse if demonstrating identical workflow
   - PDFs: Reuse if guide applies to same process
   - Add clear notes: "This resource is from [original], process is identical"

4. **Content Flow**
   - Warnings, precautions, troubleshooting sections
   - Do's and Don'ts lists
   - Quick reference tables
   - Checklists

#### What to Customize (10% of content):
1. **Event-Specific Details**
   - Dates, venue, location information
   - Event name and acronym
   - Registration links, virtual stand URLs
   - Hero images specific to new event

2. **Component Names**
   - Create new component with new event name
   - Example: `IRIAEmailTemplateEmbed` → `WHXEmailTemplateEmbed`

3. **Metadata**
   - Title, excerpt, tags
   - OpenGraph images
   - Date published

### **Workflow for Content Reuse:**

```bash
# Step 1: Identify reference article
# Look for similar content in blog or docs

# Step 2: Extract structure
Get-Content reference-article.mdx | Select-String "^## " | ForEach-Object { "$($_.LineNumber): $($_.Line)" }

# Step 3: Copy file as starting point
Copy-Item reference-article.mdx new-article.mdx

# Step 4: Find-Replace event details
# Use editor's find/replace for event names, dates, venues

# Step 5: Verify media paths
# Check if images/videos exist and are accessible

# Step 6: Build test
npm run build
```

### **Benefits of This Approach:**

✅ **Consistency:** Users get familiar structure across similar content  
✅ **Speed:** 4-5 hours saved on article creation  
✅ **Quality:** Reusing proven content means fewer errors  
✅ **Maintenance:** Update reference once, adapt others accordingly  
✅ **User Experience:** Predictable flow reduces learning curve  

### **When to Use This Strategy:**

- ✅ Creating event tutorials (multiple events, same process)
- ✅ Product documentation (similar products, different specs)
- ✅ How-to guides (same workflow, different contexts)
- ✅ Training materials (same training, different batches)
- ❌ Unique content requiring fresh approach
- ❌ Different user audiences needing different explanations

### **Documentation Rule:**

When reusing content, always add clear notes like:
> "This guide uses resources from [Original Article] because the process is identical. Only [specific details] differ."

This transparency:
- Helps users understand why content seems familiar
- Allows them to reference original if needed
- Shows intentional reuse, not laziness

### **Key Takeaway:**

**"Reference, Adapt, Customize"** is faster than **"Create, Test, Refine"** when similar content exists. Always ask: "Has this been done before?" before starting from scratch.

---

## 💻 CODE STYLE & CONVENTIONS

### **File Naming:**
```
Components: PascalCase (Navbar.tsx, Hero.tsx)
Utilities: camelCase (blog.ts, utils.ts)
Pages: lowercase (page.tsx, layout.tsx)
```

### **Component Structure:**
```tsx
// 1. Imports
import { useState } from 'react'
import Image from 'next/image'

// 2. Types/Interfaces
interface HeroProps {
  title: string
  subtitle: string
}

// 3. Component
export default function Hero({ title, subtitle }: HeroProps) {
  // 3a. State
  const [isVisible, setIsVisible] = useState(false)
  
  // 3b. Effects
  useEffect(() => {
    // ...
  }, [])
  
  // 3c. Handlers
  const handleClick = () => {
    // ...
  }
  
  // 3d. Render
  return (
    <section className="...">
      {/* Component JSX */}
    </section>
  )
}
```

### **TypeScript Best Practices:**
```tsx
// ✅ DO: Define prop types
interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

// ✅ DO: Use type for complex unions
type Status = 'idle' | 'loading' | 'success' | 'error'

// ❌ DON'T: Use 'any'
const data: any = fetchData()  // Bad

// ✅ DO: Define proper types
interface UserData {
  name: string
  email: string
}
const data: UserData = fetchData()  // Good
```

---

## 🎨 TAILWIND CSS BEST PRACTICES

### **Responsive Design:**
```tsx
// Mobile-first approach
<div className="
  text-sm        // Default (mobile)
  md:text-base   // Tablet
  lg:text-lg     // Desktop
  xl:text-xl     // Large desktop
">
  Responsive text
</div>
```

### **Color Conventions:**
```tsx
// Text colors
<h1 className="text-gray-900">     // Headings
<p className="text-gray-700">      // Body text
<span className="text-gray-500">   // Secondary text

// Backgrounds
<section className="bg-white">       // Content
<section className="bg-gray-50">    // Alternate sections
<section className="bg-gray-100">   // Subtle backgrounds

// Brand colors
<button className="bg-brand-red hover:bg-brand-red-dark">
  Call to Action
</button>
```

### **Spacing Consistency:**
```tsx
// Section padding
<section className="py-12 md:py-16 lg:py-20">

// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Card spacing
<div className="p-6 space-y-4">
```

### **Avoid Inline Styles:**
```tsx
// ❌ DON'T
<div style={{ color: 'red', padding: '20px' }}>

// ✅ DO
<div className="text-red-500 p-5">
```

---

## 🏗️ COMPONENT STRUCTURE

### **Server Components (Default):**
```tsx
// app/components/About.tsx
// Server Component (no 'use client')

export default function About() {
  return (
    <section className="py-16">
      <h2>About Me</h2>
      {/* Static content */}
    </section>
  )
}
```

### **Client Components (Interactive):**
```tsx
// app/components/Navbar.tsx
'use client'  // Required for interactivity

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
    </nav>
  )
}
```

### **Component Size:**
- Keep components under 200 lines
- Extract sub-components if needed
- Single responsibility principle

---

## 🔍 SEO BEST PRACTICES

### **Metadata:**
```tsx
// app/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vikas Singh | Frontend Developer & Digital Marketing Expert',
  description: 'Portfolio of Vikas Singh - Frontend Developer specializing in React, Next.js, and Digital Marketing. View projects and blog posts.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Digital Marketing', 'Portfolio'],
  openGraph: {
    title: 'Vikas Singh Portfolio',
    description: 'Frontend Developer & Digital Marketing Expert',
    images: ['/images/og-image.jpg'],
  },
}
```

### **Semantic HTML:**
```tsx
// ✅ DO: Use semantic elements
<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
  <aside>Sidebar</aside>
</main>
<footer>...</footer>

// ❌ DON'T: Use div for everything
<div>
  <div>...</div>
</div>
```

### **Heading Hierarchy:**
```tsx
// ✅ DO: Proper hierarchy
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection</h3>

// ❌ DON'T: Skip levels
<h1>Main Title</h1>
  <h4>Section</h4>  // Skipped h2, h3
```

---

## ♿ ACCESSIBILITY BEST PRACTICES

### **Images:**
```tsx
// ✅ DO: Always include alt text
<Image
  src="/images/profile.jpg"
  alt="Vikas Singh, Frontend Developer"
  width={300}
  height={300}
/>

// ❌ DON'T: Empty or missing alt
<Image src="/images/profile.jpg" alt="" />
```

### **Links:**
```tsx
// ✅ DO: Descriptive link text
<Link href="/blog">Read my latest blog posts</Link>

// ❌ DON'T: Generic text
<Link href="/blog">Click here</Link>
```

### **Forms:**
```tsx
// ✅ DO: Label all inputs
<label htmlFor="email" className="block mb-2">
  Email Address
</label>
<input 
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-hint"
/>
<small id="email-hint">We'll never share your email</small>
```

### **Keyboard Navigation:**
```tsx
// ✅ DO: Support keyboard interaction
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  aria-label="Close menu"
>
  <CloseIcon />
</button>
```

### **Color Contrast:**
- Text: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 ratio

---

## ⚡ PERFORMANCE BEST PRACTICES

### **Images:**
```tsx
// ✅ DO: Use Next.js Image component
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority  // For above-fold images
  quality={85}  // Adjust as needed
/>

// ✅ DO: Use modern formats
// Next.js automatically converts to WebP/AVIF
```

### **Code Splitting:**
```tsx
// ✅ DO: Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false  // If not needed on server
})
```

### **Lazy Loading:**
```tsx
// ✅ DO: Lazy load below-fold images
<Image
  src="/images/below-fold.jpg"
  alt="Content"
  width={800}
  height={600}
  loading="lazy"  // Default for non-priority images
/>
```

### **Font Optimization:**
```tsx
// app/layout.tsx
import { Inter, Ubuntu } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Avoid FOIT
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 📱 RESPONSIVE DESIGN CHECKLIST

### **Test These Breakpoints:**
- ✅ Mobile: 375px (iPhone)
- ✅ Mobile Large: 414px (iPhone Plus)
- ✅ Tablet: 768px (iPad portrait)
- ✅ Tablet Large: 1024px (iPad landscape)
- ✅ Desktop: 1280px
- ✅ Desktop Large: 1920px

### **Common Responsive Patterns:**
```tsx
// Stacking on mobile, grid on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Hide on mobile, show on desktop
<div className="hidden lg:block">

// Different padding on mobile vs desktop
<section className="px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16">

// Flexible text sizes
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
```

---

## 🎯 COMPONENT CHECKLIST

Before considering a component "complete":

- ✅ TypeScript types defined
- ✅ Responsive on mobile, tablet, desktop
- ✅ Accessibility features (alt text, ARIA labels)
- ✅ Semantic HTML used
- ✅ Tailwind classes (no inline styles)
- ✅ Performance optimized (lazy loading, etc.)
- ✅ Error states handled
- ✅ Loading states (if applicable)
- ✅ Comments for complex logic
- ✅ Tested in browser

---

## 🚫 COMMON MISTAKES TO AVOID

### **1. Mixing Styling Approaches**
```tsx
// ❌ DON'T
<div className="p-4" style={{ marginTop: '20px' }}>

// ✅ DO
<div className="p-4 mt-5">
```

### **2. Hardcoding Values**
```tsx
// ❌ DON'T
<h1>Vikas Singh | Frontend Developer</h1>

// ✅ DO
<h1>{siteConfig.title}</h1>
```

### **3. Not Using TypeScript**
```tsx
// ❌ DON'T
function Button({ text, onClick }) {

// ✅ DO
interface ButtonProps {
  text: string
  onClick: () => void
}
function Button({ text, onClick }: ButtonProps) {
```

### **4. Forgetting Mobile**
```tsx
// ❌ DON'T (desktop only)
<div className="text-2xl">

// ✅ DO (mobile-first)
<div className="text-lg md:text-xl lg:text-2xl">
```

---

## 📚 RESOURCES

**Official Documentation:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- MDN Web Docs: https://developer.mozilla.org/

**Tools:**
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- axe DevTools: https://www.deque.com/axe/devtools/
- WAVE: https://wave.webaim.org/

**Inspiration:**
- Tailwind UI: https://tailwindui.com/
- Headless UI: https://headlessui.com/

---

**Last Updated:** December 9, 2025  
**Follow these guidelines for consistent, high-quality code.**
