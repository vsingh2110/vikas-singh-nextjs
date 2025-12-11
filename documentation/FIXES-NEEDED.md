# FIXES NEEDED - December 12, 2025

**STATUS:** Active Issues Tracker - Single Source of Truth  
**Last Updated:** December 12, 2025  
**Purpose:** Central tracking file for all outstanding bugs and issues

---

## 🚨 CRITICAL ISSUES - HIGHEST PRIORITY

### ❌ ISSUE #1: Navbar Inconsistent Width Causing Back Button Misalignment
**Status:** ROOT CAUSE IDENTIFIED  
**User Reports:** "Navbar has position value 720px below 1280px and 700px from 1280px and above - causing back button section to not align"  
**Files:** `app/components/Navbar.tsx`, `app/blog/[lang]/[slug]/page.tsx`

**Root Cause Analysis:**
- Navbar container width is INCONSISTENT across breakpoints
- Below 1280px: 720px width
- 1280px and above: 700px width
- This causes the back button section (which follows navbar) to have misaligned padding
- The section containing "Back to all posts" and "Theme switcher" cannot align properly because navbar width keeps changing

**Solution Approach:**
1. **Fix Navbar width consistency** - Use same max-width across all breakpoints
2. **Match back button container** - Ensure same padding/width as navbar
3. **No changes needed** from 1024px to 1279px (already okay per user)
4. **Mobile fix:** Add small top padding (0.3rem) to back button SECTION (not the flex container)

**Files to Modify:**
- `app/components/Navbar.tsx` - Fix container width
- `app/blog/[lang]/[slug]/page.tsx` - Match back button section to navbar width

**Priority:** HIGHEST - Root cause of alignment issues

---

### ❌ ISSUE #2: Hero Blurred Background Too Blurry/Solid
**Status:** NEEDS LESS BLUR  
**User Reports:** "Background needs MORE LESS blurry - still looking like solid colour, not recognizable as blurred image"  
**File:** `app/blog/[lang]/[slug]/page.tsx`

**Current Problem:**
- Blur effect is TOO STRONG
- Looks like solid grey color instead of recognizable blurred image
- User wants to SEE the image even though blurred

**Solution Approach:**
- REDUCE blur amount (try blur-lg or blur-xl instead of blur-3xl)
- May need to adjust opacity to make image more visible
- Research Tailwind blur utilities: blur-sm, blur, blur-lg, blur-xl, blur-2xl, blur-3xl
- Test with different combinations until image is recognizable but still blurred

**Priority:** HIGH

---

### ❌ ISSUE #3: Blog Images - Multiple Problems

#### 3A. Center Images Too Large + Need Frame/Box
**Status:** PARTIALLY DONE - Need smaller with blur frame  
**User Reports:** "Big center images made small but need MORE small with same frame/box effect of blurry background"  
**File:** `app/globals.css` or `app/blog/[lang]/[slug]/page.tsx`

**Requirements:**
- Reduce max-height further (currently 70vh - try 50vh or 60vh)
- Keep the blurred background frame/box effect
- Desktop 1024px+: Frame with blur
- Mobile: NO frame, NO blur, NO padding - plain simple images

#### 3B. Two Parallel Images - Not Tested
**Status:** NO CONTENT TO TEST  
**User Reports:** "Cannot verify 2 parallel images as no blog has them - make example with current images"  
**File:** Need to add ImagePair component usage in one of the blog posts

**Action Required:**
- Add ImagePair example in one of existing blog MDX files
- Use current available images from blogs
- Test responsive behavior

#### 3C. Floating Images (Left/Right with Text Wrap) - Wrong Styling
**Status:** OVER-STYLED  
**User Reports:** "Images with text wrap DON'T need box/frame - just minute padding or nothing - let them be responsive freely"  
**File:** `app/blog/[lang]/[slug]/page.tsx` MDX styling

**Requirements Desktop 1024px+:**
- NO blurred background box
- Maybe tiny padding for frame look OR nothing at all
- Let them flow naturally with text
- Keep responsive behavior

**Requirements Mobile:**
- NO frame, NO box, NO padding, NO blur
- Plain simple images in flow
- All same size naturally

**Priority:** HIGH

---

