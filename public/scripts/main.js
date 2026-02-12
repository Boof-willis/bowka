// Berry Home Improvements - Interactive JavaScript

// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initAccordion();
    initImageSliders();
    initBeforeAfterSliders();
    initProjectSelector();
    initMobileCarousel();
    initScrollEffects();
    initNavigation();

    initWordAnimations();
    
});

// Initialize word animations
function initWordAnimations() {
    // Add loaded class to trigger animations
    document.documentElement.classList.add('loaded');
    
    // Ensure all h1 spans are ready for animation
    const headings = document.querySelectorAll('.main-heading, .mobile-heading, .section-heading, .about-heading, .cta-heading');
    
    headings.forEach(heading => {
        const spans = heading.querySelectorAll('span');
        spans.forEach((span, index) => {
            // Set initial state
            span.style.opacity = '0';
            span.style.transform = 'translateY(30px)';
            
            // Trigger animation with delay - start at 100ms for first word
            setTimeout(() => {
                span.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, (index + 1) * 100); // 100ms, 200ms, 300ms, etc.
        });
    });
}

// FAQ Accordion Functionality
function initAccordion() {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const activeTitle = document.querySelector('.accordion-title.active');

            // Close any currently open accordion
            if (activeTitle && activeTitle !== title) {
                activeTitle.classList.remove('active');
                activeTitle.nextElementSibling.style.maxHeight = '0px';
            }

            // Toggle current accordion
            title.classList.toggle('active');
            if (title.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        });
    });
}

// Before/After Slider Functionality
function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.before-after-slider');
    
    sliders.forEach(slider => {
        const afterImage = slider.querySelector('.after-image');
        const handle = slider.querySelector('.slider-handle');
        let isDragging = false;
        
        function updateSlider(percentage) {
            // Clamp percentage between 0 and 100
            percentage = Math.max(0, Math.min(100, percentage));
            
            // Update both clip-path and handle position simultaneously
            requestAnimationFrame(() => {
                afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
                handle.style.left = `${percentage}%`;
            });
        }
        
        function handleMove(clientX) {
            const rect = slider.getBoundingClientRect();
            const percentage = ((clientX - rect.left) / rect.width) * 100;
            updateSlider(percentage);
        }
        
        // Mouse events
        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            handleMove(e.clientX);
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                handleMove(e.clientX);
            }
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // Touch events for mobile
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            const touch = e.touches[0];
            handleMove(touch.clientX);
            e.preventDefault();
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const touch = e.touches[0];
                handleMove(touch.clientX);
                e.preventDefault();
            }
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Click anywhere on slider to move handle
        slider.addEventListener('click', (e) => {
            if (!isDragging) {
                const rect = slider.getBoundingClientRect();
                const percentage = ((e.clientX - rect.left) / rect.width) * 100;
                updateSlider(percentage);
            }
        });
        
        // Prevent context menu on right click
        slider.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
}

// Project Selector Functionality
function initProjectSelector() {
    const mainSlider = document.querySelector('.main-slider');
    const thumbnails = document.querySelectorAll('.project-thumb');
    const titleElement = document.querySelector('.main-before-after-container .before-after-title');
    
    if (!mainSlider || !thumbnails.length) return;
    
    const beforeImage = mainSlider.querySelector('.before-image img');
    const afterImage = mainSlider.querySelector('.after-image img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Get project data
            const beforeSrc = this.dataset.before;
            const afterSrc = this.dataset.after;
            const title = this.dataset.title;
            
            // Add fade out effect
            mainSlider.style.opacity = '0.6';
            mainSlider.style.transition = 'opacity 0.3s ease';
            
            // Update images after a short delay for smooth transition
            setTimeout(() => {
                beforeImage.src = beforeSrc;
                afterImage.src = afterSrc;
                if (titleElement) {
                    titleElement.textContent = title;
                }
                
                // Fade back in
                mainSlider.style.opacity = '1';
            }, 150);
            
            // Reset slider position to 50%
            setTimeout(() => {
                const afterImageElement = mainSlider.querySelector('.after-image');
                const handle = mainSlider.querySelector('.slider-handle');
                if (afterImageElement && handle) {
                    afterImageElement.style.clipPath = 'inset(0 50% 0 0)';
                    handle.style.left = '50%';
                }
            }, 300);
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'project_view', {
                    'event_category': 'engagement',
                    'event_label': title,
                    'value': 1
                });
            }
        });
    });
}

