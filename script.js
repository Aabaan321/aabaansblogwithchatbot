// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Sample blog posts data
    const blogPosts = [
        {
            title: "My Journey to Becoming a Chef",
            date: "2024-01-15",
            content: "Share your cooking experiences, favorite recipes, and culinary adventures here..."
        },
        {
            title: "Boxing and Culinary Arts: Finding Balance",
            date: "2024-01-10",
            content: "Write about how sports help you maintain discipline in the kitchen..."
        }
    ];

    // Function to load blog posts
    function loadBlogPosts() {
        const blogContainer = document.getElementById('blog-posts');
        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p class="post-date">${new Date(post.date).toLocaleDateString()}</p>
                <p>${post.content}</p>
            `;
            blogContainer.appendChild(postElement);
        });
    }

    // Smooth scrolling for navigation
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

    // Animation on scroll for interest cards
    function animateOnScroll() {
        const cards = document.querySelectorAll('.interest-card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize blog posts
    loadBlogPosts();

    // Dynamic copyright year
    const footer = document.querySelector('footer p');
    footer.innerHTML = `© ${new Date().getFullYear()} Journey to Culinary Excellence`;
});

// Add hover effect to navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#555';
    });
    link.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
});

// Add lazy loading for images (if you add them later)
document.addEventListener('DOMContentLoaded', function() {
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
