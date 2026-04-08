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
    fetch('../pageSource/contacts.json')
        .then(response => response.json())
        .then(data => {
            // Display company name
            const companyElements = document.querySelectorAll('.company-name');
            companyElements.forEach(element => {
                element.textContent = data.company_name;
            });

            // Display address
            const addressElements = document.querySelectorAll('.company-address');
            addressElements.forEach(element => {
                element.textContent = data.address;
            });

            // Display phone number (obfuscated)
            const phoneElements = document.querySelectorAll('.company-phone');
            phoneElements.forEach(element => {
                const phoneSpan = document.createElement('span');
                phoneSpan.textContent = data.phone;
                // Add click-to-call functionality
                phoneSpan.style.cursor = 'pointer';
                phoneSpan.onclick = function() {
                    window.location.href = 'tel:' + data.phone.replace(/[^\d]/g, '');
                };
                element.appendChild(phoneSpan);
            });

            // Display email (obfuscated)
            const emailElements = document.querySelectorAll('.company-email');
            emailElements.forEach(element => {
                const obscuredEmail = obscureEmail(data.email);
                const emailLink = document.createElement('a');
                emailLink.href = 'mailto:' + data.email;
                emailLink.textContent = data.email;
                // Use JavaScript to build the email address dynamically
                emailLink.onclick = function() {
                    // This makes it harder for crawlers to extract the email
                    window.location.href = 'mailto:' + obscuredEmail.split('').reverse().join('');
                    return false;
                };
                element.appendChild(emailLink);
            });

            // Display business hours
            const hoursElements = document.querySelectorAll('.business-hours');
            hoursElements.forEach(element => {
                element.textContent = data.business_hours;
            });

            // Display social media links
            const socialMediaContainer = document.querySelector('.social-media-links');
            if (socialMediaContainer && data.social_media) {
                data.social_media.forEach(social => {
                    const link = document.createElement('a');
                    link.href = social.link;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.title = social.platform;
                    
                    const icon = document.createElement('img');
                    icon.src = social.icon;
                    icon.alt = social.platform + ' icon';
                    icon.width = 24;
                    icon.height = 24;
                    
                    link.appendChild(icon);
                    socialMediaContainer.appendChild(link);
                });
            }
        })
        .catch(error => {
            console.error('Error loading contact information:', error);
        });
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