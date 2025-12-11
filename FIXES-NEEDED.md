# Comprehensive Fixes Needed - December 11, 2025

## Summary of Issues from User Screenshots

### 1. Back Button Alignment (SS1, SS2)
- ❌ Not aligned properly on mobile and 1280px+ screens
- ✅ SOLUTION: Already updated padding to match article container

### 2. Top Share Icons (SS3)
**Current State:**
- Icons are w-4 h-4 (too small)
- Colors show only on hover (gray-500 default)
- Missing Email icon
- Missing Copy Link icon
- Missing Native Share icon

**Required Changes:**
- Desktop: w-7 sm:w-9 lg:w-12 (much bigger)
- Mobile: w-7 sm:w-9
- WhatsApp: text-[#25D366] (normal), hover:text-[#1ea952]
- Facebook: text-[#1877F2] (normal), hover:text-[#145dbf]
- Twitter: text-black (normal), hover:text-gray-700
- Email: text-gray-700 (normal), hover:text-gray-900
- Copy Link: text-gray-600 (normal), hover:text-gray-800
- Native Share: text-gray-700 (normal), hover:text-gray-900
- Add gap-3 between icons

### 3. Facebook Share Links
**Current:** 
```
https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}
```

**Required:**
```
https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}&quote=${encodeURIComponent(post.title)}
```

### 4. Hero Blurred Background (SS4)
**Current:**
- `blur-2xl opacity-30` - looks gray, not blurred image

**Required:**
- `blur-3xl opacity-50` - more visible blur
- Add `priority` prop to background image

### 5. Citation Text Sizes (SS5)
**Issue:** Link text appears smaller than paragraph text

**Current:**
- `p`: text-[10px] sm:text-xs md:text-sm
- `a`: text-[10px] sm:text-xs md:text-sm
- `li`: text-xs sm:text-sm md:text-base (MISMATCH!)

**Required:**
- Make `li` match `p` and `a`: text-[10px] sm:text-xs md:text-sm

### 6. Bottom Share Section (SocialShare.tsx)
**Add Native Share API button** with title and URL

## Files to Modify

1. `app/blog/[lang]/[slug]/page.tsx` - Top share icons, hero blur, back button
2. `app/components/SocialShare.tsx` - Add native share button, fix Facebook

## Next Steps

User wants ALL fixes done at once. Create comprehensive replacement code for both files.
