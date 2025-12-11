# Project Overview — Vikas Singh Portfolio & Blog Website

**Last Updated:** December 11, 2025  
**Project Type:** Next.js Portfolio & Blog Website  
**Status:** ⚠️ Testing Phase - Critical Fixes Needed

---

## 📋 EXECUTIVE SUMMARY

**Project Name:** Vikas Singh Portfolio & Blog Website  
**Owner:** Vikas Singh  
**Type:** Personal Portfolio and Professional Blog  
**Current Phase:** Testing & Bug Fixing

**Repository:** https://github.com/vsingh2110/vikas-singh-nextjs  
**Deployment:** https://vikas-singh-nextjs.vercel.app

**Key Achievement:** Migrated from static HTML/CSS to modern Next.js with full bilingual blog system

---

## 🎯 PROJECT GOALS & ACHIEVEMENTS

### ✅ Completed Objectives:
1. **✅ Modernized Tech Stack** - Next.js 14.2.33 with TypeScript and Tailwind CSS
2. **✅ Bilingual Blog System** - Full Hindi + English support with language switcher
3. **✅ Component Architecture** - 24 reusable React components
4. **✅ Mobile-First Design** - Fully responsive across all devices
5. **✅ SEO Optimization** - Hreflang tags, metadata, Open Graph
6. **✅ Web3Forms Integration** - Contact form with international phone support

### ⚠️ Current Focus (Dec 11):
- Fixing back button responsive issues
- Hero blur background fixes
- Share functionality testing
- Image sizing optimization

---

## 🏗️ TECHNICAL ARCHITECTURE

### Current Tech Stack:

#### **Frontend Framework:**
- **Next.js 14.2.33** (App Router, React 18)
  - Security patched (safe from CVE-2025-55182)
  - Server Components for performance
  - App Router for modern routing
- **TypeScript 5** for type safety
- **React 18** for UI components

