// Function to load header and footer includes
document.addEventListener('DOMContentLoaded', function() {
    loadIncludes();
});

function loadIncludes() {
    // Load header
    fetch('includes/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.querySelector('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = data;
                // Execute the header script after loading
                setActiveNavigation();
                console.log('Header loaded successfully');
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Create a fallback header
            const headerPlaceholder = document.querySelector('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = `
                    <header>
                        <div class="nav-container">
                            <a href="home.html" class="logo">Tom's Handyman</a>
                            <nav>
                                <ul>
                                    <li><a href="home.html">Home</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                `;
            }
        });

    // Load footer
    fetch('includes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.querySelector('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = data;
                console.log('Footer loaded successfully');
                // Load contact info after footer is loaded
                loadContactInfo();
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Create a fallback footer
            const footerPlaceholder = document.querySelector('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = `
                    <footer>
                        <div class="footer-content">
                            <p>&copy; 2023 Tom's Handyman Services. All rights reserved.</p>
                        </div>
                    </footer>
                `;
            }
        });
}

// Load contact information after footer is loaded
function loadContactInfo() {
    fetch('pageSource/contact_info.json')
        .then(response => response.json())
        .then(data => {
            // Set contact section emoji if it exists
            if (data.contact_section_emoji) {
                const sectionIcons = document.querySelectorAll('.contact-section-icon');
                sectionIcons.forEach(icon => {
                    icon.textContent = data.contact_section_emoji;
                });
            }

            // Fully dynamic contact info display - process all fields
            const contactList = document.querySelector('.contact-info-list');
            if (contactList) {
                // Clear any existing content
                contactList.innerHTML = '';

                // Define special field handlers with their display order
                const fieldDisplayOrder = [
                    'address',
                    'phone',
                    'email',
                    'business_hours',
                    'company_name'
                ];

                // Process fields in defined order
                fieldDisplayOrder.forEach(fieldName => {
                    if (data[fieldName]) {
                        createContactItem(contactList, fieldName, data[fieldName]);
                    }
                });

                // Process any additional fields not in the display order
                for (const [key, value] of Object.entries(data)) {
                    if (!fieldDisplayOrder.includes(key) && 
                        key !== 'contact_section_emoji' && 
                        typeof value === 'string' && 
                        !key.startsWith('_')) {
                        createContactItem(contactList, key, value);
                    }
                }
            }

            // Display social media and other links dynamically
            displayDynamicLinks(data);
        })
        .catch(error => {
            console.error('Error loading contact information:', error);
        });
    
}

// Create a contact information list item
function createContactItem(container, fieldName, value) {
    const listItem = document.createElement('li');
    
    // Format field name for display
    const displayName = formatFieldName(fieldName);
    
    // Handle special field types
    if (isPhoneNumber(value)) {
        // Phone number with click-to-call
        const phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = value;
        phoneSpan.style.cursor = 'pointer';
        phoneSpan.onclick = function() {
            const phoneNumber = extractPhoneNumber(value);
            window.location.href = 'tel:' + phoneNumber;
        };
        listItem.appendChild(phoneSpan);
    } else if (isEmailAddress(value)) {
        // Email address with obfuscation
        const emailText = extractEmailAddress(value);
        const obscuredEmail = obscureEmail(emailText);
        const emailLink = document.createElement('a');
        emailLink.href = 'mailto:' + emailText;
        emailLink.innerHTML = value;
        emailLink.onclick = function() {
            window.location.href = 'mailto:' + obscuredEmail.split('').reverse().join('');
            return false;
        };
        listItem.appendChild(emailLink);
    } else if (isWebUrl(value)) {
        // Web URL
        const link = document.createElement('a');
        link.href = extractUrl(value);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = value;
        listItem.appendChild(link);
    } else {
        // Standard text display
        listItem.innerHTML = value;
    }
    
    container.appendChild(listItem);
}

// Display dynamic links (social media, websites, etc.)
function displayDynamicLinks(data) {
    const socialMediaContainer = document.querySelector('.social-media-links');
    if (!socialMediaContainer) return;
    
    socialMediaContainer.innerHTML = '';
    
    // Look for any fields that contain URLs
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string' && isWebUrl(value)) {
            // Skip fields we've already handled as contact items
            const contactFields = ['address', 'phone', 'email', 'business_hours', 'company_name'];
            if (!contactFields.includes(key)) {
                const displayName = formatFieldName(key);
                createSocialLink(socialMediaContainer, extractUrl(value), displayName);
            }
        }
    }
    
    // Also populate contact page if we're on the contact page
    populateContactPage(data);
}

// Helper function to format field names for display
function formatFieldName(fieldName) {
    return fieldName
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

// Helper function to detect phone numbers
function isPhoneNumber(value) {
    return /[\d\-\(\)\+]/.test(value);
}

// Helper function to extract clean phone number
function extractPhoneNumber(value) {
    return value.replace(/[^\d]/g, '');
}

// Helper function to detect email addresses
function isEmailAddress(value) {
    return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value);
}

// Helper function to extract clean email address
function extractEmailAddress(value) {
    const match = value.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return match ? match[0] : value;
}

// Helper function to detect web URLs
function isWebUrl(value) {
    return /https?:\/\/[^\s]+/.test(value);
}

// Helper function to extract clean URL
function extractUrl(value) {
    const match = value.match(/https?:\/\/[^\s]+/);
    return match ? match[0] : value;
}



// Populate the contact page with dynamic contact information
function populateContactPage(data) {
    const contactDetailsContainer = document.querySelector('.contact-details-dynamic');
    if (!contactDetailsContainer) return;
    
    contactDetailsContainer.innerHTML = '';
    
    // Define display order for contact page
    const contactPageDisplayOrder = [
        { key: 'address', label: 'Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'email', label: 'Email' },
        { key: 'business_hours', label: 'Business Hours' },
        { key: 'website', label: 'Website' }
    ];
    
    // Create contact items in display order
    contactPageDisplayOrder.forEach(item => {
        if (data[item.key]) {
            createContactPageItem(contactDetailsContainer, item.label, data[item.key]);
        }
    });
    
    // Add any additional fields not in the display order
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string' && 
            !contactPageDisplayOrder.some(item => item.key === key) &&
            key !== 'contact_section_emoji' &&
            !key.startsWith('_')) {
            createContactPageItem(contactDetailsContainer, formatFieldName(key), value);
        }
    }
}

// Create a contact page item with proper formatting
function createContactPageItem(container, label, value) {
    const paragraph = document.createElement('p');
    
    const strong = document.createElement('strong');
    strong.textContent = label + ': ';
    
    paragraph.appendChild(strong);
    
    // Handle different value types
    if (isPhoneNumber(value)) {
        const phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = value;
        phoneSpan.style.cursor = 'pointer';
        phoneSpan.onclick = function() {
            const phoneNumber = extractPhoneNumber(value);
            window.location.href = 'tel:' + phoneNumber;
        };
        paragraph.appendChild(phoneSpan);
    } else if (isEmailAddress(value)) {
        const emailText = extractEmailAddress(value);
        const obscuredEmail = obscureEmail(emailText);
        const emailLink = document.createElement('a');
        emailLink.href = 'mailto:' + emailText;
        emailLink.innerHTML = value;
        emailLink.onclick = function() {
            window.location.href = 'mailto:' + obscuredEmail.split('').reverse().join('');
            return false;
        };
        paragraph.appendChild(emailLink);
    } else if (isWebUrl(value)) {
        const link = document.createElement('a');
        link.href = extractUrl(value);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = value;
        paragraph.appendChild(link);
    } else {
        const textSpan = document.createElement('span');
        textSpan.innerHTML = value;
        paragraph.appendChild(textSpan);
    }
    
    container.appendChild(paragraph);
}

// Unified function to create any type of link
function createSocialLink(container, url, displayName) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.title = displayName;
    link.textContent = displayName;
    link.style.marginRight = '15px';
    container.appendChild(link);
}

// Function to obscure email addresses
function obscureEmail(email) {
    // Simple obfuscation - reverse the string and use JavaScript to reverse it back
    return email.split('').reverse().join('');
}

// Set active navigation link based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const pageName = currentPage.replace('.html', '');
    const linkId = pageName + '-link';
    
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.getElementById(linkId) || document.getElementById('home-link');
    if (activeLink) {
        activeLink.classList.add('active');
    }
}