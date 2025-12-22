# Tech Stack Reference

**Project:** Vikas Singh Portfolio & Blog Website  
**Last Updated:** December 22, 2025 (GTM & Analytics Integration)  
**Purpose:** Comprehensive technical documentation of all technologies, packages, and configurations

---

## 📦 CORE DEPENDENCIES

### **Next.js 14.2.33**
**Purpose:** React framework for production  
**Why Chosen:** Server-side rendering, routing, performance, image optimization, and safe version (security patched)

**Key Features Used:**
- App Router (modern routing system)
- Server Components for better performance
- Image Optimization (`next/image`)
- File-based routing
- TypeScript support

**Configuration:** `next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

**Documentation:** https://nextjs.org/docs

---

### **React 18**
**Purpose:** UI library for building components  
**Version:** ^18

**Key Features Used:**
- Functional components
- Hooks (useState, useEffect, useMemo, useCallback)
- Server Components (via Next.js)
- Client Components for interactivity

**Documentation:** https://react.dev/

---

### **TypeScript 5**
**Purpose:** Type-safe JavaScript  
**Why Chosen:** Catch errors at compile-time, better IDE support, maintainability

**Configuration:** `tsconfig.json`
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Documentation:** https://www.typescriptlang.org/docs/

---

## 🎨 STYLING & UI

### **Tailwind CSS 3.4.1**
**Purpose:** Utility-first CSS framework  
**Why Chosen:** Rapid development, consistency, no CSS file bloat, mobile-first

**Configuration:** `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors to be added based on design
      },
    },
  },
  plugins: [],
}
export default config
```

**Key Utilities:**
- Flexbox/Grid for layouts
- Responsive design (mobile-first: sm, md, lg, xl, 2xl)
- Custom colors for branding
- Transitions and animations
- Typography utilities

**PostCSS Plugins:**
- `autoprefixer` - Browser compatibility

**Documentation:** https://tailwindcss.com/docs

---

## 📚 BLOG SYSTEM DEPENDENCIES (NEW - December 10, 2025)

### **gray-matter 4.0.3**
**Purpose:** Parse frontmatter from Markdown/MDX files  
**Why Chosen:** Industry standard, reliable, easy to use

**Usage:**
```typescript
import matter from 'gray-matter'

const fileContents = fs.readFileSync(filePath, 'utf8')
const { data, content } = matter(fileContents)
// data = frontmatter object
// content = markdown content
```

**Documentation:** https://github.com/jonschlinkert/gray-matter

---

### **next-mdx-remote 5.0.0**
**Purpose:** Render MDX content in Next.js with Server Components  
**Why Chosen:** Full MDX support, works with App Router, Server Components compatible

**Usage:**
```tsx
import { MDXRemote } from 'next-mdx-remote/rsc'

// In Server Component
<MDXRemote source={content} components={customComponents} />
```

**Features:**
- Custom component mapping
- Server-side rendering
- No build-time compilation needed
- Works with dynamic content

**Documentation:** https://github.com/hashicorp/next-mdx-remote

---

### **reading-time 1.5.0**
**Purpose:** Calculate estimated reading time for blog posts  
**Why Chosen:** Simple, accurate, standard calculation

**Usage:**
```typescript
import readingTime from 'reading-time'

const stats = readingTime(content)
console.log(stats.text) // "5 min read"
console.log(stats.minutes) // 5
console.log(stats.words) // 1250
```

**Documentation:** https://github.com/ngryman/reading-time.js

---

## 🔧 EXISTING & UPDATED INTEGRATIONS

### **Form Handling**
- ✅ **Web3Forms** - Contact form with email notifications
- Package: `react-phone-number-input` for international phone input

### **Animations**
- ✅ **React Type Animation** (`react-type-animation@3.2.0`) - Typing effects in Hero and About sections

### **Content Management (Blog)**
- ✅ **File-based with MDX** - Using gray-matter + next-mdx-remote
- Content stored in `/content/blog/[lang]/` directory
- Frontmatter for metadata, Markdown for content

### **Analytics & Tracking**
- ✅ **Vercel Analytics** (`@vercel/analytics@1.4.1`) - Built-in Vercel performance tracking
- ✅ **Google Tag Manager** (GTM-KWKQK668) - Container for marketing tags
- ✅ **Google Analytics 4** (G-9YNSYJ8PLQ) - User behavior tracking
- ✅ **Custom Route Tracker** - Next.js SPA navigation tracking component
  - Location: `/app/components/GoogleTagManager.tsx`
  - Purpose: Tracks route changes in Next.js App Router
  - Implementation: Client component using `usePathname()` and `useSearchParams()`

---

## 📁 UPDATED FILE STRUCTURE

### **App Directory Structure:**
```
app/
├── components/              # Reusable components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   ├── Journey.tsx
│   ├── Achievements.tsx
│   ├── NonProfitWork.tsx
│   ├── SocialActivities.tsx
│   ├── Contact.tsx
│   ├── SocialLinks.tsx
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   ├── LanguageSwitcher.tsx    # NEW - Language toggle
│   └── AuthorBio.tsx           # NEW - Author section
├── blog/                        # Blog section
│   ├── page.tsx                 # Redirect to /blog/en
│   └── [lang]/                  # NEW - Language routing
│       ├── page.tsx             # Blog listing (en/hi)
│       └── [slug]/
│           └── page.tsx         # Individual blog posts
├── layout.tsx                   # Root layout
├── page.tsx                     # Home page
├── globals.css                  # Global styles + blog styles
└── favicon.ico
```

### **Content Directory (NEW):**
```
content/
└── blog/
    ├── en/                              # English blog posts
    │   ├── getting-started-with-nextjs.mdx
    │   └── digital-marketing-trends-2025.mdx
    └── hi/                              # Hindi blog posts
        ├── nextjs-14-se-shuru-kaise-kare.mdx
        └── digital-marketing-trends-2025.mdx
