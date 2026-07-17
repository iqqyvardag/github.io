(function () {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (!button || !menu) return;

  const label = button.querySelector('.sr-only');
  const firstLink = menu.querySelector('a');

  function setOpen(open, moveFocus) {
    button.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (label) label.textContent = open ? 'Close menu' : 'Open menu';

    if (moveFocus) {
      if (open && firstLink) firstLink.focus();
      if (!open) button.focus();
    }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true', false);
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false, false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) setOpen(false, true);
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 1001px)').matches && !menu.hidden) {
      setOpen(false, false);
    }
  });
})();
