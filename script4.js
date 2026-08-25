  // Reveal elements on scroll
    const elements = document.querySelectorAll('.contact-section h2, .contact-section p, .contact-form, .social-icons');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);