// Image Slider Functionality
function initImageSliders() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        let currentIndex = 0;
        
        if (images.length > 1) {
            // Auto-advance slider every 4 seconds
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 4000);
        }
    });
    
    // Gallery slider functionality
    const gallerySliders = document.querySelectorAll('.gallery-slider');
    
    gallerySliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        let currentIndex = 0;
        
        if (images.length > 1) {
            // Auto-advance gallery slider every 3 seconds
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 3000);
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    const navigation = document.getElementById('section-navigation');
    const trustBadges = document.querySelector('.trust-badges');
    let lastScroll = 0;

    window.addEventListener('scroll', debounce(() => {
        const currentScroll = window.scrollY;
        
        // Navigation shadow
        if (currentScroll > 50) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }

        // Animate trust badges on scroll
        if (trustBadges && isInViewport(trustBadges)) {
            trustBadges.style.opacity = '1';
            trustBadges.style.transform = 'translateY(0)';
        }

        // Scroll direction for sticky CTA
        const stickyCTA = document.querySelector('.sticky-cta');
        if (stickyCTA) {
            if (currentScroll > lastScroll) {
                // Scrolling down
                stickyCTA.style.transform = 'translateY(0)';
            } else {
                // Scrolling up
                stickyCTA.style.transform = 'translateY(100%)';
            }
        }
        lastScroll = currentScroll;
    }, 100));
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation Functionality
function initNavigation() {
    // Phone button click tracking
    const phoneButtons = document.querySelectorAll('.phone-button');
    phoneButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track phone button clicks if analytics is available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'event_category': 'engagement',
                    'event_label': 'header_phone_button'
                });
            }
        });
    });
    
    // Landing card click tracking and survey redirect
    const landingCards = document.querySelectorAll('.landing-card');
    landingCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const cardType = this.id.includes('residential') ? 'residential' : 'commercial';
            
            // Track card clicks if analytics is available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'survey_start', {
                    'event_category': 'conversion',
                    'event_label': cardType,
                    'value': 1
                });
            }
            
            // Show loading state
            showSurveyRedirect(cardType);
        });
    });
}

// Survey redirect function
function showSurveyRedirect(projectType) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'survey-redirect-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Starting Your ${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Project Survey</h3>
            </div>
            <div class="modal-body">
                <div class="loading-spinner"></div>
                <p>Preparing your personalized quote form...</p>
                <p class="modal-subtext">This will take just 2 minutes and help us provide an accurate estimate</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Simulate redirect to survey (replace with actual URL)
    setTimeout(() => {
        // In production, this would redirect to your survey tool:
        // window.location.href = `/survey?type=${projectType}`;
        
        // For demo, show completion message
        modal.querySelector('.modal-body').innerHTML = `
            <div class="success-icon">✓</div>
            <p><strong>Survey Ready!</strong></p>
            <p>In production, this would redirect to your multi-step survey form.</p>
            <button onclick="closeModal()" class="modal-close-btn">Close Demo</button>
        `;
    }, 2000);
}

// Utility Functions

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fade in animation for elements
function fadeInElement(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}

// Animate elements on scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .gallery-image');
    
    function checkAnimation() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                fadeInElement(element);
                element.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Check on load
}

// Initialize scroll animations after a short delay
setTimeout(initScrollAnimations, 500);