### ❌ ISSUE #4: Dark Theme Applied to ALL Pages (Not Just Blog Posts)
**Status:** UNINTENDED GLOBAL APPLICATION  
**User Reports:** "Theme switcher affects ALL routes - blog home, main home, all pages turn dark"  
**Files:** `app/components/ReadingModeToggle.tsx`, Multiple page components

**Current Problem:**
- Dark theme intended ONLY for blog post pages
- Actually applies to entire website
- Many sections have poor dark mode styling:
  - Blog home: "Blog" title black on dark (invisible)
  - Blog cards: Title black, entire card goes dark instead of light
  - Main home sections: Multiple text visibility issues

**Solution Options:**
1. **Option A:** Scope dark theme to ONLY blog post pages
2. **Option B:** Fix dark mode styling for ALL pages

**User Prefers:** Option B - Fix styling for all pages if we keep global dark mode

**Sub-issues to Fix:**

#### 4A. Blog Home Page (`/blog/[lang]`)
- Page title "Blog" is black on dark theme (invisible)
- Blog card titles black and invisible
- Card backgrounds should stay lighter even in dark mode

#### 4B. Main Home Page Sections

**About Section:**
- Title "About me" needs white color
- Lines around subheading "who i am" need white
- Text "I'm Vikas and I'm a" needs white

**Skills Section (2nd section):**
- Has grey background normally (for alternating pattern)
- Not becoming dark in dark theme
- Needs dark background in dark mode

**Journey Section:**
- Text visibility issues in dark mode

**Achievements Section:**
- Text/heading visibility issues

**Non-Profit Work Section:**
- Text visibility issues

**Social Activities Section:**
- Text visibility issues

**Services Section:**
- Text visibility issues

**Contact Section:**
- Text visibility issues

**Footer:** Already okay (already dark/black)

**Priority:** HIGH - If keeping global dark mode, must fix all pages

---
**Status:** CODE UPDATED BUT USER REPORTS STILL BROKEN  
**Files:** `app/components/TopShareButtons.tsx`, `app/components/SocialShare.tsx`

#### 3A. Copy Link Not Working Correctly
**User Reports:** "Copying only link and not the little text"  
**Code Says:** Should copy "Title - URL" format  
```typescript
const textToCopy = `${title} - ${url}`
await navigator.clipboard.writeText(textToCopy)
```
**Status:** Needs actual device testing to verify

#### 3B. Facebook Share Not Including Title
**User Reports:** "Sharing only link and not text"  
**Current Code:** Using &t= parameter  
**Status:** Parameter may be wrong, needs research on Facebook Sharer API  
**Note:** Facebook Lite limitation cannot be fixed

#### 3C. Native Share Issues
**Problem 1:** "Next.js" being treated as URL by some apps  
**Problem 2:** Title not appearing in Gmail subject / WhatsApp Desktop  
**Current Implementation:** 
```typescript
await navigator.share({
  title: title,
  text: `${title}`,
  url: url
})
```
**Status:** Browser/app dependent behavior, may be unfixable

#### 3D. WhatsApp Desktop No Preview
**Status:** DOCUMENTED - Cannot fix (WhatsApp Desktop limitation)  
**Note:** Works correctly on WhatsApp mobile

---

### ⚠️ ISSUE #5: Share Functionality - Multiple Problems
**Status:** CODE UPDATED BUT USER REPORTS STILL BROKEN  
**Files:** `app/components/TopShareButtons.tsx`, `app/components/SocialShare.tsx`

#### 5A. Copy Link Not Working Correctly
**User Reports:** "Copying only link and not the little text"  
**Code Says:** Should copy "Title - URL" format  
```typescript
const textToCopy = `${title} - ${url}`
await navigator.clipboard.writeText(textToCopy)
```
**Status:** Needs actual device testing to verify

#### 5B. Facebook Share Not Including Title
**User Reports:** "Sharing only link and not text"  
**Current Code:** Using &t= parameter  
**Status:** Parameter may be wrong, needs research on Facebook Sharer API  
**Note:** Facebook Lite limitation cannot be fixed

#### 5C. Native Share Issues
**Problem 1:** "Next.js" being treated as URL by some apps  
**Problem 2:** Title not appearing in Gmail subject / WhatsApp Desktop  
**Current Implementation:** 
```typescript
await navigator.share({
  title: title,
  text: `${title}`,
  url: url
})
```
**Status:** Browser/app dependent behavior, may be unfixable

