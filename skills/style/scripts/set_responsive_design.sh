#!/bin/bash

# Add media queries for responsive design
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "/* Responsive Design */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "@media (max-width: 768px) {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  .hero h1 {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "    font-size: 2rem;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  }" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  .hero-buttons {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "    flex-direction: column;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "    align-items: center;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  }" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  .cta-button {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "    width: 100%;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "    margin-bottom: var(--spacing-sm);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  }" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "@media (max-width: 480px) {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  .hero-content {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "    padding: 0 var(--spacing-sm);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  }" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css