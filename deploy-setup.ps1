# Deploy Setup Script for Portfolio Next.js
# This script helps set up the repository structure for Vercel deployment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Portfolio Next.js - Deployment Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host "Checking current directory..." -ForegroundColor Yellow
$currentDir = Get-Location
Write-Host "Current location: $currentDir" -ForegroundColor Green
Write-Host ""

# Check if already in a git repository
$gitDir = Test-Path ".git"
if ($gitDir) {
    Write-Host "WARNING: This directory is already a Git repository!" -ForegroundColor Red
    Write-Host "This is the nested structure we discussed." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "RECOMMENDED: Create a new separate repository for Next.js project" -ForegroundColor Cyan
    Write-Host "See DEPLOYMENT-STRUCTURE-GUIDE.md for options" -ForegroundColor Cyan
    Write-Host ""
    
    $continue = Read-Host "Do you want to initialize a NEW Git repo here anyway? (yes/no)"
    if ($continue -ne "yes") {
        Write-Host "Setup cancelled. Please review DEPLOYMENT-STRUCTURE-GUIDE.md" -ForegroundColor Yellow
        exit 0
    }
    
    Write-Host ""
    Write-Host "Removing existing .git folder..." -ForegroundColor Yellow
    Remove-Item -Path ".git" -Recurse -Force
    Write-Host "Removed!" -ForegroundColor Green
}

Write-Host "Initializing new Git repository..." -ForegroundColor Yellow
git init
Write-Host "Git repository initialized!" -ForegroundColor Green
Write-Host ""

Write-Host "Checking for .gitignore file..." -ForegroundColor Yellow
if (-not (Test-Path ".gitignore")) {
    Write-Host "Creating .gitignore..." -ForegroundColor Yellow
    @"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
"@ | Out-File -FilePath ".gitignore" -Encoding utf8
    Write-Host ".gitignore created!" -ForegroundColor Green
} else {
    Write-Host ".gitignore already exists!" -ForegroundColor Green
}
Write-Host ""

Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .
Write-Host "Files added!" -ForegroundColor Green
Write-Host ""

Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Next.js portfolio with blog"
Write-Host "Commit created!" -ForegroundColor Green
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a NEW repository on GitHub" -ForegroundColor Yellow
Write-Host "   - Go to https://github.com/new" -ForegroundColor White
Write-Host "   - Repository name: portfolio-nextjs (or any name you prefer)" -ForegroundColor White
Write-Host "   - Make it Public or Private (your choice)" -ForegroundColor White
Write-Host "   - DO NOT initialize with README, .gitignore, or license" -ForegroundColor Red
Write-Host ""

Write-Host "2. After creating the repository, run these commands:" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""

Write-Host "3. Deploy to Vercel:" -ForegroundColor Yellow
Write-Host "   - Go to https://vercel.com/new" -ForegroundColor White
Write-Host "   - Import your GitHub repository" -ForegroundColor White
Write-Host "   - Vercel will auto-detect Next.js settings" -ForegroundColor White
Write-Host "   - Click Deploy!" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Press any key to open GitHub new repository page..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Start-Process "https://github.com/new"

Write-Host ""
Write-Host "Setup complete! Follow the steps above to finish deployment." -ForegroundColor Green
Write-Host ""