#### 5D. WhatsApp Desktop No Preview
**Status:** DOCUMENTED - Cannot fix (WhatsApp Desktop limitation)  
**Note:** Works correctly on WhatsApp mobile

**Priority:** MEDIUM - Needs comprehensive testing on actual devices

---

## ⏳ MEDIUM/LOW PRIORITY ISSUES

### ⚠️ ISSUE #6: Reading Mode Toggle Not Tested
**Status:** COMPONENT CREATED BUT NOT VERIFIED  
**File:** `app/components/ReadingModeToggle.tsx`

**Implementation:**
- Light/dark theme toggle
- LocalStorage persistence
- Bilingual labels

**Needs:** User testing for functionality

---

## 📋 TASK BREAKDOWN - STEP BY STEP APPROACH

### 🔴 PHASE 1: NAVBAR & ALIGNMENT (Issue #1)
**Research First:** Check Tailwind responsive width utilities

**Tasks:**
1. ✅ Read Navbar.tsx and identify width inconsistency
2. ✅ Read back button section and identify width mismatch
3. ✅ Fix Navbar to use max-w-[1920px] with consistent padding
4. ✅ Fix back button section to match (already had 1920px)
5. ✅ Add pt-1.5 sm:pt-0 to back button section (0.3rem mobile padding)
6. ⏳ Test at: 360px, 768px, 1024px, 1280px, 1920px
7. ⏳ User verification

**Code Changes Made:**
- **Navbar.tsx:** Changed from multiple max-width values to `max-w-[1920px]`
- **Navbar.tsx:** Standardized padding to `px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20`
- **page.tsx:** Added `pt-1.5 sm:pt-0` for mobile top padding

**Status:** ✅ CODE COMPLETE - Ready for testing

**Estimated Time:** 30-45 minutes

---

### 🟠 PHASE 2: HERO BLUR REDUCTION (Issue #2)
**Research First:** Tailwind blur utilities documentation

**Tasks:**
1. ✅ Review Tailwind blur classes
2. ✅ Change from blur-3xl to blur-xl (less blur)
3. ⏳ Test if image recognizable
4. ⏳ User verification

**Code Changes Made:**
- Changed `blur-3xl` (40px) → `blur-xl` (16px) in hero background image
- Kept opacity-70 and scale-125 for good effect

**Status:** ✅ CODE COMPLETE - Ready for testing

**Estimated Time:** 15-20 minutes

---

### 🟡 PHASE 3: BLOG IMAGES FIXING (Issue #3)
**Research First:** Next.js Image component, Tailwind responsive utilities

**Tasks:**

#### 3A. Center Images
1. ⏳ Reduce max-height from 70vh to 50-60vh
2. ⏳ Keep blurred background frame for desktop 1024px+
3. ⏳ Remove ALL frame/blur/padding on mobile
4. ⏳ Test responsive behavior

#### 3B. Create Two Parallel Images Example
1. ⏳ Add ImagePair component to one blog MDX file
2. ⏳ Use existing blog images
3. ⏳ Test side-by-side desktop, stacked mobile

#### 3C. Floating Images (text-wrap)
1. ⏳ Remove blurred background box
2. ⏳ Add minimal padding OR remove padding entirely
3. ⏳ Desktop: Natural flow with text
4. ⏳ Mobile: Plain simple no frame/blur/padding
5. ⏳ Test responsive behavior

**Estimated Time:** 45-60 minutes

---

### 🔵 PHASE 4: DARK MODE GLOBAL FIXES (Issue #4)
**Research First:** Tailwind dark mode documentation, class strategy

**Tasks:**

#### 4A. Blog Home Page
1. ⏳ Fix "Blog" title - add dark:text-white
2. ⏳ Fix card titles - add dark:text-white
3. ⏳ Fix card backgrounds - keep lighter in dark mode
4. ⏳ Test at different screens

#### 4B. Main Home - About Section
1. ⏳ Title "About me" - add dark:text-white
2. ⏳ Subheading lines - add dark:border-white or dark:bg-white
3. ⏳ Text "I'm Vikas..." - add dark:text-white or dark:text-gray-200
4. ⏳ Test visibility

