(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.toggle('open'));
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => observer.observe(s));

  document.querySelectorAll('.service-filters a').forEach((filter) => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = filter.dataset.filter;
      document.querySelectorAll('.service-filters a').forEach((f) => f.classList.remove('active'));
      filter.classList.add('active');
      document.querySelectorAll('.service-block[data-category]').forEach((block) => {
        block.style.display = !cat || cat === 'all' || block.dataset.category === cat ? '' : 'none';
      });
    });
  });
})();
