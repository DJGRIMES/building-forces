#!/bin/bash

# Add component styles
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "/* Buttons */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".cta-button {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  display: inline-block;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  padding: var(--spacing-sm) var(--spacing-md);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  border-radius: var(--border-radius);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  text-decoration: none;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  font-weight: 600;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  transition: background-color 0.3s;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".cta-button.primary {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  background-color: var(--primary-color);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  color: var(--white);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".cta-button.secondary {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  background-color: var(--light-gray);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  color: var(--secondary-color);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".cta-button:hover {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  opacity: 0.9;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "/* Cards */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".service-card {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  background: var(--white);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  border-radius: var(--border-radius);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  padding: var(--spacing-lg);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  box-shadow: var(--box-shadow);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  text-align: center;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".service-icon {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  font-size: var(--font-size-xl);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  margin-bottom: var(--spacing-md);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "/* Hero Section */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".hero {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  padding: var(--spacing-xl) var(--spacing-md);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  background-color: var(--light-gray);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  color: var(--secondary-color);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".hero-content {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  max-width: 800px;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  margin: 0 auto;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  text-align: center;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".hero-buttons {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  display: flex;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  gap: var(--spacing-md);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  justify-content: center;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  margin-top: var(--spacing-lg);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "/* Welcome Links Section */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".welcome-links {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  padding: var(--spacing-xl) var(--spacing-md);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  background-color: var(--white);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".welcome-links-grid {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  display: grid;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  gap: var(--spacing-lg);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  max-width: 1200px;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  margin: 0 auto;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css