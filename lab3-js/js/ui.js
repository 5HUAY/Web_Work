function initActiveNav() {
  const links = document.querySelectorAll('nav a');
  const current = location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('is-active');
    }
  });
}

function initMenuToggle() {
  const panel = document.querySelector('.menu_panel');
  const btn = document.querySelector('.menu-toggle');

  if (!panel || !btn) return;

  btn.addEventListener('click', () => {
    panel.classList.toggle('open');

    const isOpen = panel.classList.contains('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
}

function initThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('siteTheme');
  if (saved === 'dark') {
    document.body.classList.add('theme-dark');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');

    const theme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
    localStorage.setItem('siteTheme', theme);
  });
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 300;
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

function initFilters() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.hidden = !match;
      });
    });
  });
}

function initModal() {
  const openBtn = document.querySelector('[data-open-modal]');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal-close');

  if (!modal) return;

  openBtn?.addEventListener('click', () => {
    modal.classList.add('open');
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}