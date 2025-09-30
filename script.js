// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to demo function
function scrollToDemo() {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
        demoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    const statItems = document.querySelectorAll('.stat-item');
    
    // Set initial styles for animation
    [...featureCards, ...statItems].forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Animate stats counter
    const animateCounter = (element, target) => {
        const duration = 2000; // 2 seconds
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Extract number from target string
            const number = parseFloat(target.replace(/[^\d.]/g, ''));
            const current = Math.floor(progress * number);
            
            // Update the display with proper formatting
            if (target.includes('%')) {
                element.textContent = current + '%';
            } else if (target.includes('ms')) {
                element.textContent = '< ' + current + 'ms';
            } else if (target.includes('+')) {
                element.textContent = current + '+';
            } else if (target.includes('/')) {
                element.textContent = target; // Keep 24/7 as is
            } else {
                element.textContent = current;
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target; // Ensure final value is correct
            }
        };
        
        requestAnimationFrame(animate);
    };
    
    // Start counter animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(statNumber => {
                    const target = statNumber.textContent;
                    animateCounter(statNumber, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Add typing animation to chat preview
document.addEventListener('DOMContentLoaded', function() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        // Hide typing indicator initially
        typingIndicator.style.display = 'none';
        
        // Show typing animation periodically
        setInterval(() => {
            typingIndicator.style.display = 'flex';
            setTimeout(() => {
                typingIndicator.style.display = 'none';
            }, 3000);
        }, 8000);
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// n8n Chat Widget is now handled by the official n8n chat library
// All chat functionality is managed by the createChat() function in the HTML

// Function to remove "Powered by n8n" text
function removePoweredByText() {
    const chatContainer = document.getElementById('n8n-chat');
    if (chatContainer) {
        // Find all text nodes and elements containing "Powered by n8n"
        const walker = document.createTreeWalker(
            chatContainer,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodesToRemove = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.includes('Powered by n8n') || 
                node.textContent.includes('Powered by') ||
                node.textContent.toLowerCase().includes('n8n')) {
                textNodesToRemove.push(node);
            }
        }

        // Remove the text nodes
        textNodesToRemove.forEach(textNode => {
            if (textNode.parentNode) {
                textNode.parentNode.removeChild(textNode);
            }
        });

        // Also remove any elements that might contain branding
        const elements = chatContainer.querySelectorAll('*');
        elements.forEach(el => {
            if (el.textContent.includes('Powered by n8n') || 
                el.textContent.includes('Powered by') ||
                (el.textContent.toLowerCase().includes('n8n') && el.textContent.length < 50)) {
                el.style.display = 'none';
            }
        });
    }
}

// Run the removal function periodically to catch dynamically added content
document.addEventListener('DOMContentLoaded', function() {
    // Initial removal
    setTimeout(removePoweredByText, 1000);
    
    // Keep checking periodically
    setInterval(removePoweredByText, 2000);
    
    // Also observe for changes in the chat container
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                setTimeout(removePoweredByText, 100);
            }
        });
    });
    
    setTimeout(() => {
        const chatContainer = document.getElementById('n8n-chat');
        if (chatContainer) {
            observer.observe(chatContainer, {
                childList: true,
                subtree: true
            });
        }
    }, 1000);
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
