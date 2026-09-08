// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Interseção de Elementos (Fade In Animation on Scroll)
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 2. Mudança no estilo da Navbar ao rolar a página
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 17, 26, 0.9)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(15, 17, 26, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Atualizar link ativo na navegação
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 4. Menu Mobile Simples (Hamburger Click)
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        alert("O menu mobile pode ser implementado aqui! Para manter simples e elegante por agora, ele está focado na versão desktop/responsiva básica.");
    });
});
