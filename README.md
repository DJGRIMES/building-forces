# Building Forces Website

A static website for Building Forces, providing property management and handyman services in Lansing, MI.

## Website Structure

```
dist/
├── index.html          # Landing page with navigation
├── home.html           # Main home page
├── services.html       # Services overview
├── homeowner.html      # Services for homeowners
├── investor.html       # Services for investors/landlords
├── contact.html        # Contact information and form
├── includes/           # Reusable components
│   ├── header.html     # Header with navigation (auto active link)
│   └── footer.html     # Footer with consistent layout
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── script.js       # Basic JavaScript functionality
│   └── includes.js     # Handles loading header/footer
└── assets/             # Placeholder for images
```

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern Styling**: Clean, professional design with consistent branding
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Easy Navigation**: Clear navigation menu across all pages
- **Contact Form**: Functional contact form for lead generation
- **Service Pages**: Dedicated pages for different customer types
- **Service Grid**: Beautiful grid layout for service cards with hover effects
- **Comprehensive Services**: Detailed service descriptions with key points
- **Enhanced Visual Design**: Orange color scheme, service icons, hero section with background images
- **Interactive Elements**: Hover animations, smooth transitions, sticky navigation
- **Professional Footer**: Multi-column footer with quick links and social media
- **Service Icons**: Visual icons for each service category
- **Component-Based Architecture**: Reusable header and footer includes for consistency
- **Automatic Active Navigation**: JavaScript automatically highlights current page in navigation
- **Dynamic Content Loading**: Header and footer loaded via JavaScript for easy maintenance

## Color Palette

- **Primary Orange**: `#FF8C00` (Headings, buttons, accents)
- **Secondary Gray**: `#6C757D` (Text, backgrounds)
- **Light Gray**: `#F8F9FA` (Backgrounds, borders)
- **White**: `#FFFFFF` (Backgrounds, text)

## Typography

- **Primary Font**: 'Open Sans', sans-serif (body text)
- **Secondary Font**: 'Roboto', sans-serif (headings and buttons)

## How to Use

1. Open `index.html` in your browser to access the landing page
2. Navigate through the different sections using the menu
3. The contact form is functional (displays alert on submission)
4. All pages are linked together with consistent navigation

## Development

To modify the website:

1. **Edit Content**: Modify the HTML files in the `dist/` directory (main content only)
2. **Update Styles**: Edit `dist/css/styles.css` for global styling changes
3. **Modify Components**: Edit `dist/includes/header.html` or `dist/includes/footer.html` for consistent changes
4. **Add JavaScript**: Extend functionality in `dist/js/script.js` or `dist/js/includes.js`
5. **Add Assets**: Place images in `dist/assets/` directory

### Component-Based Workflow:

- **Header**: Edit `dist/includes/header.html` - changes automatically apply to all pages
- **Footer**: Edit `dist/includes/footer.html` - changes automatically apply to all pages
- **Navigation**: The header includes automatic active link detection based on current page
- **Styling**: All pages share the same CSS for consistent branding

### Adding New Pages:

1. Create new HTML file in `dist/` following the same structure
2. Use `<header-placeholder></header-placeholder>` where header should appear
3. Use `<footer-placeholder></footer-placeholder>` where footer should appear
4. Include both JavaScript files: `js/includes.js` and `js/script.js`

### Testing the Includes System:

A test file is available at `test_includes.html` that verifies:
- Header is loaded correctly
- Footer is loaded correctly  
- Active navigation link is set automatically
- Console logs show loading status

To test:
1. Open `test_includes.html` in your browser
2. Check browser console for success messages
3. Verify header navigation and footer appear
4. Click the test button to confirm functionality

## Services Offered

The website now showcases the following comprehensive handyman services:

- **Building and Carpentry**: Custom cabinetry, furniture assembly, structural repairs
- **Painting Services**: Interior and exterior painting, accent walls
- **Renovations & Restoration**: Kitchen remodels, bathroom remodels, historical restorations
- **Drywall/plaster install and repair**: Installation, repair, and finishing
- **Carpet cleaning**: Deep cleaning, stain removal, odor elimination

## Source Data

The website content was generated from JSON files located in:
- `/home/dustin/Projects/TomHandy/Source/pageSource/`

These JSON files contain the page structure, content, and metadata used to generate the static HTML pages. The services.json file was recently updated to reflect the comprehensive handyman services now offered.