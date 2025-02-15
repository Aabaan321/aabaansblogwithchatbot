document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Settings Panel Controls
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');

    if (settingsToggle && settingsPanel && closeSettings) {
        // Open settings panel
        settingsToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            settingsPanel.style.right = '0px';
            settingsToggle.style.opacity = '0';
        });

        // Close settings panel
        closeSettings.addEventListener('click', function() {
            settingsPanel.style.right = '-300px';
            settingsToggle.style.opacity = '1';
        });

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            if (!settingsPanel.contains(e.target) && 
                !settingsToggle.contains(e.target)) {
                settingsPanel.style.right = '-300px';
                settingsToggle.style.opacity = '1';
            }
        });
    }

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
        if (themeToggle) {
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
    }

    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

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
        const textSizeElement = document.getElementById('textSize');
        if (textSizeElement) {
            textSizeElement.textContent = size;
        }
    }

    const increaseText = document.getElementById('increaseText');
    const decreaseText = document.getElementById('decreaseText');

    if (increaseText) {
        increaseText.addEventListener('click', () => {
            if (textSizeControls.current < textSizeControls.max) {
                textSizeControls.current += textSizeControls.step;
                updateTextSize(textSizeControls.current);
            }
        });
    }

    if (decreaseText) {
        decreaseText.addEventListener('click', () => {
            if (textSizeControls.current > textSizeControls.min) {
                textSizeControls.current -= textSizeControls.step;
                updateTextSize(textSizeControls.current);
            }
        });
    }

    // Initialize text size from localStorage
    updateTextSize(textSizeControls.current);

    // Accent Color Control
    const colorPicker = document.getElementById('accentColor');
    const savedColor = localStorage.getItem('accentColor') || '#ff3e3e';

    function updateAccentColor(color) {
        document.documentElement.style.setProperty('--accent-color', color);
        localStorage.setItem('accentColor', color);
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

    if (colorPicker) {
        colorPicker.value = savedColor;
        updateAccentColor(savedColor);
        colorPicker.addEventListener('input', (e) => {
            updateAccentColor(e.target.value);
        });
    }

    // Navigation Menu Animation
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (nav) {
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
        }
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
// Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced responses object
    const responses = {
        // Website-specific responses
        "culinary": "I'm passionate about culinary arts! I'm planning to study in France and master French cuisine techniques. Would you like to know more about my culinary journey?",
        "cooking": "Cooking is my biggest passion! I specialize in French cuisine and am constantly learning new techniques. Would you like to see some of my favorite recipes?",
        "chef": "My goal is to become a professional chef! I'm planning to study culinary arts in France. Would you like to know more about my plans?",
        "france": "I plan to study culinary arts in France to master French cuisine. It's been my dream to learn from the best chefs in the world!",
        "sports": "I'm very active in sports! I particularly enjoy boxing and swimming. These activities help me stay fit and focused. Would you like to know more about my training routine?",
        "boxing": "Boxing is one of my favorite sports! It helps me stay disciplined and focused. I train regularly and love the physical and mental challenges it brings.",
        "swimming": "Swimming is a great way to stay fit! I practice regularly and find it very relaxing. Would you like to know more about my swimming routine?",
        "gaming": "I'm an avid gamer! I enjoy various games and sometimes stream my gaming sessions. Would you like to know what games I play?",
        "cars": "I'm passionate about supercars and motorcycles! I love learning about different models and their specifications. Do you have a favorite supercar?",
        "bikes": "Motorcycles are one of my passions! I'm particularly interested in high-performance bikes. Would you like to know more about my favorite models?",

        // General questions
        "hello": "Hi there! I'm the website's AI assistant. How can I help you today?",
        "hi": "Hello! I'd love to tell you more about my journey and passions. What would you like to know?",
        "how are you": "I'm doing great, thanks for asking! I'm here to tell you all about my culinary journey and other interests. What would you like to know?",
        "who are you": "I'm an AI assistant who can tell you all about this website owner's journey in culinary arts, sports, gaming, and automotive interests!",
        "what do you do": "I'm here to help you learn more about the website owner's passions in culinary arts, sports, gaming, and automotive interests. What would you like to know about?",

        // Default responses
        "default": "I'm not sure about that, but I'd be happy to tell you about my culinary journey, sports activities, gaming interests, or automotive passions. What interests you most?",
        "unknown": "I might not have information about that specific topic, but I can tell you about my main interests in culinary arts, sports, gaming, or automotive culture!"
    };

    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    if (chatToggle && chatWindow && closeChatBtn && chatInput && sendMessage && chatMessages) {
        // Toggle chat window
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.add('active');
            chatToggle.style.display = 'none';
        });

        closeChatBtn.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            chatToggle.style.display = 'block';
        });

        // Add typing indicator
        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.classList.add('message', 'bot-message', 'typing-indicator');
            typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            return typingDiv;
        }

        // Add message to chat
        function addMessage(message, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', `${sender}-message`);
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Get bot response
        function getBotResponse(message) {
            message = message.toLowerCase();
            
            // Check for exact matches
            if (responses[message]) {
                return responses[message];
            }

            // Check for partial matches
            for (let key of Object.keys(responses)) {
                if (message.includes(key)) {
                    return responses[key];
                }
            }

            // Check for question types
            if (message.includes('?')) {
                if (message.includes('what') || message.includes('tell me about')) {
                    return "I can tell you about my journey in culinary arts, sports, gaming, or automotive interests. Which area interests you?";
                }
                if (message.includes('where')) {
                    return "Are you interested in knowing about my future plans to study in France, or something else?";
                }
                if (message.includes('why')) {
                    return "My passion for culinary arts and other interests drives everything I do. Would you like to know more about any specific area?";
                }
                if (message.includes('how')) {
                    return "I'm pursuing my dreams through dedication and hard work. Would you like to know more about my journey?";
                }
            }

            return responses.default;
        }

        // Send message function
        function sendChatMessage() {
            const message = chatInput.value.trim();
            if (message === '') return;

            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';

            // Show typing indicator
            const typingIndicator = showTypingIndicator();

            // Get and add bot response with delay
            setTimeout(() => {
                typingIndicator.remove();
                const response = getBotResponse(message.toLowerCase());
                addMessage(response, 'bot');
            }, 1000);
        }

        // Event listeners
        sendMessage.addEventListener('click', sendChatMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });

        // Initial bot message
        setTimeout(() => {
            addMessage("Hello! How can I help you today?", 'bot');
        }, 1000);
    }
});

