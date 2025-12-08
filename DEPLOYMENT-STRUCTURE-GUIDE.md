# Repository Structure Guide

**Current Situation:** Your Next.js project is inside your static website repository.

**Problem:** Vercel expects the Next.js project at the repository root.

---

## 🎯 SOLUTION OPTIONS

### **Option A: New Separate Repository (RECOMMENDED)**

Create a dedicated repository for your Next.js portfolio:

```bash
# Navigate to the Next.js folder
cd "c:\Users\Acer\OneDrive\Desktop\vikassingh\portfolio-nextjs"

# Initialize new Git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Next.js portfolio with blog"

# Create new repository on GitHub named "portfolio-nextjs"
# Then add the remote:
git remote add origin https://github.com/vsingh2110/portfolio-nextjs.git

# Push to GitHub
git push -u origin main
```

**Then deploy to Vercel:**
1. Go to vercel.com
2. Import the NEW `portfolio-nextjs` repository
3. Deploy (it will work automatically!)

**Advantages:**
✅ Clean separation of static and Next.js versions
✅ Vercel auto-detects everything
✅ No configuration needed
✅ Easier to manage

---

### **Option B: Monorepo with Root Directory Config**

Keep both in the same repo but tell Vercel where to find the Next.js project:

**In Vercel Dashboard:**
1. When importing project, click "Configure Project"
2. Set **Root Directory** to: `portfolio-nextjs`
3. Deploy

**Advantages:**
✅ Keep everything in one repo
✅ Preserve Git history

**Disadvantages:**
⚠️ Slightly more complex
⚠️ Need to configure Vercel each time

---

### **Option C: Move Next.js to Root**

Restructure your repository:

```bash
# Go to repo root
cd "c:\Users\Acer\OneDrive\Desktop\vikassingh"

# Create a "static-site" folder for old files
New-Item -ItemType Directory -Name "static-site" -Force

# Move static files to subfolder
Move-Item index.html static-site/
Move-Item style.css static-site/
Move-Item script.js static-site/
Move-Item package.json static-site/
Move-Item sandbox.config.json static-site/

# Move Next.js files to root
Move-Item portfolio-nextjs/* . -Force

# Remove empty folder
Remove-Item portfolio-nextjs -Force

# Commit changes
git add .
git commit -m "Restructure: Move Next.js to root, archive static site"
git push
```

**Advantages:**
✅ Vercel works automatically
✅ One repository

**Disadvantages:**
⚠️ Breaks existing structure
⚠️ Static site becomes secondary

---

## 🎯 MY RECOMMENDATION

**Option A: New Separate Repository**

**Why?**
1. Cleanest solution
2. No need to mess with existing repo
3. Vercel deployment is straightforward
4. You can keep both versions live
5. No configuration hassles

**Steps:**
```bash
# 1. Navigate to Next.js folder
cd "c:\Users\Acer\OneDrive\Desktop\vikassingh\portfolio-nextjs"

# 2. Initialize Git
git init

# 3. Add files
git add .

# 4. Commit
git commit -m "Initial commit: Next.js portfolio with blog functionality"

# 5. Create new repo on GitHub (browser):
#    - Go to github.com
#    - Click "New repository"
#    - Name: "portfolio-nextjs"
#    - Don't initialize with README (you already have files)
#    - Create repository

# 6. Add remote (replace with YOUR repo URL)
git remote add origin https://github.com/vsingh2110/portfolio-nextjs.git

# 7. Push
git push -u origin main
```

**Then deploy:**
1. Go to vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select "portfolio-nextjs" repository
5. Click "Deploy"
6. Done! ✅

---

## 📁 FINAL STRUCTURE (Option A)

**Old Repo (vikassingh):**
```
vikassingh/  (static website)
├── index.html
├── style.css
├── script.js
└── (keep as is)
```

**New Repo (portfolio-nextjs):**
```
portfolio-nextjs/  (Next.js app)
├── app/
├── public/
├── documentation/
├── package.json
├── .nvmrc  (Node.js 20)
├── vercel.json
└── (all Next.js files)
```

---

## 🔧 FILES ALREADY CONFIGURED FOR VERCEL

I've already created these files in your `portfolio-nextjs` folder:

1. **`.nvmrc`** - Tells Vercel to use Node.js 20
   ```
   20
   ```

2. **`vercel.json`** - Vercel configuration
   ```json
   {
     "buildCommand": "npm run build",
     "framework": "nextjs"
   }
   ```

3. **`package.json`** - Updated with Node.js engine
   ```json
   "engines": {
     "node": ">=20.x"
   }
   ```

These files ensure:
✅ No Node.js 18 warnings
✅ Vercel uses Node.js 20 or newer
✅ Build works correctly

---

## ⚡ QUICK START (OPTION A)

Copy-paste these commands:

```powershell
# Navigate to Next.js folder
cd "c:\Users\Acer\OneDrive\Desktop\vikassingh\portfolio-nextjs"

# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Next.js portfolio with blog"

# Open GitHub in browser to create new repo
Start-Process "https://github.com/new"

# After creating repo on GitHub, add remote (UPDATE THIS URL!)
git remote add origin https://github.com/vsingh2110/portfolio-nextjs.git

# Push to GitHub
git push -u origin main
```

Then:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Select "portfolio-nextjs" repository
4. Click "Deploy"

**That's it!** ✅

---

## 🐛 TROUBLESHOOTING

### "fatal: not a git repository"
- Make sure you're in `portfolio-nextjs` folder
- Run `git init` first

### "Repository not found" when pushing
- Make sure you created the repo on GitHub
- Check the remote URL: `git remote -v`
- Update if needed: `git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`

### Vercel build fails with Node.js 18 warning
- Check `.nvmrc` file exists (I created it)
- Check `package.json` has `"engines"` field (I added it)
- Vercel will use Node.js 20+ automatically

### Can't find Next.js project on Vercel
- Make sure you imported the correct repository
- If using Option B (monorepo), set Root Directory to `portfolio-nextjs`

---

## ✅ WHAT I'VE CONFIGURED

In your `portfolio-nextjs` folder:

1. ✅ **`.nvmrc`** - Node.js 20 (Vercel will use this)
2. ✅ **`vercel.json`** - Build configuration
3. ✅ **`package.json`** - Node.js engine requirement
4. ✅ **Build tested** - Passes with Next.js 14.2.33
5. ✅ **Security** - Safe from CVE-2025-55182

**Your project is ready to deploy with Node.js 20+. No warnings!** 🎉

---

## 📞 NEED HELP?

Choose Option A (new repo) and follow the commands above. It's the simplest and cleanest solution.

After deployment, you'll get:
- ✅ No Node.js warnings
- ✅ Fast builds
- ✅ Auto-deployment on Git push
- ✅ Free HTTPS
- ✅ SEO-enabled domain

---

**Last Updated:** December 9, 2025  
**Node.js Version Configured:** 20+  
**Status:** Ready for Deployment
