// Smooth Scroll
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(255, 215, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Modal functionality
const modal = document.getElementById('modal');
const watchBtn = document.getElementById('watchBtn');
const closeBtn = document.querySelector('.close');

watchBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Platform buttons
document.querySelectorAll('.platform-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`Redirecionando para ${btn.textContent}...`);
    });
});

// Video placeholder click
document.querySelector('.video-placeholder').addEventListener('click', () => {
    alert('Abrindo trailer do filme...');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.galeria-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Batman cursor effect
document.addEventListener('mousemove', (e) => {
    const batSignal = document.querySelector('.bat-signal');
    if (batSignal) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        batSignal.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Glitch effect on title
const glitchTitle = document.querySelector('.glitch');
if (glitchTitle) {
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchTitle.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0000,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ff00,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #0000ff
            `;
            setTimeout(() => {
                glitchTitle.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            }, 100);
        }
    }, 2000);
}

// Gallery hover sound effect (visual feedback)
document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.borderColor = 'var(--secondary-color)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.borderColor = 'rgba(255, 215, 0, 0.2)';
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Stats counter animation
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const h3 = entry.target.querySelector('h3');
            const targetValue = parseFloat(h3.textContent);
            if (!isNaN(targetValue)) {
                animateCounter(h3, targetValue, 2000);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

console.log('🦇 Batman Landing Page carregada com sucesso!');
