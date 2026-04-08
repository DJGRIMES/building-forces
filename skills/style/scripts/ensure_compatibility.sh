#!/bin/bash

# Add CSS reset and vendor prefixes
echo "/* Simple CSS Reset */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "* {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  margin: 0;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  padding: 0;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  box-sizing: border-box;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "/* Vendor Prefixes */" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo ".hero {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  display: -webkit-box;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  display: -ms-flexbox;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  display: flex;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css