#### 4C. Main Home - Skills Section
1. ⏳ Add dark background class (dark:bg-gray-800 or dark:bg-gray-900)
2. ⏳ Fix text colors for dark mode
3. ⏳ Test alternating pattern still works

#### 4D. Main Home - Journey Section
1. ⏳ Fix card backgrounds and text colors
2. ⏳ Ensure crimson hover still works
3. ⏳ Test responsiveness

#### 4E. Main Home - Achievements Section
1. ⏳ Fix gradient cards text colors
2. ⏳ Ensure readability in dark mode
3. ⏳ Test all achievement cards

#### 4F. Main Home - Non-Profit Work Section
1. ⏳ Fix text colors
2. ⏳ Fix card backgrounds
3. ⏳ Test visibility

#### 4G. Main Home - Social Activities Section
1. ⏳ Fix text colors
2. ⏳ Fix card backgrounds
3. ⏳ Test visibility

#### 4H. Main Home - Services Section
1. ⏳ Fix service card text colors
2. ⏳ Fix backgrounds
3. ⏳ Test hover states

#### 4I. Main Home - Contact Section
1. ⏳ Fix form styling in dark mode
2. ⏳ Fix text colors
3. ⏳ Test form functionality

**Estimated Time:** 2-3 hours (largest task)

---

### 🟢 PHASE 5: SHARE FUNCTIONALITY TESTING (Issue #5)
**Research First:** Facebook Sharer API documentation

**Tasks:**
1. ⏳ Research Facebook Sharer proper parameters
2. ⏳ Test copy link on actual mobile device
3. ⏳ Test Facebook share on actual device
4. ⏳ Test native share on iOS/Android
5. ⏳ Document what works and what doesn't
6. ⏳ Update code if fixes found

**Estimated Time:** 1 hour + device testing time

---

## 🎯 EXECUTION PLAN

**Session 1 (Current):**
- Phase 1: Navbar & Alignment fixes ✅
- Phase 2: Hero blur reduction ✅

**Session 2:**
- Phase 3: Blog images fixing ✅

**Session 3:**
- Phase 4A-4C: Blog home + About + Skills dark mode ✅

**Session 4:**
- Phase 4D-4I: Remaining sections dark mode ✅

**Session 5:**
- Phase 5: Share functionality research and testing ✅

---

## 📝 RESEARCH RESOURCES NEEDED

**Tailwind CSS:**
- Container and max-width utilities
- Blur utilities (blur-sm through blur-3xl)
- Dark mode class strategy
- Responsive design breakpoints

**Next.js:**
- Image component best practices
- SSR and client components for theme switching

**Facebook:**
- Sharer API documentation
- Proper URL parameters for title/description

**Links:**
- https://tailwindcss.com/docs/max-width
- https://tailwindcss.com/docs/blur
- https://tailwindcss.com/docs/dark-mode
- https://nextjs.org/docs/app/api-reference/components/image
- https://developers.facebook.com/docs/sharing/reference/share-dialog

---

---

## ✅ COMPLETED FIXES (Previously Verified)

### ✅ Top Share Icons Enlarged
**File:** `app/components/TopShareButtons.tsx`  
**Implementation:** w-7 sm:w-9 lg:w-12 with proper colors

### ✅ LinkedIn Share Added
**Implementation:** Added to both TopShareButtons and SocialShare  
**Color:** #0A66C2

### ✅ Dark Mode CSS Framework Added
**File:** `app/globals.css`  
**Note:** Needs fixes for all pages (see Issue #4)

---

## 📋 FINAL TESTING CHECKLIST

### Before Marking Any Task Complete:
- [ ] Code changes made
- [ ] Tested at ALL required breakpoints
- [ ] User verified functionality
- [ ] Screenshots/video proof if needed
- [ ] Updated this file with ✅ status

### Before Deployment:
- [ ] ALL critical issues (Issue #1-#4) fixed and verified
- [ ] Navbar alignment perfect at all breakpoints
- [ ] Hero blur looks good (recognizable image)
- [ ] Blog images sized correctly (desktop + mobile different)
- [ ] Dark mode works on ALL pages without text visibility issues
- [ ] Share functionality tested on actual devices
- [ ] No console errors
- [ ] Build passes
- [ ] User approval obtained

---

**END OF FIXES TRACKER**  
**Next Update:** After completing Phase 1 (Navbar & Alignment)