// Form submission handling (if forms are added later)
function handleFormSubmission(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formType = this.getAttribute('data-form-type') || 'contact';
        
        // Track form submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'lead_generation',
                'event_label': formType
            });
        }
        
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message
        showSuccessMessage('Thank you! We\'ll be in touch soon.');
    });
}

// Success message display
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #16a34a;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 5000);
}

// Add keyframe animations for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any scroll-based animations or effects can be added here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images (optional enhancement)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    initLazyLoading();
}

// Mobile Carousel Functionality
function initMobileCarousel() {
    const carouselContainer = document.querySelector('.mobile-carousel-container');
    if (!carouselContainer) return;
    
    const track = document.querySelector('.mobile-carousel-track');
    const prevButton = document.querySelector('.mobile-carousel-prev');
    const nextButton = document.querySelector('.mobile-carousel-next');
    const currentSlideSpan = document.querySelector('.current-slide');
    const totalSlidesSpan = document.querySelector('.total-slides');
    
    if (!track || !prevButton || !nextButton || !currentSlideSpan || !totalSlidesSpan) return;
    
    let currentSlide = 0;
    const totalSlides = 4;
    
    // Initialize counter
    currentSlideSpan.textContent = currentSlide + 1;
    totalSlidesSpan.textContent = totalSlides;
    
    // Update carousel position
    function updateCarousel() {
        const translateX = -(currentSlide * 25); // Each slide is 25% of track width
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update counter
        currentSlideSpan.textContent = currentSlide + 1;
        
        // Remove button disabled states for infinite loop
        prevButton.disabled = false;
        nextButton.disabled = false;
        
        // Initialize before/after sliders for the current slide
        const currentSlider = track.children[currentSlide].querySelector('.before-after-slider');
        if (currentSlider && !currentSlider.classList.contains('initialized')) {
            initSingleBeforeAfterSlider(currentSlider);
            currentSlider.classList.add('initialized');
        }
    }
    
    // Previous button - infinite loop
    prevButton.addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
        updateCarousel();
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'carousel_navigation', {
                'event_category': 'engagement',
                'event_label': 'previous',
                'value': currentSlide + 1
            });
        }
    });
    
    // Next button - infinite loop
    nextButton.addEventListener('click', () => {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        updateCarousel();
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'carousel_navigation', {
                'event_category': 'engagement', 
                'event_label': 'next',
                'value': currentSlide + 1
            });
        }
    });
    
    // Initialize first slide
    updateCarousel();
}

// Helper function to initialize a single before/after slider
function initSingleBeforeAfterSlider(slider) {
    const handle = slider.querySelector('.slider-handle');
    const afterImage = slider.querySelector('.after-image');
    
    if (!handle || !afterImage) return;
    
    let isDragging = false;
    
    // Mouse events
    handle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
    
    // Touch events
    handle.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', stopDrag);
    
    // Click on slider to move handle
    slider.addEventListener('click', function(e) {
        if (isDragging) return;
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        updateSliderPosition(Math.max(0, Math.min(100, percentage)));
    });
    
    function startDrag(e) {
        isDragging = true;
        e.preventDefault();
    }
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const rect = slider.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        
        requestAnimationFrame(() => {
            updateSliderPosition(Math.max(0, Math.min(100, percentage)));
        });
    }
    
    function stopDrag() {
        isDragging = false;
    }
    
    function updateSliderPosition(percentage) {
        handle.style.left = percentage + '%';
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
    
    // Set initial position to 50%
    updateSliderPosition(50);
}

// Export functions for potential external use
window.BerryHomeImprovements = {
    initAccordion,
    initImageSliders,
    initBeforeAfterSliders,
    initProjectSelector,
    initMobileCarousel,
    initScrollEffects,
    showSuccessMessage
}; 



// Global function to close the modal
function closeModal() {
    const modal = document.querySelector('.survey-redirect-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
}

 