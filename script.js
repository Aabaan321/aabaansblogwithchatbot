// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        } else {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        }
    }

    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navigation Menu Animation
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Settings Panel
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');

    settingsToggle.addEventListener('click', () => {
        settingsPanel.classList.add('active');
        settingsToggle.style.opacity = '0';
    });

    closeSettings.addEventListener('click', () => {
        settingsPanel.classList.remove('active');
        settingsToggle.style.opacity = '1';
    });

    // Text Size Controls
    const textSizeControls = {
        current: parseInt(localStorage.getItem('textSize')) || 16,
        min: 12,
        max: 24,
        step: 2
    };

    function updateTextSize(size) {
        document.documentElement.style.setProperty('--font-size-base', `${size}px`);
        localStorage.setItem('textSize', size);
        document.getElementById('textSize').textContent = size;
    }

    document.getElementById('increaseText').addEventListener('click', () => {
        if (textSizeControls.current < textSizeControls.max) {
            textSizeControls.current += textSizeControls.step;
            updateTextSize(textSizeControls.current);
        }
    });

    document.getElementById('decreaseText').addEventListener('click', () => {
        if (textSizeControls.current > textSizeControls.min) {
            textSizeControls.current -= textSizeControls.step;
            updateTextSize(textSizeControls.current);
        }
    });

    // Initialize text size from localStorage
    updateTextSize(textSizeControls.current);

    // Accent Color Control
    const colorPicker = document.getElementById('accentColor');
    const savedColor = localStorage.getItem('accentColor') || '#ff3e3e';

    function updateAccentColor(color) {
        document.documentElement.style.setProperty('--accent-color', color);
        localStorage.setItem('accentColor', color);
        
        // Update hover color (slightly lighter)
        const hoverColor = adjustColorBrightness(color, 20);
        document.documentElement.style.setProperty('--accent-hover', hoverColor);
    }

    function adjustColorBrightness(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (
            0x1000000 +
            (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)
        ).toString(16).slice(1);
    }

    colorPicker.value = savedColor;
    updateAccentColor(savedColor);

    colorPicker.addEventListener('input', (e) => {
        updateAccentColor(e.target.value);
    });

    // Image Lazy Loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Animated Counter
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 20);
    }

    // Initialize counters when they come into view
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => counterObserver.observe(counter));

    // Page Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
});
// Settings Panel Controls
document.addEventListener('DOMContentLoaded', function() {
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');

    // Settings Toggle
    settingsToggle.addEventListener('click', () => {
        settingsPanel.classList.add('active');
        settingsToggle.style.opacity = '0';
    });

    // Close Settings
    closeSettings.addEventListener('click', () => {
        settingsPanel.classList.remove('active');
        settingsToggle.style.opacity = '1';
    });

    // Close settings when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsPanel.contains(e.target) && 
            !settingsToggle.contains(e.target) && 
            settingsPanel.classList.contains('active')) {
            settingsPanel.classList.remove('active');
            settingsToggle.style.opacity = '1';
        }
    });
});
