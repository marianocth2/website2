document.addEventListener('DOMContentLoaded', () => {
    const stickyCta = document.getElementById('sticky-cta');
    const ctaHero = document.getElementById('cta-hero');
    if (!stickyCta || !ctaHero) return;

    const isMobile = () => window.innerWidth <= 767;
    if (!isMobile()) return;

    let heroSeen = false;

    new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) heroSeen = true;
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    }).observe(ctaHero);

    const updateCta = () => {
        if (!isMobile()) return;
        if (window.scrollY <= 50) heroSeen = false;
        stickyCta.classList.toggle('active', !heroSeen);
    };

    window.addEventListener('scroll', updateCta, { passive: true });
    window.addEventListener('resize', () => {
        if (!isMobile()) stickyCta.classList.remove('active');
    });

    updateCta();
});
