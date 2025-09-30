# AI Text Agent Landing Page

A beautiful, modern landing page for your AI text agent chatbot, designed to be hosted on GitHub Pages.

## Features

- 🎨 **Modern Design**: Clean, elegant UI with smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Loading**: Lightweight and optimized for performance
- 🤖 **Chatbot Ready**: Placeholder section for n8n integration
- 🔗 **LinkedIn Integration**: Contact button in footer
- ✨ **Interactive Elements**: Hover effects, animations, and smooth scrolling

## Quick Start

1. **Clone or download** this repository
2. **Update the LinkedIn URL** in `index.html` (line 246):
   ```html
   <a href="https://linkedin.com/in/yourprofile" target="_blank" class="linkedin-btn">
   ```
3. **Deploy to GitHub Pages**:
   - Push to a GitHub repository
   - Go to Settings → Pages
   - Select source branch (usually `main`)
   - Your site will be available at `https://yourusername.github.io/repository-name`

## Integrating Your n8n Chatbot

To add your n8n embedded chatbot:

1. **Find the placeholder section** in `index.html` (around line 180-195):
   ```html
   <div class="chatbot-placeholder">
       <!-- Replace this entire div with your n8n embed code -->
   </div>
   ```

2. **Replace with your n8n embed code**:
   ```html
   <div class="chatbot-container">
       <!-- Your n8n embedded chatbot iframe or script goes here -->
       <iframe src="your-n8n-chatbot-url" width="100%" height="500px" frameborder="0"></iframe>
   </div>
   ```

3. **Update CSS** if needed in `styles.css` (around line 400):
   ```css
   .chatbot-container {
       width: 100%;
       max-width: 600px;
       border-radius: 16px;
       overflow: hidden;
       box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
   }
   ```

## Customization

### Colors
The main color scheme uses:
- Primary Blue: `#2563eb`
- Secondary Purple: `#667eea` to `#764ba2`
- Accent Gold: `#f59e0b` to `#fbbf24`

### Fonts
Uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Modify the font-family in `styles.css`

### Content
- Update company name, description, and features in `index.html`
- Modify the hero section text to match your specific use case
- Add your actual statistics in the stats section

### Images
To add a logo or hero image:
1. Add images to an `assets` or `images` folder
2. Update the HTML to reference your images
3. Ensure images are optimized for web

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight (~50KB total)
- Uses system fonts as fallback
- Optimized CSS and JavaScript
- Lazy loading for animations

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing this landing page or integrating your chatbot, feel free to reach out via the LinkedIn contact button on the site!

---

**Note**: Remember to update your LinkedIn profile URL in the footer before deploying!