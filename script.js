document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        themeToggle.querySelector('span').textContent = 
            newTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
        themeToggle.querySelector('i').className = 
            newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    });

    // Text Size Controls
    const decreaseText = document.getElementById('decreaseText');
    const increaseText = document.getElementById('increaseText');
    const textSizeDisplay = document.getElementById('textSize');
    let currentSize = 16;

    function updateTextSize(size) {
        document.documentElement.style.setProperty('--font-size-base', `${size}px`);
        textSizeDisplay.textContent = size;
    }

    decreaseText.addEventListener('click', () => {
        if (currentSize > 12) {
            currentSize -= 2;
            updateTextSize(currentSize);
        }
    });

    increaseText.addEventListener('click', () => {
        if (currentSize < 24) {
            currentSize += 2;
            updateTextSize(currentSize);
        }
    });

    // Accent Color
    const accentColorPicker = document.getElementById('accentColor');
    accentColorPicker.addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--accent-color', e.target.value);
    });

    // Settings Panel Toggle
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');

    settingsToggle.addEventListener('click', () => {
        settingsPanel.classList.add('active');
    });

    closeSettings.addEventListener('click', () => {
        settingsPanel.classList.remove('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image Lazy Loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
