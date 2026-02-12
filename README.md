# Berry Home Improvements Website

A professional concrete services website for Berry Home Improvements, serving Salt Lake & Utah Counties.

## 🚀 Quick Start

The website is now live and ready to use! You can view it in two ways:

### Option 1: Local Development Server
```bash
# Navigate to the project directory
cd /Users/spencerroberts/Desktop/bowka

# Start the local server
python3 -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

### Option 2: Open Directly
Simply open `index.html` in any web browser by double-clicking the file.

## 📁 Project Structure

```
bowka/
├── index.html          # Main website HTML
├── styles.css          # All styling and responsive design
├── script.js           # Interactive JavaScript features
├── assets/             # Images and other assets
└── README.md           # This file
```

## ✨ Features

### Professional Design
- **Modern Layout**: Clean, professional design optimized for concrete services
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Before/After sliders, FAQ accordion, smooth animations

### Key Sections
1. **Navigation**: Sticky header with logo and phone button
2. **Hero**: Service selection (Residential/Commercial) with trust badges
3. **Features**: Why choose Berry Home Improvements
4. **Before/After Slider**: Interactive project showcase with 4 projects
5. **Testimonials**: Customer reviews with verified badges
6. **Gallery**: Photo showcase of completed projects
7. **About**: Brady Berry & family mission statement
8. **FAQ**: Common questions about concrete services
9. **CTA**: Final call-to-action with service selection
10. **Footer**: Company information and legal links

### Interactive Elements
- ✅ Before/After image sliders (draggable)
- ✅ Project thumbnail selector
- ✅ Mobile carousel for before/after slides
- ✅ Accordion FAQ section
- ✅ Animated word reveals on headings
- ✅ Smooth scroll navigation
- ✅ Hover effects on cards and buttons
- ✅ Review widgets with avatars

### Mobile Optimized
- Touch-friendly interface
- Optimized layouts for small screens
- Mobile-specific carousel for before/after images
- Responsive navigation

## 🎨 Brand Colors

- **Warm Taupe**: `#8B7355` (Primary)
- **Steel Blue**: `#4A6B7C` (Secondary/CTA)
- **Charcoal Gray**: `#3D3D3D` (Text)
- **Off White**: `#F8F6F3` (Background)
- **Light Stone**: `#E8E4DE` (Sections)

## 📞 Contact Information

- **Phone**: (801) 580-8140
- **Service Area**: Salt Lake & Utah Counties
- **Services**: Concrete driveways, patios, foundations, sport courts, walkways

## 🔧 Customization

### Easy Updates

#### Change Phone Number
1. Open `index.html`
2. Search for "(801) 580-8140"
3. Replace with new number

#### Update Images
All images are currently hosted on Google Cloud Storage. To use your own:
1. Replace the image URLs in `index.html`
2. Or place images in the `assets/` folder and update paths

#### Modify Colors
1. Open `styles.css`
2. Edit the `:root` CSS variables at the top of the file
3. Changes will apply site-wide

#### Update Content
- **Testimonials**: Edit the testimonial cards in `index.html`
- **Services**: Modify feature cards
- **FAQ**: Update accordion items
- **About Section**: Change the mission statement text

## 🌐 Deployment

### Deploy to Web Hosting
1. Upload all files to your web hosting via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. All other files should maintain their relative paths

### Deploy to Go High Level
1. Create a new funnel page
2. Use custom HTML widget and paste `index.html` content
3. Add CSS via custom CSS section (paste `styles.css`)
4. Add JavaScript via custom JS section (paste `script.js`)
5. Upload images to GHL media library if needed

### Deploy to GitHub Pages
```bash
# Initialize git repo (if not already)
git init
git add .
git commit -m "Initial website setup"

# Push to GitHub
git remote add origin [your-repo-url]
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🎯 Analytics & Tracking

The website includes placeholder analytics tracking. To enable:

1. **Google Analytics**: Add your GA4 tracking code before `</head>` in `index.html`
2. **Event Tracking**: Built-in events for:
   - Phone button clicks
   - Project selections
   - Carousel navigation
   - Survey starts

## 🛠️ Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript**: No dependencies required
- **Font**: Google Fonts (Geist)
- **Compatible**: Chrome, Firefox, Safari, Edge (modern versions)

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## 🐛 Troubleshooting

### Images Not Loading
- Check that image URLs are accessible
- Verify paths if using local images
- Check browser console for errors

### JavaScript Not Working
- Ensure `script.js` is properly linked in `index.html`
- Check browser console for JavaScript errors
- Verify the script runs after DOM is loaded

### Styling Issues
- Clear browser cache
- Verify `styles.css` is properly linked
- Check for CSS specificity conflicts

## 📄 License

This website was created for Berry Home Improvements. All rights reserved.

## 🎉 What's Included

This is a complete, production-ready website with:
- ✅ Fully responsive design
- ✅ Interactive features (sliders, accordion, animations)
- ✅ Professional concrete services content
- ✅ Optimized performance
- ✅ Clean, maintainable code
- ✅ Mobile-first approach
- ✅ SEO-friendly structure

---

**Ready to go live!** The website is complete and ready for deployment. Simply upload to your hosting provider or integrate with Go High Level.

For questions or support, contact Brady Berry at (801) 580-8140.
