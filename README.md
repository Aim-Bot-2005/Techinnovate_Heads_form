# TECHINNOVATE - BVCOE Robotics Society Website

A modern, responsive website for the TECHINNOVATE robotics society at Bharati Vidyapeeth College of Engineering (BVCOE). This website features a robotics theme with smooth animations, interactive elements, and a Google Form integration.

## 🚀 Features

### Design & Theme
- **Robotics Theme**: Dark background with cyan and magenta gradients
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with futuristic elements
- **Smooth Animations**: CSS animations and JavaScript interactions

### Interactive Elements
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Hover Effects**: Interactive buttons, cards, and social links
- **Parallax Effects**: Floating robots and tech sphere animations
- **Scroll Animations**: Elements fade in as you scroll
- **Particle Effects**: Background particles for enhanced visual appeal

### Sections
1. **Hero Section**: Eye-catching introduction with animated title
2. **About Section**: Information about the society and its features
3. **Join Section**: Google Form integration for membership
4. **Contact Section**: Contact information and social links
5. **Footer**: Society branding and copyright

### Technical Features
- **Cross-browser Compatible**: Works on all modern browsers
- **Performance Optimized**: Throttled scroll events and efficient animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Touch Support**: Mobile touch gestures and swipe detection

## 🛠️ Setup Instructions

### 1. Google Form Setup

To integrate your own Google Form:

1. **Create a Google Form**:
   - Go to [Google Forms](https://forms.google.com)
   - Create a new form with fields like:
     - Name
     - Email
     - Phone Number
     - Department/Branch
     - Year of Study
     - Why do you want to join?
     - Previous experience (if any)
     - Preferred areas of interest (Robotics, AI, Automation, etc.)

2. **Get the Embed Code**:
   - Click "Send" in your Google Form
   - Select the "Embed" tab
   - Copy the iframe code

3. **Update the Website**:
   - Open `index.html`
   - Find the iframe in the join section (around line 108)
   - Replace the placeholder URL with your Google Form embed URL

```html
<!-- Replace this line in index.html -->
<iframe 
    src="YOUR_GOOGLE_FORM_EMBED_URL_HERE" 
    width="100%" 
    height="600" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
    Loading…
</iframe>
```

### 2. Customization

#### Colors and Theme
- Main colors: Cyan (#00ffff) and Magenta (#ff00ff)
- Background: Dark gradient from black to navy blue
- All colors can be customized in `styles.css`

#### Logo
- The website uses `techinnovate_logo.svg` from your workspace
- Logo appears in navigation and footer
- Can be replaced with any SVG or image file

#### Content
- Update text content in `index.html`
- Modify contact information
- Add/remove social media links

### 3. Deployment

#### Local Development
1. Open `index.html` in a web browser
2. All files should be in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `techinnovate_logo.svg`

#### Web Hosting
Upload all files to your web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting provider

## 📁 File Structure

```
techinnovate/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── techinnovate_logo.svg  # Society logo
└── README.md           # This file
```

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #00ffff;
--secondary-color: #ff00ff;
--background-dark: #0a0a0a;
--background-light: #1a1a2e;
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add scroll animations in `script.js`

### Modifying Animations
- Animation durations and effects are in `styles.css`
- JavaScript animations are in `script.js`
- Particle effects can be customized in the JavaScript file

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **Optimized Images**: SVG logo for crisp display
- **Throttled Events**: Scroll events are throttled for performance
- **Lazy Loading**: Elements animate in as they come into view
- **Minimal Dependencies**: Only uses Font Awesome for icons

## 📞 Support

For technical support or customization requests:
- Contact the TECHINNOVATE team
- Email: techinnovate@bvcoe.edu.in

## 📄 License

© 2024 TECHINNOVATE - BVCOE. All rights reserved.

---

**Built with ❤️ for TECHINNOVATE Society**
