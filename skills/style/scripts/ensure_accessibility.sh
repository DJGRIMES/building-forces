#!/bin/bash

# Add focus states for accessibility
echo "a:focus, button:focus {" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  outline: 2px solid var(--primary-color);" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "  outline-offset: 2px;" >> /home/dustin/Projects/TomHandy/dist/css/styles.css
echo "}" >> /home/dustin/Projects/TomHandy/dist/css/styles.css