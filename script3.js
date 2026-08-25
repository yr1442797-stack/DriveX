 // Scroll-triggered animation
        const animatedElements = document.querySelectorAll('.animate');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.2 });

        animatedElements.forEach(el => observer.observe(el));