#### **Styling:**
- **Tailwind CSS 3.4.1** (utility-first CSS framework)
- **PostCSS** with Autoprefixer
- Custom brand colors (Crimson #dc143c)
- Google Fonts: Poppins (body), Ubuntu (headings)

#### **Blog System:**
- **gray-matter** - MDX frontmatter parsing
- **next-mdx-remote** - MDX rendering
- **reading-time** - Automatic reading time calculation
- File-based content management (content/blog/[lang]/[slug].mdx)

#### **Form Handling:**
- **Web3Forms** - Contact form backend
- **react-phone-number-input** - International phone input

#### **Development Tools:**
- **ESLint** - Code quality
- **Git/GitHub** - Version control
- **Vercel** - Deployment platform

---
---

## 📁 CURRENT PROJECT STRUCTURE

```
vikas-singh-nextjs/
├── app/
│   ├── components/          # 24 React components
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   ├── Hero.tsx         # Hero with 8-layer CSS animation
│   │   ├── About.tsx        # Profile section
│   │   ├── Services.tsx     # Service offerings
│   │   ├── Skills.tsx       # Technical skills
│   │   ├── Journey.tsx      # Experience timeline
│   │   ├── Achievements.tsx # Awards & recognition
│   │   ├── NonProfitWork.tsx
│   │   ├── SocialActivities.tsx
│   │   ├── Projects.tsx     # (Hidden - awaiting content)
│   │   ├── Teams.tsx        # (Hidden)
│   │   ├── Contact.tsx      # Web3Forms integration
│   │   ├── SocialLinks.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── LanguageSwitcher.tsx  # Blog language toggle
│   │   ├── AuthorBio.tsx         # Blog author section
│   │   ├── TableOfContents.tsx   # Blog TOC
│   │   ├── SocialShare.tsx       # Bottom share buttons
│   │   ├── TopShareButtons.tsx   # Top share icons
│   │   ├── ReadingModeToggle.tsx # Light/dark theme
│   │   ├── ReadingProgress.tsx   # Scroll progress bar
│   │   ├── ImagePair.tsx         # Side-by-side MDX images
│   │   └── BlogGrid.tsx          # Category filtering
│   ├── blog/
│   │   ├── [lang]/
│   │   │   ├── page.tsx          # Blog listing with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual blog posts
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles + dark mode
├── content/
│   └── blog/
│       ├── en/              # English blog posts (MDX)
│       └── hi/              # Hindi blog posts (MDX)
├── lib/
│   └── blog.ts              # Blog utilities
├── public/
│   └── images/              # Static assets
├── documentation/           # 15+ documentation files
│   ├── FIXES-NEEDED.md      # ⭐ Issue tracker
│   ├── CURRENT-STATUS.md    # ⭐ Project status
│   ├── daily-logs/          # Session logs
│   └── [other docs...]
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 👤 TARGET AUDIENCE

### Primary Users:
1. **Potential Employers/Clients**
   - Looking to hire frontend developer
   - Need digital marketing services
   - Want WordPress/Shopify development

2. **Professional Network**
   - Colleagues and collaborators
   - Industry professionals
   - Recruiters

3. **Blog Readers**
   - Web development enthusiasts
   - Digital marketing professionals
   - Students and learners

### User Needs:
- Quick overview of skills and experience
- Easy way to contact
- Professional presentation
- Accessible on all devices
- Fast loading times
- Engaging blog content

---

## 🌟 KEY FEATURES

### Current Features (from static site):

#### **1. Hero Section**
- Name and title display
- Animated typing effect (multiple roles)
- Call-to-action button ("Hire me")

#### **2. About Section**
- Profile picture
- Bio and background
- CV download link
- Animated typing for job title

#### **3. Services Section**
- Three service cards:
  - Front End Development (HTML, CSS, JS, React/Next.js)
  - Digital Marketing & Paid Ads (SEO, SMO, SMM, Google/FB ads)
  - WordPress & Shopify Design

#### **4. Skills Section**
- Skills list with progress bars:
  - HTML (90%)
  - CSS (60%)
  - JavaScript (60%)
  - React/Next.js (50%)
  - Digital Marketing (85%)

#### **5. Journey Section (Resume)**
- Education timeline:
  - M.A. Psychology (2020-2022)
  - B.Tech Electrical Engineering (2016-2020)
  - Secondary & Senior Secondary (2013-2014)
- Experience timeline:
  - Phantom Healthcare (March 2021 - Present)
  - Zara International Machines (Jan-March 2021)
  - Freelance work (2017-2020)

#### **6. Projects Section**
- Project cards with:
  - Images
  - Titles
  - Descriptions
  - "Visit Website" / "Read more" links
- Example projects:
  - Ecommerce Shopify website
  - Portfolio sites
  - Blog projects

#### **7. Team Section**
- Team member carousel with:
  - Photos
  - Names
  - Roles/Titles
- Members:
  - Gaurav Mahlawat (Drupal & WordPress)
  - Tejaswi D (Embedded Engineer)
  - Sahil Sharma (Full Stack)
  - Sunil Kumar (Python)
  - Aaqib Pathan (AI-ML)

#### **8. Contact Section**
- Contact information:
  - Location: Faridabad, Delhi(NCR)
  - Phone: +91-9716186925
  - Email: vsingh2110@gmail.com
- Contact form (to be implemented in Next.js)

#### **9. Social Links**
- Icons for:
  - Facebook
  - Twitter
  - LinkedIn
  - GitHub
  - WhatsApp

#### **10. Navigation**
- Sticky navbar with menu
- Smooth scroll to sections
- Mobile hamburger menu
- Scroll-to-top button

### New Features (to be added):

#### **11. Blog Section** ⭐ NEW
- Blog listing page (`/blog`)
  - Grid of blog post cards
  - Each card shows:
    - Featured image
    - Title
    - Excerpt/preview
    - Publication date
    - Read time estimate
    - Tags/categories
  - Pagination or load more
  - Search/filter functionality
- Individual blog post pages (`/blog/[slug]`)
  - Full blog post content
  - Author info
  - Publication date
  - Reading time
  - Social sharing buttons
  - Related posts suggestion
  - Comments section (future)

---

## 🎨 DESIGN PHILOSOPHY

### Visual Style:
- **Professional & Clean:** Portfolio aesthetic
- **Modern:** Contemporary web design trends
- **Readable:** High contrast, clear typography
- **Trustworthy:** Professional color scheme (likely crimson/red accents based on static site)

### User Experience:
- **Fast:** Quick page loads and smooth transitions
- **Intuitive:** Clear navigation and information hierarchy
- **Accessible:** Works for all users, all abilities
- **Responsive:** Perfect on mobile, tablet, desktop

### Brand Identity:
- **Name:** Vikas Singh (Portfo**lio.** branding from static site)
- **Tagline:** Multiple roles (Front End Developer, Digital Marketer, WordPress Designer)
- **Tone:** Professional, competent, approachable
- **Colors:** (To be extracted from existing CSS)

---

## 🔄 MIGRATION STRATEGY

### Phase 1: Project Setup ✅
- Initialize Next.js project
- Configure TypeScript and Tailwind
- Set up folder structure
- Create documentation

### Phase 2: Component Migration 🚧
- Convert HTML sections to React components
- Migrate CSS to Tailwind classes
- Implement interactivity (scroll, animations)
- Test responsive design

### Phase 3: Blog Implementation ⏳
- Design blog data structure
- Create blog listing page
- Create blog post template
- Add sample blog posts
- Implement navigation between posts

### Phase 4: Enhancement ⏳
- Add form functionality
- Implement SEO optimization
- Performance optimization
- Accessibility improvements
- Analytics integration

### Phase 5: Deployment ⏳
- Prepare for production
- Deploy to Vercel
- Configure custom domain (if applicable)
- Set up CI/CD

---

## 📊 SUCCESS METRICS

### Technical Metrics:
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 95+
- ✅ Lighthouse SEO: 95+
- ✅ Mobile-friendly test: Pass
- ✅ Core Web Vitals: All green

### Functional Metrics:
- ✅ All sections from static site replicated
- ✅ Blog functionality working perfectly
- ✅ Forms submitting correctly
- ✅ Responsive on all devices
- ✅ Fast page load times (<3s)

### User Experience Metrics:
- ✅ Easy navigation
- ✅ Clear call-to-actions
- ✅ Professional appearance
- ✅ Engaging content
- ✅ Accessible to all users

---

## 🚧 TECHNICAL CHALLENGES

### Challenge 1: Animation Migration
**Issue:** Static site uses jQuery, Typed.js, Owl Carousel  
**Solution:** Replace with React-friendly alternatives (Framer Motion, react-type-animation)

### Challenge 2: Smooth Scroll
**Issue:** jQuery smooth scroll implementation  
**Solution:** Native CSS `scroll-behavior: smooth` or React scroll libraries

### Challenge 3: Blog Data Management
**Issue:** No existing blog content or structure  
**Solution:** File-based blog (Markdown) or JSON structure

### Challenge 4: Form Handling
**Issue:** No backend for form submissions  
**Solution:** EmailJS, Formspree, or Next.js API routes with email service

---

## 📚 DEVELOPER BACKGROUND

**Name:** Vikas Singh  
**Education:**
- M.A. Psychology (2020-2022) - Focus on Cyber Psychology
**Skills:**
- Frontend: HTML, CSS, JavaScript, React.js, Next.js, TypeScript
- Styling: Tailwind CSS, responsive design
- CMS: WordPress, Shopify
- Digital Marketing: SEO, SMO, SEM, SMM, Google Ads, Facebook Ads
- Social Psychology research and activism

**Development Approach:**
- Uses AI agents for modern framework implementation
- Prefers research-first methodology (not trial-and-error)
- Values clear documentation and maintainable code
- Relies on best practices and official documentation

---

## 🔗 REFERENCES

**Repository:** https://github.com/vsingh2110/vikas-singh-nextjs  
**Deployment:** https://vikas-singh-nextjs.vercel.app  
**Email:** vsingh2110@gmail.com  
**Documentation:** `documentation/` folder in repository

---

## 📅 PROJECT TIMELINE

**Project Started:** December 9, 2025  
**Current Status (Dec 11):** Testing & Bug Fixing Phase  
**Deployment:** Live on Vercel (⚠️ needs update after fixes)

**Major Milestones Completed:**
- ✅ Dec 9: Initial Next.js setup, component migration
- ✅ Dec 10 AM: UI fixes, Web3Forms contact form
- ✅ Dec 10 PM: Bilingual blog system implementation
- ✅ Dec 11: Blog post page enhancements (typography, share, TOC)
- ⚠️ Dec 11: Bug fixes in progress (see FIXES-NEEDED.md)

---

## 💡 CURRENT PRIORITIES

### Critical Fixes Needed (See FIXES-NEEDED.md):
1. Back button responsive issues
2. Hero blur background fix
3. Share functionality testing
4. Image sizing optimization
5. Reading mode toggle testing

### Future Enhancements:
- Comment system for blog posts
- Newsletter subscription
- Analytics integration
- More blog content
- Projects section content

---

**For detailed current status, see:** `CURRENT-STATUS.md`  
**For issue tracking, see:** `FIXES-NEEDED.md`  
**For daily work logs, see:** `daily-logs/` folder

---

**Last Updated:** December 11, 2025
- Newsletter subscription
- Search functionality across site
- Admin panel for blog management
- Multi-language support
- Dark mode toggle

---

**Last Updated:** December 9, 2025  
**Status:** Active Development
