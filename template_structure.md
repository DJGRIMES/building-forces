# Standardized HTML Template Structure

## Base Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Building Forces</title>
    <meta name="description" content="Page description">
    <meta name="keywords" content="keywords">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@400;500&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header-placeholder></header-placeholder>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>🏡 Page Title</h1>
                <p class="subtitle">Subtitle/description</p>
                <div class="hero-buttons">
                    <!-- Primary CTA button -->
                    <a href="#" class="cta-button primary">Primary Action</a>
                    <!-- Secondary CTA button (optional) -->
                    <a href="#" class="cta-button secondary">Secondary Action</a>
                </div>
            </div>
        </section>

        <!-- Content Sections -->
        <section class="content-section">
            <h2>Section Title</h2>
            <p>Section description</p>
            <!-- Content goes here -->
        </section>

        <!-- Service Cards Section (if applicable) -->
        <section class="services-grid">
            <h2>Our Services</h2>
            <div class="services-grid-container">
                <div class="service-card">
                    <div class="service-icon">🔨</div>
                    <h3>Service Name</h3>
                    <p>Service description</p>
                    <!-- Optional CTA -->
                    <a href="#" class="cta-button">Learn More</a>
                </div>
                <!-- More service cards -->
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free estimate</p>
            <a href="contact.html" class="cta-button primary">Contact Us</a>
        </section>
    </main>

    <footer-placeholder></footer-placeholder>

    <script src="js/includes.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

## Key Standardization Rules

1. **Hero Section**: Always use `<div class="hero-content">` wrapper
2. **Buttons**: Use `cta-button` class with `primary` or `secondary` modifiers
3. **Service Cards**: Use consistent `service-card` structure with `service-icon`
4. **Section Naming**: Use clear, descriptive class names
5. **Font Imports**: Standardize to single import without duplicates
6. **Metadata**: Include title, description, and keywords in head
7. **CTA Sections**: Use consistent `cta-section` structure
8. **Spacing**: Use consistent spacing classes from CSS variables