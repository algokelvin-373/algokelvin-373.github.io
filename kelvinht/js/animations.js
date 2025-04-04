document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: false,
        mirror: false
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Add hover effect for links and buttons
    const hoverElements = document.querySelectorAll('a, button, .btn-hover');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '2px solid var(--primary-color)';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.opacity = '0.3';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--primary-color)';
            cursor.style.border = 'none';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
            cursorFollower.style.opacity = '0.5';
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Tilt effect for card
    const card = document.querySelector('.tilt-effect');
    if (card) {
        card.addEventListener('mousemove', function(e) {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateX = mouseY * -0.05;
            const rotateY = mouseX * 0.05;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // Create blog cards dynamically (example)
    const blogContainer = document.getElementById('home_blogger');
    if (blogContainer) {
        // This is just a placeholder. Your actual blog data would come from your home_blog.js
        const blogPosts = [
            {
                title: 'Getting Started with Android Development',
                excerpt: 'Learn the basics of Android app development with Kotlin.',
                date: 'March 15, 2025',
                image: '/placeholder.svg?height=200&width=400'
            },
            {
                title: 'Self Improvement Tips for Developers',
                excerpt: 'How to continuously improve your skills as a software developer.',
                date: 'March 10, 2025',
                image: '/placeholder.svg?height=200&width=400'
            },
            {
                title: 'Creating Responsive Web Designs',
                excerpt: 'Best practices for building websites that work on all devices.',
                date: 'March 5, 2025',
                image: '/placeholder.svg?height=200&width=400'
            }
        ];
        
        // Only create cards if the home_blogger is empty
        if (blogContainer.innerHTML.trim() === '') {
            blogPosts.forEach(post => {
                const blogCard = document.createElement('div');
                blogCard.className = 'blog-card';
                blogCard.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="blog-img">
                    <div class="blog-content">
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <p class="blog-date">${post.date}</p>
                    </div>
                `;
                blogContainer.appendChild(blogCard);
            });
        }
    }
});