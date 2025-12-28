# Vercel Deployment Guide - NnovityWorks

## 🚀 Quick Start

### Prerequisites
- Vercel account (sign up at https://vercel.com)
- GitHub/GitLab/Bitbucket account (for automatic deployments)
- Custom domain (optional but recommended)

---

## 📋 Step-by-Step Deployment

### 1. **Prepare Your Repository**
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. **Deploy to Vercel**

#### Option A: Via Vercel Dashboard (Recommended)
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 3. **Configure Custom Domain**

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `nnovityworks.com`)
4. Follow DNS configuration instructions:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to your Vercel deployment
5. SSL certificate is automatically provisioned by Vercel

### 4. **Environment Variables** (if needed)
If you have any environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

---

## ⚙️ Configuration Files

### `vercel.json`
Already configured with:
- ✅ SPA routing (all routes redirect to index.html)
- ✅ Security headers
- ✅ Cache optimization
- ✅ Proper MIME types for sitemap.xml and robots.txt

### Build Settings
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## 🔍 Post-Deployment Checklist

### 1. **Verify Deployment**
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Forms work correctly

### 2. **SEO Verification**
- [ ] Verify sitemap.xml: `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`
- [ ] Test structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console

### 3. **Google Search Console Setup**
1. Go to https://search.google.com/search-console
2. Add your property (custom domain)
3. Verify ownership (Vercel provides DNS verification)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 4. **Google Analytics** (Optional)
1. Create Google Analytics 4 property
2. Add tracking code to your site
3. Verify tracking is working

### 5. **Performance Testing**
- [ ] Test with Google PageSpeed Insights
- [ ] Test with GTmetrix
- [ ] Verify Core Web Vitals

---

## 🔧 Troubleshooting

### Issue: 404 Errors on Routes
**Solution:** The `vercel.json` already includes SPA routing rewrite rules. If issues persist, ensure the rewrite rule is correct.

### Issue: Sitemap Not Found
**Solution:** Ensure `sitemap.xml` is in the `public` folder and will be copied to `dist` during build.

### Issue: Images Not Loading
**Solution:** 
- Check image paths (use absolute paths or `/` for public folder)
- Ensure images are in `public` folder
- Verify build output includes images

### Issue: Build Fails
**Solution:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build` locally

---

## 📊 Monitoring & Analytics

### Vercel Analytics
- Enable Vercel Analytics in project settings
- View real-time analytics in Vercel dashboard

### Performance Monitoring
- Use Vercel's built-in performance monitoring
- Set up alerts for deployment failures

---

## 🔄 Continuous Deployment

Vercel automatically deploys on:
- Push to main branch (production)
- Push to other branches (preview deployments)
- Pull requests (preview deployments)

### Branch Strategy
- `main` → Production deployment
- `develop` → Preview deployment
- Feature branches → Preview deployments

---

## 🎯 SEO Post-Deployment Tasks

1. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

2. **Verify Structured Data**
   - Use Google Rich Results Test
   - Fix any errors

3. **Monitor Indexing**
   - Check Google Search Console for indexing status
   - Monitor crawl errors

4. **Optimize Performance**
   - Monitor Core Web Vitals
   - Optimize images if needed
   - Enable Vercel's Edge Caching

---

## 📞 Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: support@vercel.com
- Community: https://github.com/vercel/vercel/discussions

---

## ✅ Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] Vercel project created
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Google Search Console configured
- [ ] Structured data verified
- [ ] All pages loading correctly
- [ ] Forms working
- [ ] Analytics configured (optional)

---

**Ready to deploy? Follow the steps above and your site will be live in minutes! 🚀**

