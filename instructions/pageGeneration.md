# Agent Instructions for Generating Building Forces Website

## **Objective:**
Generate static HTML pages for Building Forces website using the provided JSON files as a guide. Focus on simplicity, mobile-first design, and clear calls-to-action (CTAs).

## **Input:**
- JSON files located in `source/pageSource/` (e.g., `home.json`, `services.json`, `homeowner.json`, `investor.json`, `contact.json`, `contacts.json`, ect.).
- Images and other media referenced in the JSON files, stored in an `assets/` directory.
- Contact information from `contacts.json` for footer and contact sections.

## **Output:**
- Static HTML files for each page, saved in a `dist/` directory (e.g., `dist/index.html`, `dist/services.html`, `dist/contact.html`, ect.).
- CSS file(s) for styling, saved in `dist/css/`.
- JavaScript file(s) for functionality, saved in `dist/js/`.

## **Instructions:**

### **1. Parse the JSON Files**
For each JSON file in `source/pageSource/`, parse the content and extract the following:
- Page title and SEO metadata (meta title, description, keywords).
- Sections (e.g., hero, services overview, testimonials, CTAs).
- Text content, images, and other media.
- Calls-to-action (CTAs) and links.
- Contact information from `contacts.json` for footer and contact sections.

### **2. Generate HTML Pages**
Create an HTML file for each JSON file. Use the following structure as a template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title from JSON]</title>
    <meta name="description" content="[Meta Description from JSON]">
    <meta name="keywords" content="[Keywords from JSON]">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="homeowner.html">Homeowners</a></li>
                <li><a href="investor.html">Investors/Landlords</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Dynamic content goes here -->
    </main>

    <footer>
        <!-- Footer content (e.g., contact info, social media links) -->
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