```

### **Library Directory:**
```
lib/
├── blog.ts                  # Blog utilities
├── types.ts                 # TypeScript types
└── utils.ts                 # Helper functions
```

### **Public Directory:**
```
public/
├── images/
│   ├── profile-pic.png
│   ├── team/
│   └── projects/
└── (other static assets)
```

---

## 🔐 ENVIRONMENT VARIABLES

**File:** `.env.local` (create this file, do NOT commit to Git)

```bash
# Future use for forms
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (future)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Usage in Code:**
```tsx
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
```

**Security Note:**
- Only use `NEXT_PUBLIC_` prefix for client-side variables
- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore`

---

## 🎯 TAILWIND CONFIGURATION DETAILS

### **Breakpoints:**
```js
screens: {
  sm: '640px',   // Small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  2xl: '1536px'  // Large desktops
}
```

### **Custom Colors (To Be Added):**
```js
colors: {
  'brand-red': '#dc143c',      // Crimson from original site
  'brand-red-dark': '#a00e2e',
  // Add more custom colors as needed
}
```

### **Typography:**
```js
fontFamily: {
  sans: ['Poppins', 'sans-serif'],
  heading: ['Ubuntu', 'sans-serif'],
}
```

---

## 🚀 BUILD & DEVELOPMENT

### **Scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### **Development:**
```bash
npm run dev
# Opens http://localhost:3000
```

### **Production Build:**
```bash
npm run build
npm start
```

### **Linting:**
```bash
npm run lint
```

---

## 📊 PERFORMANCE OPTIMIZATION

### **Next.js Image Component:**
```tsx
import Image from 'next/image'

// For fixed size images
<Image
  src="/images/profile-pic.png"
  alt="Vikas Singh"
  width={300}
  height={300}
  priority  // For above-fold images
/>

// For responsive images
<Image
  src="/images/hero-bg.jpg"
  alt="Background"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
```

### **Font Optimization:**
```tsx
// app/layout.tsx
import { Inter, Ubuntu } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})
```

---

## 🔗 EXTERNAL DEPENDENCIES (Original Site)

**These were used in static site - will be replaced:**

### **jQuery** → React state management
- `$(document).ready()` → `useEffect`
- `$('.selector')` → `useRef` or direct React refs

### **Typed.js** → React Type Animation or custom hook
- Typing animation effect
- Multiple strings rotation

### **Owl Carousel** → Custom React carousel or Swiper
- Team member carousel
- Project showcase carousel

### **Font Awesome** → React Icons or inline SVG
- Social media icons
- UI icons

### **Waypoints** → Intersection Observer API
- Scroll-triggered animations
- React hook for visibility detection

---

## 🧪 TESTING (Future)

**To be added:**
- Jest for unit testing
- React Testing Library
- Cypress or Playwright for E2E testing
- Lighthouse CI for performance

---

## 🌐 DEPLOYMENT

**Target Platform:** Vercel (recommended for Next.js)

**Alternatives:**
- Netlify
- AWS Amplify
- Railway
- Self-hosted

**Deployment Steps:**
1. Push to GitHub
2. Connect Vercel to repository
3. Configure environment variables
4. Deploy automatically on push

---

## 📚 OFFICIAL DOCUMENTATION LINKS

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **MDN Web Docs:** https://developer.mozilla.org/

---

## 🔄 VERSION UPDATE POLICY

**When to Update:**
- ✅ Security patches (immediately)
- ✅ Bug fixes (after testing)
- ⚠️ Minor versions (after research and testing)
- ❌ Major versions (only after thorough research, testing, and user approval)

**How to Update:**
```bash
# Check for updates
npm outdated

# Update specific package
npm install package-name@latest

# Update all (BE CAREFUL)
npm update
```

---

**Last Updated:** December 9, 2025  
**Next Review:** When adding new dependencies or major changes
