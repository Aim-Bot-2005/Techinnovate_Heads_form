// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger lines
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Parallax effect for floating robots
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const robots = document.querySelectorAll('.robot');
    
    robots.forEach((robot, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        robot.style.transform = `translateY(${yPos}px)`;
    });
});

// Tech sphere rotation on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const techSphere = document.querySelector('.tech-sphere');
    
    if (techSphere) {
        const rotation = scrolled * 0.1;
        techSphere.style.transform = `rotate(${rotation}deg)`;
    }
});

// Circuit board animation on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circuitBoard = document.querySelector('.circuit-board');
    
    if (circuitBoard) {
        const opacity = Math.max(0.3, 1 - (scrolled * 0.001));
        circuitBoard.style.opacity = opacity;
    }
});

// Button hover effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature cards hover effect
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'translateY(0) scale(1)';
    });
});

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1) rotate(360deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Particle effect for background
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #00ffff;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: particle-float 10s linear infinite;
    `;
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 10000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Google Form handling
const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('.btn-primary');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;
        
        // Submit to Google Forms
        const formData = new FormData(this);
        fetch(this.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            // Show success message
            showNotification('Application submitted successfully! We\'ll get back to you soon.', 'success');
            
            // Replace form with thank you message and WhatsApp link
            showThankYouMessage();
            
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }).catch(() => {
            // Fallback: submit using traditional method
            // Replace form with thank you message and WhatsApp link even with fallback
            showThankYouMessage();
            this.submit();
        });
    });
}

// WhatsApp redirect button functionality
function showWhatsAppButton() {
    // Check if button already exists to avoid duplicates
    const existingButton = document.getElementById('whatsapp-redirect-btn');
    if (existingButton) {
        return;
    }
    
    // Create WhatsApp redirect button
    const whatsappButton = document.createElement('div');
    whatsappButton.id = 'whatsapp-redirect-btn';
    whatsappButton.innerHTML = `
        <div class="whatsapp-button-content">
            <i class="fab fa-whatsapp"></i>
            <span>Join Our WhatsApp Group</span>
            <i class="fas fa-arrow-right"></i>
        </div>
    `;
    
    // Add styles for the WhatsApp button
    whatsappButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: linear-gradient(45deg, #25D366, #128C7E);
        color: #ffffff;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
        cursor: pointer;
        z-index: 1001;
        transform: translateX(100%);
        transition: all 0.3s ease;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.2);
        animation: whatsapp-pulse 2s infinite;
    `;
    
    // Style the button content
    const buttonContent = whatsappButton.querySelector('.whatsapp-button-content');
    if (buttonContent) {
        buttonContent.style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
            white-space: nowrap;
        `;
    }
    
    // Add click event listener using the global WhatsApp link
    whatsappButton.addEventListener('click', () => {
        // Use the global WhatsApp link (can be updated via updateWhatsAppLink function)
        const whatsappLink = window.TECHINNOVATE_WHATSAPP_LINK || 'https://wa.me/1234567890?text=Hello%20TECHINNOVATE!%20I%20just%20submitted%20my%20application%20and%20would%20like%20to%20join%20the%20WhatsApp%20group.';
        window.open(whatsappLink, '_blank');
        
        // Hide the button after clicking
        whatsappButton.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (whatsappButton.parentNode) {
                whatsappButton.parentNode.removeChild(whatsappButton);
            }
        }, 300);
    });
    
    // Add hover effects
    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.transform = 'translateX(0) scale(1.05)';
        whatsappButton.style.boxShadow = '0 15px 40px rgba(37, 211, 102, 0.6)';
    });
    
    whatsappButton.addEventListener('mouseleave', () => {
        whatsappButton.style.transform = 'translateX(0) scale(1)';
        whatsappButton.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.4)';
    });
    
    // Add to DOM
    document.body.appendChild(whatsappButton);
    
    // Animate in after a short delay
    setTimeout(() => {
        whatsappButton.style.transform = 'translateX(0)';
    }, 500);
    
    // Auto-hide after 30 seconds if not clicked
    setTimeout(() => {
        if (whatsappButton.parentNode) {
            whatsappButton.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (whatsappButton.parentNode) {
                    whatsappButton.parentNode.removeChild(whatsappButton);
                }
            }, 300);
        }
    }, 30000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(45deg, #00ff88, #00cc6a)' : 'linear-gradient(45deg, #00ffff, #ff00ff)'};
        color: #000;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Thank you message with WhatsApp link
function showThankYouMessage() {
    // Get the form container
    const formContainer = document.querySelector('.form-container');
    if (!formContainer) return;
    
    // Create thank you message box
    const thankYouBox = document.createElement('div');
    thankYouBox.className = 'thank-you-box';
    thankYouBox.innerHTML = `
        <div class="thank-you-content">
            <h3>Thank You for Your Application!</h3>
            <p>Your application has been submitted successfully. We'll review it and get back to you soon.</p>
            <p>In the meantime, join our WhatsApp group to stay updated:</p>
            <a href="${window.TECHINNOVATE_WHATSAPP_LINK || 'https://wa.me/1234567890?text=Hello%20TECHINNOVATE!%20I%20just%20submitted%20my%20application%20and%20would%20like%20to%20join%20the%20WhatsApp%20group.'}"
               class="btn btn-primary whatsapp-link" target="_blank">
                <i class="fab fa-whatsapp"></i>
                Join WhatsApp Group
            </a>
        </div>
    `;
    
    // Add styles for the thank you box
    thankYouBox.style.cssText = `
        max-width: 800px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 255, 255, 0.2);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 0.6s ease-out;
    `;
    
    // Style the heading
    const heading = thankYouBox.querySelector('h3');
    if (heading) {
        heading.style.cssText = `
            font-family: 'Orbitron', monospace;
            font-size: 2rem;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        `;
    }
    
    // Style the paragraphs
    const paragraphs = thankYouBox.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.cssText = `
            color: #cccccc;
            margin-bottom: 15px;
            line-height: 1.6;
        `;
    });
    
    // Style the WhatsApp link button
    const whatsappLink = thankYouBox.querySelector('.whatsapp-link');
    if (whatsappLink) {
        whatsappLink.style.cssText = `
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-family: 'Orbitron', monospace;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            background: linear-gradient(45deg, #25D366, #128C7E);
            color: #ffffff;
            margin-top: 20px;
        `;
        
        // Add hover effect
        whatsappLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.4)';
        });
        
        whatsappLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    }
    
    // Replace form with thank you box
    formContainer.innerHTML = '';
    formContainer.appendChild(thankYouBox);
    
    // Add animation CSS if not already present
    if (!document.getElementById('thank-you-animation')) {
        const style = document.createElement('style');
        style.id = 'thank-you-animation';
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Form validation enhancement
function enhanceFormValidation() {
    const inputs = document.querySelectorAll('.join-form input, .join-form select, .join-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Check if required field is empty
    if (isRequired && !value) {
        field.classList.add('error');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    return true;
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', function() {
    enhanceFormValidation();
});

// Hidden iframe handling for form submission
const hiddenIframe = document.getElementById('hidden_iframe');
if (hiddenIframe) {
    hiddenIframe.addEventListener('load', () => {
        console.log('Form submitted successfully');
        showNotification('Application submitted successfully! We\'ll get back to you soon.', 'success');
    });
}

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    border: none;
    border-radius: 50%;
    color: #000000;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.boxShadow = '0 10px 25px rgba(0, 255, 255, 0.5)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 5px 15px rgba(0, 255, 255, 0.3)';
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar background effect
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Scroll to top button visibility
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
}, 16)); // ~60fps

// Initialize page with fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu with Escape key
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }
});

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for additional functionality
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for additional functionality
            console.log('Swipe down detected');
        }
    }
}

// Add loading state for better UX
window.addEventListener('load', () => {
    // Remove any loading indicators
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    });
    
    // Add success animation
    const successAnimation = document.createElement('div');
    successAnimation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        background: linear-gradient(45deg, #00ffff, #ff00ff);
        border-radius: 50%;
        z-index: 9999;
        animation: success-pulse 1s ease-out forwards;
    `;
    
    document.body.appendChild(successAnimation);
    
    setTimeout(() => {
        if (successAnimation.parentNode) {
            successAnimation.parentNode.removeChild(successAnimation);
        }
    }, 1000);
});

// Add CSS for success animation
const successStyle = document.createElement('style');
successStyle.textContent = `
    @keyframes success-pulse {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(successStyle);

// Function to update WhatsApp link (to be called when actual link is provided)
function updateWhatsAppLink(newLink) {
    // Store the WhatsApp link globally for future use
    window.TECHINNOVATE_WHATSAPP_LINK = newLink;
    console.log('WhatsApp link updated:', newLink);
}

// Default WhatsApp link (placeholder)
window.TECHINNOVATE_WHATSAPP_LINK = 'https://chat.whatsapp.com/BrK7g7JjPsG5silp28znPB?mode=ac_t';
