(() => {
  const button = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-navigation]');
  const progress = document.querySelector('[data-reading-progress]');
  const article = document.querySelector('[data-article-body]');

  if (button && menu) {
    const closeMenu = () => {
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('.sr-only').textContent = 'Open navigation';
      menu.hidden = true;
      document.body.style.overflow = '';
    };

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      if (open) {
        closeMenu();
      } else {
        button.setAttribute('aria-expanded', 'true');
        button.querySelector('.sr-only').textContent = 'Close navigation';
        menu.hidden = false;
        document.body.style.overflow = 'hidden';
      }
    });

    menu.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080 && !menu.hidden) closeMenu();
    });
  }

  if (progress && article) {
    const updateProgress = () => {
      const rect = article.getBoundingClientRect();
      const start = window.scrollY + rect.top - window.innerHeight * 0.25;
      const end = start + article.offsetHeight - window.innerHeight * 0.5;
      const value = Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, end - start)));
      progress.style.width = `${value * 100}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }
})();
